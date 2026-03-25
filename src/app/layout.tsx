import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/Nav/TopNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kosi's Portfolio",
  description: "Created and maintained by Kosisochukwu, a passionate full-stack developer. Showcasing a collection of projects that demonstrate expertise in web development, software engineering, and problem-solving skills. Explore the portfolio to see the innovative solutions and creative work that Kosisochukwu has crafted.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNavbar />
        {children}
      </body>
    </html>
  );
}
