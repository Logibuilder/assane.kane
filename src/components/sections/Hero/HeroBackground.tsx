"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Lueur rouge centrale (effet fumée/brouillard dynamique) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary)] opacity-20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Grille de fond qui s'adapte au thème clair/sombre */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-glass-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-glass-border)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
    </div>
  );
};