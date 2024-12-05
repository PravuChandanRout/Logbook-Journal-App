"use server";

import { MOODS } from "@/app/lib/moods";
import { auth } from "@clerk/nextjs/server";
import { getPixabayImage } from "./public";
import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { request } from "@arcjet/next";
import arc from "@/lib/arcjet";

export async function writeJournal(data) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    // rate limiting using arcjet

    const req = await request()

    const decision = await arc.protect(req, {
      userId,
      requested: 1,
    })

    if(decision.isDenied()) {
      if(decision.reason.isRateLimit()){
        const { remaining, reset} = decision.reason;
        console.error({
          code: "RATE_LIMIT_EXCEEDED",
          details: {
            remaining,
            resetInSeconds: reset,
          },
        });
        throw new Error("Too many requests. Please try again later.");
      }
      throw new Error("Request blocked");
    }

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const mood = MOODS[data.mood.toUpperCase()];
    if (!mood) throw new Error("Invalid mood");

    const moodImageUrl = await getPixabayImage(data.moodQuery);

    const entry = await db.entry.create({
      data: {
        title: data.title,
        content: data.content,
        mood: mood.id,
        moodScore: mood.score,
        moodImageUrl,
        userId: user.id,
        collectionId: data.collectionId || null,
      },
    });

    await db.draft.deleteMany({
        where: { userId: user.id },
    })

    revalidatePath("/dashboard");
    return entry;
  } catch (error) {
    throw new Error(error.message);
  }
}
