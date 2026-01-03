// ==========================================
// 3. src/components/sections/Skills/SkillCard.tsx
// ==========================================
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  level: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ 
  name, 
  icon, 
  color, 
  level 
}) => {
  return (
    <motion.div whileHover={{ y: -8 }}>
      <Card className="p-6 text-center h-full">
        <div 
          className="text-5xl mb-4 flex justify-center"
          style={{ color }}
        >
          {icon}
        </div>
        <h4 className="font-semibold text-gray-900 mb-3">{name}</h4>
        
        {/* Level bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="h-2 rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${(level / 5) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </Card>
    </motion.div>
  );
};