"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void; 
}

export const Card: React.FC<CardProps> = ({ children, className, hoverable = false }) => {
  return (
    <motion.div
      className={cn(
        // Fond verre et bordure qui s'adaptent automatiquement au light/dark mode
        "bg-glass backdrop-blur-md rounded-2xl border border-glass-border overflow-hidden",
        hoverable && "cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(220,53,69,0.1)]",
        className
      )}
      whileHover={hoverable ? { y: -4 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};