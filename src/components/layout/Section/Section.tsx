// ==========================================
// 3. src/components/layout/Section/Section.tsx
// ==========================================
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container } from '../Container';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  background?: 'white' | 'gray' | 'gradient';
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  containerSize = 'xl',
  background = 'white',
  noPadding = false,
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-50 to-white',
  };

  return (
    <motion.section
      id={id}
      className={cn(
        backgrounds[background],
        !noPadding && 'py-16 md:py-24',
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </motion.section>
  );
};