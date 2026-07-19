// src/components/sections/Hero/Hero.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import { HeroBackground } from './HeroBackground';
import { siteConfig } from '@/constants/config';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
      <HeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Colonne de Gauche : Nom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.9] tracking-tighter">
              ASSANE
              <br />
              KANE
            </h1>
          </motion.div>

          {/* Colonne de Droite : Contenu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Badge de disponibilité */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#dc3545] rounded-full animate-pulse shadow-[0_0_8px_#dc3545]" />
              <span className="text-sm text-gray-300">Disponible pour de nouveaux projets</span>
            </div>

            {/* Titre du poste */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#dc3545] mb-6 leading-tight">
              Développeur <br />
              Full Stack
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-10 max-w-md leading-relaxed">
              Un développeur Full Stack passionné par l'innovation et les technologies modernes, 
              spécialisé dans la création d'applications web performantes.
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-wrap items-center gap-6">
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#projects')}
                className="rounded-full border-[#dc3545] text-[#dc3545] hover:bg-[#dc3545]/10 px-8"
              >
                Voir Mes Projets
              </Button>

              {/* Réseaux sociaux */}
              <div className="flex gap-4">
                {[
                  { icon: <FiGithub size={24} />, href: siteConfig.social.github },
                  { icon: <FiLinkedin size={24} />, href: siteConfig.social.linkedin },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[#dc3545] hover:text-[#c82333] transition-colors duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500 cursor-pointer"
          onClick={() => scrollToSection('#about')}
        >
          <FiArrowDown className="text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};