"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiArrowUp } from 'react-icons/fi';
import { Container } from '../Container/Container';
import { siteConfig } from '@/constants/config';
import { navigationItems } from '@/constants/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background border-t border-glass-border pt-16 pb-8 transition-colors duration-300">
      {/* Bouton retour en haut */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20"
        aria-label="Retour en haut"
      >
        <FiArrowUp size={20} />
      </motion.button>

      <Container>
        {/* Section Supérieure : Grille de 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Colonne 1 : À propos */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">À propos</h3>
            <p className="text-muted leading-relaxed mb-4">
              Étudiant en développement Full Stack basé Lille. Passionné et rigoureux, je suis à la recherche d'une alternance pour construire ensemble des applications web et mobiles innovantes.
            </p>
            <a href="#hero" className="text-primary hover:text-primary-hover font-medium transition-colors">
              En savoir plus sur mon cv→
            </a>
          </div>

          {/* Colonne 2 : Liens utiles */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Liens utiles</h3>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-muted hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Contact rapide */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Contacte moi</h3>
            
            {/* <a // <--- PREMIÈRE CORRECTION ICI
              href={`mailto:${siteConfig.author.email}`}
              className="flex items-center gap-3 text-muted hover:text-primary transition-colors mb-4"
            >
              <FiMail size={18} />
              <span>{siteConfig.author.email}</span>
            </a> */}
            
            <a // <--- DEUXIÈME CORRECTION ICI
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border border-glass-border text-foreground hover:border-primary/50 hover:text-primary transition-all text-sm font-medium"
            >
              Envoyer un message →
            </a>
          </div>
        </div>

        {/* Section Milieu : Réseaux sociaux */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-all duration-300 p-3 bg-glass rounded-full border border-glass-border hover:border-primary/50 hover:shadow-[0_0_20px_-4px_var(--color-primary)]"
          >
            <FaLinkedin size={22} />
          </a>
          
          <a // <--- TROISIÈME CORRECTION ICI
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-all duration-300 p-3 bg-glass rounded-full border border-glass-border hover:border-primary/50 hover:shadow-[0_0_20px_-4px_var(--color-primary)]"
          >
            <FaGithub size={22} />
          </a>
        </div>

        {/* Section Inférieure : Droits d'auteur */}
        <div className="pt-8 border-t border-glass-border text-center text-sm text-muted">
          <p>&copy; {currentYear} Assane KANE. Tous droits réservés.</p>
        </div>
      </Container>
    </footer>
  );
};