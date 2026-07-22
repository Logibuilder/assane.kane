"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowDown, FiDownload } from 'react-icons/fi';
import { Button } from '@/components/ui/Button/Button';
import { HeroBackground } from './HeroBackground';
import { siteConfig } from '@/constants/config';
import { withBasePath } from '@/lib/paths';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-background transition-colors duration-300">
      <HeroBackground />
      
      {/* Ajout d'un padding-top plus important sur mobile (pt-32) pour éviter que le Header ne cache la photo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20 md:pt-20 md:pb-0">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* ========================================== */}
          {/* COLONNE DE GAUCHE : Photo + Nom              */}
          {/* ========================================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Photo de profil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mb-6 md:mb-8"
            >
              {/* Lueur rouge d'arrière-plan agrandie */}
              <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full z-0 translate-y-4 scale-110"></div>
              
              {/* Conteneur de l'image agrandi */}
              <div className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[3px] border-glass-border bg-glass backdrop-blur-md shadow-2xl">
                <img
                  src={withBasePath(siteConfig.photo_profile)}
                  alt="Assane KANE"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Nom */}
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black text-foreground leading-[0.9] tracking-tighter uppercase text-center md:text-left">
              ASSANE
              <br />
              KANE
            </h1>
          </motion.div>

          {/* ========================================== */}
          {/* COLONNE DE DROITE : Contenu                  */}
          {/* ========================================== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left mt-2 md:mt-0"
          >
            {/* Badge de disponibilité */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-glass backdrop-blur-md border border-glass-border rounded-full mb-6 md:mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_var(--color-primary)]" />
              <span className="text-sm font-medium text-foreground">Disponible pour une alternance</span>
            </div>

            {/* Titre du poste */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 leading-tight">
              Développeur <br className="hidden md:block" />
              Logiciel
            </h2>

            {/* Description */}
            <p className="text-lg text-muted mb-8 md:mb-10 max-w-md leading-relaxed">
              Étudiant en développement Full Stack basé Lille. Passionné par les technologies modernes, je cherche à mettre mon apprentissage et ma curiosité au service d'une entreprise innovante dans le cadre d'une alternance.
            </p>

            {/* Boutons d'action et Réseaux Sociaux */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 md:gap-6 w-full sm:w-auto">
              
              {/* Bouton CV (Action Principale) */}
              <Button
                size="lg"
                onClick={() => window.open(withBasePath('/cv_assane_kane.pdf'), '_blank')}
                className="rounded-full bg-primary text-white hover:bg-primary/90 px-8 transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(220,53,69,0.3)] flex items-center justify-center gap-2"
              >
                <FiDownload size={18} />
                Voir mon CV
              </Button>

              {/* Bouton Projets (Action Secondaire) */}
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#projects')}
                className="rounded-full border border-primary text-primary hover:bg-primary hover:text-white px-8 transition-all w-full sm:w-auto"
              >
                Voir Mes Projets
              </Button>

              {/* Réseaux sociaux */}
              <div className="flex gap-4 mt-2 sm:mt-0">
                {[
                  { icon: <FiGithub size={22} />, href: siteConfig.social.github },
                  { icon: <FiLinkedin size={22} />, href: siteConfig.social.linkedin },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-glass border border-glass-border text-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de défilement (Caché sur les très petits écrans pour gagner de la place) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted cursor-pointer hover:text-primary transition-colors"
          onClick={() => scrollToSection('#about')}
        >
          <FiArrowDown className="text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};