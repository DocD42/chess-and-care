import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chessandcare.com"),
  title: "Chess & Care | Play better. Live healthier. Connect deeper.",
  description:
    "A calm, premium platform for adult chess players to improve sleep, nutrition, fitness, mobility, mental recovery, and meaningful matching.",
  openGraph: {
    title: "Chess & Care",
    description:
      "Play better. Live healthier. Connect deeper. Health-led performance and meaningful matching for adult chess players.",
    siteName: "Chess & Care",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chess & Care",
    description:
      "Health-led performance and meaningful matching for adult chess players.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
