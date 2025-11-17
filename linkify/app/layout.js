import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/public/components/Navbar";
import { ThemeProvider } from "../public/components/theme-provider";
import Footer from "@/public/components/Footer";
import Shorten from "./shorten/page";
import About from "./about/page";
import Contact from "./contact/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Linkify – Free Custom URL Shortener | Shorten Long Links Instantly",
  description:
    "Linkify is a free and fast online URL shortener that lets you shorten long links instantly. Create custom short URLs, share easily, and boost your branding.",
  keywords:
    "URL shortener, link shortener, short URL generator, shorten links, custom short URL, free link shortener, long to short link converter",
  authors: [{ name: "Linkify" }],
  creator: "Linkify",
  locale: "en_US",
  type: "website",
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
          <Shorten />
          <About />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
