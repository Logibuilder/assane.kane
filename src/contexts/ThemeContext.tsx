"use client"; // <--- Très important

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: 'dark' | 'light';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Vérification pour éviter les erreurs d'hydratation
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
          setIsDarkMode(savedTheme === 'dark');
        } else {
          setIsDarkMode(systemPrefersDark);
        }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
      document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleTheme,
      theme: isDarkMode ? 'dark' : 'light' 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};