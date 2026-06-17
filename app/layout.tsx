import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-black antialiased">{children}</body>
    </html>
  );
}
