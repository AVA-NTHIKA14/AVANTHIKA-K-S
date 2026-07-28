import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Avanthika K S — Product Designer",
  description:
    "I design experiences that make complex things feel obvious. Product Designer, Final Year Btech Student, Builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="bg-white dark:bg-black text-zinc-650 dark:text-zinc-400 antialiased overflow-x-hidden relative">
        {/* Ragam Vibe Grainy Noise Overlay */}
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}
