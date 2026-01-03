// ==========================================
// 1. src/components/sections/About/About.tsx
// ==========================================
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { FiCode, FiTarget, FiHeart } from 'react-icons/fi';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <FiCode className="text-3xl" />,
      title: "Développement Full Stack",
      description: "Création d'applications web complètes avec React, Next.js, et Spring Boot"
    },
    {
      icon: <FiTarget className="text-3xl" />,
      title: "Solutions Sur Mesure",
      description: "Conception de systèmes adaptés aux besoins spécifiques"
    },
    {
      icon: <FiHeart className="text-3xl" />,
      title: "Passion & Innovation",
      description: "Toujours à la recherche de nouvelles technologies"
    }
  ];

  return (
    <Section id="about" background="gray">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">À Propos</h2>
        <div className="w-20 h-1 bg-red-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Bonjour, je suis Assane 👋</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Développeur Full Stack passionné, je transforme des idées en applications 
              web performantes et intuitives. Actuellement en dernière année d'études 
              en informatique, je me spécialise dans le développement d'applications 
              modernes avec React, Next.js et Spring Boot.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Mon objectif est de créer des solutions techniques élégantes qui résolvent 
              de vrais problèmes utilisateurs, tout en maintenant un code propre et maintenable.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-red-500 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};