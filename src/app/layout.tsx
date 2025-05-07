import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

// todo: apply poppins, test layout responsive
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});
// const geistMono = Roboto_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Jay Mark Borja | My Resume",
  description:
    "Explore the professional resume of Jay Mark Borja, a skilled web developer specializing in modern web technologies including React, Symfony, and AWS. View projects, experience, and contact details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`!scroll-smooth ${poppins.variable} `}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="images/mobile-logo.svg" type="image/icon type" />
      </head>
      <body>{children}</body>
    </html>
  );
}
