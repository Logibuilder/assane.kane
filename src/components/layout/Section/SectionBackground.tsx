"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface SectionBackgroundProps {
  glowPosition?: 'left' | 'right' | 'center';
}

export const SectionBackground: React.FC<SectionBackgroundProps> = ({ glowPosition = 'center' }) => {
  // Détermine la position de la lueur principale
  const getPrimaryPosition = () => {
    switch (glowPosition) {
      case 'left':
        return '-left-1/4 top-1/4';
      case 'right':
        return '-right-1/4 top-1/4';
      case 'center':
      default:
        return 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2';
    }
  };

  // Détermine la position de la lueur secondaire (pour l'effet de profondeur)
  const getSecondaryPosition = () => {
    switch (glowPosition) {
      case 'left':
        return 'left-0 bottom-0';
      case 'right':
        return 'right-0 bottom-0';
      case 'center':
      default:
        return 'left-1/3 top-1/3';
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Lueur Principale : Grande et asymétrique */}
      <motion.div
        className={`absolute ${getPrimaryPosition()} w-[600px] h-[500px] bg-[var(--color-primary)] rounded-[100%] blur-[120px] mix-blend-screen`}
        animate={{
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.05, 0.12, 0.05], // Opacité augmentée pour être bien visible
          rotate: [0, 10, -5, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Lueur Secondaire : Plus sombre, crée la texture "fumée" en bougeant différemment */}
      <motion.div
        className={`absolute ${getSecondaryPosition()} w-[500px] h-[400px] bg-[#9b1c28] rounded-full blur-[100px] mix-blend-screen`}
        animate={{
          x: [-30, 30, -30],
          y: [30, -30, 30],
          opacity: [0.03, 0.08, 0.03],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Grille de fond un peu plus contrastée */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-glass-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-glass-border)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-70" />
    </div>
  );
};