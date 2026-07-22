"use client";
import React, { useState, useEffect, useRef } from 'react';
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

  // Cible de scroll en attente, appliquée seulement une fois l'animation de sortie terminée
  const pendingScrollTarget = useRef<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTarget = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
  };

  const handleNavClick = (href: string) => {
    if (isMobileMenuOpen) {
      // Menu mobile ouvert : on mémorise la cible, on ferme,
      // et onExitComplete se chargera de scroller au bon moment
      pendingScrollTarget.current = href;
      setIsMobileMenuOpen(false);
    } else {
      // Desktop : rien à attendre, on scrolle direct
      scrollToTarget(href);
    }
  };

  const handleMobileToggle = () => {
    setIsMobileMenuOpen((prev) => {
      return !prev;
    });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        (isScrolled || isMobileMenuOpen)
          ? "bg-background/95 backdrop-blur-lg border-b border-glass-border py-2"
          : "bg-transparent py-6"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center h-12 relative">
        <motion.div
          className="text-3xl font-black text-primary cursor-pointer tracking-tighter"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          AK
        </motion.div>

        <div className="hidden md:flex items-center">
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

          <div className="w-px h-5 bg-glass-border mx-6"></div>

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
            onClick={handleMobileToggle}
          >
            {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </nav>

      <AnimatePresence
        onExitComplete={() => {
          // L'animation de fermeture est réellement terminée : on peut scroller
          if (pendingScrollTarget.current) {
            scrollToTarget(pendingScrollTarget.current);
            pendingScrollTarget.current = null;
          }
        }}
      >
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-glass-border shadow-xl overflow-hidden"
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