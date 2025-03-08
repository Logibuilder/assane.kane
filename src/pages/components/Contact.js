import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from '../../styles/Contact.module.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzkrwab");
  const [formEstAffiche, setformEstAffiche] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);

    if (state.succeeded) {
      setformEstAffiche(false);

      // Réafficher après 5 secondes
      setTimeout(() => {
        setformEstAffiche(true);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="container my-5 ">
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <motion.div
            className="card shadow-lg p-4 bg-white text-dark border border-danger rounded p-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-center mb-4">📩 Contactez moi</h2>

            {/* Animation de succès */}
            <AnimatePresence>
              {state.succeeded && !formEstAffiche && (
                <motion.div
                  className="alert alert-danger text-black text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.7 }}
                >
                  ✅ Votre message a été envoyé avec succès !
                </motion.div>
              )}
            </AnimatePresence>

            {/* Animation du formulaire */}
            <AnimatePresence>
              {formEstAffiche && (
                <motion.form
                  onSubmit={onSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input id="nom" type="text" name="nom" className={`form-control ${styles.form_control}`} required />
                    <ValidationError prefix="Nom" field="nom" errors={state.errors} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">Prénom</label>
                    <input id="prenom" type="text" name="prenom" className={`form-control ${styles.form_control}`} required />
                    <ValidationError prefix="Prenom" field="prenom" errors={state.errors} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Adresse Email</label>
                    <input id="email" type="email" name="email" className={`form-control ${styles.form_control}`} required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" name="message" className={`form-control ${styles.form_control}`} rows="4" required />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-danger w-100"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Envoyer
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
