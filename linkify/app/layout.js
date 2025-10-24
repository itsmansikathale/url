import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/public/components/Navbar";
import { ThemeProvider } from "../public/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Linkify – The Smart URL Shortener",
  description:
    "GeLinkify makes sharing links simple, fast, and powerful.Turn long, messy URLs into short, clean, and trackable links in seconds. Whether you’re sharing on social media, sending in emails, or managing campaigns — Linkify helps you do it all with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
