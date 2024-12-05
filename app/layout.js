import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LogBook",
  description: "A Jounaling App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-gradient-to-b from-cyan-50 via-amber-50 to-cyan-50`}
        >
          <div className="inset-0 bg-[url('/bg.jpg')] opacity-20 fixed -z-10 " />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors/>
          <footer className="bg-blue-300 py-12 bg-opacity-10">
            <div className="container mx-auto px-4 text-center text-gray-900">
              <p>Made By Chandan Rout</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
