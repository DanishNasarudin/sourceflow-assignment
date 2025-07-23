import Navbar from "@/components/custom/navbar";
import { navList } from "@/lib/data";
import Providers from "@/lib/providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Software Recruitment co.",
    template: "%s | Software Recruitment co.",
  },
  description: "Developed by Danish Nasarudin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navData = navList;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col gap-2`}
      >
        <Providers>
          <Navbar data={navData} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
