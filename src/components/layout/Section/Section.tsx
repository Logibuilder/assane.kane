"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container } from '../Container/Container';
import { SectionBackground } from './SectionBackground';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  background?: 'default' | 'alternate' | 'gradient';
  noPadding?: boolean;
  withGlow?: boolean; // Nouvelle option pour activer/désactiver la lueur
  glowPosition?: 'left' | 'right' | 'center'; // Position de la lueur
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  containerSize = 'xl',
  background = 'default',
  noPadding = false,
  withGlow = true, // Activé par défaut
  glowPosition = 'center',
}) => {
  const backgrounds = {
    default: 'bg-background',
    alternate: 'bg-surface',
    gradient: 'bg-gradient-to-b from-background to-surface',
  };

  return (
    <motion.section
      id={id}
      className={cn(
        'relative overflow-hidden', // Ajout de relative et overflow-hidden pour contenir l'arrière-plan
        backgrounds[background],
        !noPadding && 'py-24',
        className,
        'transition-colors duration-300'
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Ajout du composant d'arrière-plan */}
      {withGlow && <SectionBackground glowPosition={glowPosition} />}

      {/* Le contenu doit être au-dessus (z-10) */}
      <div className="relative z-10">
        <Container size={containerSize}>{children}</Container>
      </div>
    </motion.section>
  );
};