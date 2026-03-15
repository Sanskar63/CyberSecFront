import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatBot from "@/Components/ChatBot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Stri-Saksham — AI-Powered Cybersecurity Companion",
  description:
    "Your trusted AI-powered companion for cybersecurity awareness. Stay safe in the digital world with expert guidance, real-time updates, and personalized security recommendations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
        {/* <ChatBot /> */}
      </body>
    </html>
  );
}
