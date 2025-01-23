import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MainNavBar from "@/components/common/MainNavBar";
import AuthNavBar from "@/components/common/AuthNavbar";
import "./../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Send App",
  description: "Send Flutterwave",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <AuthNavBar/>
        {children}
      </body>
    </html>
  );
}
