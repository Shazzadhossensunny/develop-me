'use client';

import { motion } from 'framer-motion';
import { ThemeProvider } from '@/context/ThemeContext';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className = '' }: LayoutProps) {
  return (
    <ThemeProvider>
      <div
        className={`min-h-screen bg-secondary text-primary transition-colors duration-300 ${className}`}
      >
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
