import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import { navFooterList, navList } from "@/lib/data";
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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export const metadata: Metadata = {
  title: {
    default: "Software Recruitment co.",
    template: "%s | Software Recruitment co.",
  },
  description: "Developed by Danish Nasarudin.",
  icons: {
    icon: [{ url: new URL("/favicon.ico", baseUrl), type: "image/x-icon" }],
  },
  openGraph: {
    siteName: "Software Recruitment",
    title: "Software Recruitment co.",
    description: "Developed by Danish Nasarudin.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navData = navList;
  const navFooterData = navFooterList;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <Navbar data={navData} />
          {children}
          <Footer data={navFooterData} />
        </Providers>
      </body>
    </html>
  );
}
