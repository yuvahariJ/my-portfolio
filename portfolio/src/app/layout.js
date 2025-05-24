"use client"

import "./globals.css";
import { ThemeProvider, useTheme } from "@/Context/ThemeProvider/Theme";
import Header from "@/Pages/Header";


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
