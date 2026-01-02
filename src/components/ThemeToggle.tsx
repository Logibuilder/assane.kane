// src/pages/components/ThemeToggle.js
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';
import styles from '../styles/ThemeToggle.module.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.toggleButton} ${isDarkMode ? styles.dark : styles.light}`}
      aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
    >
      <div className={styles.toggleInner}>
        {isDarkMode ? (
          <FiSun className={`${styles.icon} ${styles.sun}`} />
        ) : (
          <FiMoon className={`${styles.icon} ${styles.moon}`} />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;