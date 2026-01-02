import '../styles/global.css';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/contexts/ThemeContext'; // Import crucial

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Assane Kane | Portfolio',
  description: 'Portfolio Développeur Fullstack',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Le ThemeProvider DOIT englober le Menu et les enfants */}
        <ThemeProvider>
            <main className="flex-grow flex flex-col">
                {children}
            </main>
        </ThemeProvider>
      </body>
    </html>
  );
}