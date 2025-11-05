import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar/Navbar";
import Provider from "./Provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSS Quizzer",
  description: "Are you prepared?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <Provider>
              <Navbar />
              {children}
          </Provider>
      </body>
    </html>
  );
}
