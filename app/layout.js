import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LogBook",
  description: "A Jounaling App",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="bg-[url('/bg.jpg')] opacity-20 fixed -z-10 inset-0"/>
        <Header/>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-blue-300 py-12 bg-opacity-10">
          <div className="mx-auto px-4 text-center text-gray-950 font-medium">
            <p>Made By Chandan Rout</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
