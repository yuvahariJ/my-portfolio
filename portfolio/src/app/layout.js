"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, useTheme } from "@/Context/ThemeProvider/Theme";
import Header from "@/Pages/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function ThemedApp({ children }) {
  const { theme } = useTheme();
  return (
    <div className={theme ? "dark-theme" : "light-theme"}>
      {children}
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <ThemedApp>
            <Header/>
            {children}
          </ThemedApp>
        </ThemeProvider>
      </body>
    </html>
  );
}
