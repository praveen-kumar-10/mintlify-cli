import { type ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { Inter as FontSans } from "next/font/google";

import Navbar from "./navbar";

const inter = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className={`${inter.className} relative antialiased`}>
        <Navbar />
        <main className="prose prose-gray dark:prose-invert py-8 lg:px-12 mx-4 min-w-0 lg:mx-0">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
