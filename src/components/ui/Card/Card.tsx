// ==========================================
// 5. src/components/ui/Card/Card.tsx
// ==========================================
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

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hoverable = false,
  onClick 
}) => {
  return (
    <motion.div
      className={cn(
        "bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden",
        hoverable && "cursor-pointer transition-shadow duration-300 hover:shadow-xl",
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