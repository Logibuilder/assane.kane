"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { SkillCard } from './SkillCard';
import { skillCategories } from '@/data/skills';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" background="default">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-black text-center text-foreground mb-4 tracking-tight">
          Compétences
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto mb-16 rounded-full" />

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-center text-foreground mb-8">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};