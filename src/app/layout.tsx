import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import '../styles/fonts.css';
import Layout from '@/components/layout/Layout';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'DEVLOP.ME - Trusted Partner for Website Development',
  description:
    "Building the world's best marketing websites for over a decade. Your trusted partner for strategy, design, and development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable}`}>
      <body className="font-sporting antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
