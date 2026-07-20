"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { navigationItems } from '@/constants/navigation';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // On déclenche l'effet verre un peu plus tard pour laisser respirer le Hero
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        // Au scroll : fond flouté très subtil et padding réduit. En haut : 100% transparent.
        isScrolled 
          ? "bg-background/70 backdrop-blur-lg border-b border-glass-border py-2" 
          : "bg-transparent py-6"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center h-12">
        {/* Logo Minimaliste */}
        <motion.div
          className="text-3xl font-black text-primary cursor-pointer tracking-tighter"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          AK
        </motion.div>

        {/* Navigation Desktop - Conteneur global */}
        <div className="hidden md:flex items-center">
          
          {/* 1. Toggle Thème (Déplacé à gauche) */}
          {mounted && (
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-muted hover:text-primary transition-colors duration-300"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
          )}

          {/* 2. Ligne de séparation */}
          <div className="w-px h-5 bg-glass-border mx-6"></div>

          {/* 3. Liens texte pur */}
          <div className="flex items-center gap-10">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-6">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-muted hover:text-primary transition-colors"
            >
              {theme === 'dark' ? <FiSun size={22} /> : <FiMoon size={22} />}
            </button>
          )}
          <button
            className="text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Plein écran ou Dropdown élégant) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-glass-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 items-center">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-xl font-medium text-muted hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};