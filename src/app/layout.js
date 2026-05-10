import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Preeti Saini - Senior Headless WordPress & Next.js Developer",
  description: "Portfolio of Preeti Saini, an experienced web developer specializing in Next.js, React, and Headless WordPress.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
