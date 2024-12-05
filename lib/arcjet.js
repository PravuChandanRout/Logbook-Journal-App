import arcjet, { tokenBucket } from "@arcjet/next";

const arc = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"],
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 2,
      interval: 3600,
      capacity: 2,
    }),
  ],
});

export default arc;
