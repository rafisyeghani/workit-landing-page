import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fontFraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const fontManrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400","500","700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Workit - Data tailored to your needs",
  description: "Workit landing page - Frontend Internship technical test for PT Daya Rekadigital Indonesia",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontFraunces.variable} ${fontManrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-dark-purple font-body">{children}</body>
    </html>
  );
}
