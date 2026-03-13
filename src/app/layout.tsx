import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BigAntSosa | Streamer - Gamer - F1 Enthusiast",
  description:
    "Chicago guy streaming for fun. Gaming, F1 Enthusiast, Marathon Runner, Arc Raiders. Catch the vibes on Twitch, YouTube, TikTok & Instagram.",
  keywords: [
    "BigAntSosa",
    "Twitch",
    "streamer",
    "gaming",
    "Arc Raiders",
    "F1",
    "Chicago",
  ],
  openGraph: {
    title: "BigAntSosa | Streamer - Gamer - F1 Enthusiast",
    description:
      "Chicago guy streaming for fun. Gaming, F1, Marathon Runner. Catch the vibes live.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
