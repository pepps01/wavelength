import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MainNavBar from "@/components/common/MainNavBar";
import "./globals.css";
import AuthNavBar from "@/components/common/AuthNavbar";
import Navbar from "@/components/common/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type DashboardLayoutProps = {
  children: any;
  title?: string| undefined;
}

export const metadata: Metadata = {
  title: "Send App",
  description: "Send Flutterwave",
};

 const RootLayout= ({
  children,
  title
}: DashboardLayoutProps) => {

      return (
        <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {title == "main"?
            <><MainNavBar/></>
            :
            <><AuthNavBar/></>
            }
          {children}
        </body>
      </html>
    );
  }

export default RootLayout