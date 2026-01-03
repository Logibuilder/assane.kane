import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/constants/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* On ajoutera le Header ici plus tard */}
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        {/* On ajoutera le Footer ici plus tard */}
      </body>
    </html>
  );
}