"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section/Section';
import { Card } from '@/components/ui/Card/Card';
import { FiCode, FiTarget, FiHeart } from 'react-icons/fi';

export const About: React.FC = () => {
  const highlights = [
    { icon: <FiCode className="text-3xl" />, title: "Développement Full Stack", description: "Création d'applications web complètes avec React, Next.js, et Spring Boot." },
    { icon: <FiTarget className="text-3xl" />, title: "Solutions Sur Mesure", description: "Conception de systèmes adaptés aux besoins spécifiques et scalables." },
    { icon: <FiHeart className="text-3xl" />, title: "Passion & Innovation", description: "Toujours à la recherche des meilleures pratiques et nouvelles technologies." }
  ];

  return (
    <Section id="about" background="alternate">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-5xl font-black text-foreground mb-4 tracking-tight">À Propos</h2>
        <div className="w-20 h-1.5 bg-primary mb-16 rounded-full"></div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Bonjour, je suis Assane 👋</h3>
            <p className="text-lg text-muted leading-relaxed">
              Développeur Full Stack passionné, je transforme des idées en applications web performantes et intuitives. 
              Actuellement en dernière année d'études en informatique, je me spécialise dans le développement d'applications 
              modernes avec React, Next.js et Spring Boot.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Mon objectif est de créer des solutions techniques élégantes qui résolvent de vrais problèmes utilisateurs, 
              tout en maintenant un code propre et maintenable.
            </p>
          </div>
          
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="p-6">
                  <div className="flex items-start gap-5">
                    <div className="text-primary mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted">{item.description}</p>
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