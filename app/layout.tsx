import "./globals.css";
import * as React from "react";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";


const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXT with Dark Mode",
  description: "Next React App with Dark Mode Toggler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={quicksand.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}