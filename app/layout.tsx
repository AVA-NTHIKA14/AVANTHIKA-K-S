import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-geist", display: "swap", weight: "100 900" });
const geistMono = localFont({ src: "./fonts/GeistMonoVF.woff", variable: "--font-geist-mono", display: "swap", weight: "100 900" });

export const metadata: Metadata = {
  title: "Avanthika K S - Product Designer and ECE Student",
  description:
    "Product design and frontend work by Avanthika K S, an ECE student at GEC Palakkad. Explore interface projects, software work and embedded prototypes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-white dark:bg-black text-zinc-700 dark:text-zinc-400 antialiased overflow-x-hidden relative">
        {/* Ragam Vibe Grainy Noise Overlay */}
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}
