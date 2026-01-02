"use client";

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheckCircle, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzkrwab"); // Votre ID Formspree
  const [formVisible, setFormVisible] = useState(true);

  // Gérer la soumission et l'affichage du message succès
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    
    if (state.succeeded) {
      setFormVisible(false);
      // Réapparition automatique du formulaire après 5s
      setTimeout(() => setFormVisible(true), 5000);
    }
  };

  // Variants pour l'animation des champs en cascade (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Délai entre chaque enfant
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <motion.div 
        className={styles.contactCard}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Me contacter
        </motion.h2>

        {/* Zone de feedback (Succès) */}
        <AnimatePresence mode="wait">
          {state.succeeded && !formVisible && (
            <motion.div
              className={styles.successMessage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <FiCheckCircle size={24} />
              Message envoyé avec succès !
            </motion.div>
          )}
        </AnimatePresence>

        {/* Formulaire animé */}
        <AnimatePresence mode="wait">
          {formVisible && (
            <motion.form
              onSubmit={handleFormSubmit}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Nom & Prénom (Layout Grid pour écrans larges) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <motion.div className={styles.inputGroup} variants={itemVariants}>
                  <label htmlFor="nom" className={styles.label}><FiUser className="me-2"/>Nom</label>
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    id="nom" 
                    type="text" 
                    name="nom" 
                    className={styles.input} 
                    required 
                    placeholder="Votre nom"
                  />
                  <ValidationError prefix="Nom" field="nom" errors={state.errors} />
                </motion.div>

                <motion.div className={styles.inputGroup} variants={itemVariants}>
                  <label htmlFor="prenom" className={styles.label}><FiUser className="me-2"/>Prénom</label>
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    id="prenom" 
                    type="text" 
                    name="prenom" 
                    className={styles.input} 
                    required 
                    placeholder="Votre prénom"
                  />
                  <ValidationError prefix="Prenom" field="prenom" errors={state.errors} />
                </motion.div>
              </div>

              <motion.div className={styles.inputGroup} variants={itemVariants}>
                <label htmlFor="email" className={styles.label}><FiMail className="me-2"/>Email</label>
                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  id="email" 
                  type="email" 
                  name="email" 
                  className={styles.input} 
                  required 
                  placeholder="nom@exemple.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </motion.div>

              <motion.div className={styles.inputGroup} variants={itemVariants}>
                <label htmlFor="message" className={styles.label}><FiMessageSquare className="me-2"/>Message</label>
                <motion.textarea 
                  whileFocus={{ scale: 1.02 }}
                  id="message" 
                  name="message" 
                  className={styles.textarea} 
                  rows={4} 
                  required 
                  placeholder="Bonjour, je souhaiterais discuter de..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </motion.div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                variants={itemVariants}
                whileHover={{ scale: 1.03, backgroundColor: "#c82333" }}
                whileTap={{ scale: 0.95 }}
                disabled={state.submitting}
              >
                {state.submitting ? 'Envoi...' : <><FiSend /> Envoyer le message</>}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Contact;