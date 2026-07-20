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

export const Card: React.FC<CardProps> = ({ children, className, hoverable = false, onClick }) => {
  return (
    <motion.div
      className={cn(
        "bg-glass backdrop-blur-md rounded-3xl border border-glass-border overflow-hidden",
        hoverable && "cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(220,53,69,0.1)]",
        className
      )}
      onClick={onClick}
      whileHover={hoverable ? { y: -4 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};