"use client";
import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { FiSend, FiCheck } from 'react-icons/fi';

export const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xvgqdpgy"); // TODO: remplacer par ton ID Formspree
  
  // 1. Ajout de 'subject' dans l'état initial
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', 
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (state.succeeded) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <FiCheck className="text-3xl text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Message envoyé !</h3>
        <p className="text-muted">Merci pour votre message. Je vous répondrai bientôt.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Mise en grille : Nom et Email sur la même ligne sur Desktop */}
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Nom"
          name="name" // Formspree lira ce 'name'
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
        />
        
        <Input
          label="Email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="votre.email@example.com"
        />
      </div>

      {/* 2. Ajout du nouveau champ Objet */}
      <Input
        label="Objet"
        name="subject" // Formspree l'identifiera comme "subject"
        type="text"
        required
        value={formData.subject}
        onChange={handleChange}
        placeholder="L'objet de votre message"
      />

      {/* Champ Message */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-5 py-3 text-foreground bg-glass border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 placeholder:text-muted"
          placeholder="Comment puis-je vous aider ?"
        />
      </div>

      {/* Bouton de soumission */}
      <Button
        type="submit"
        fullWidth
        isLoading={state.submitting}
        disabled={state.submitting}
        className="rounded-xl bg-primary text-white hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(220,53,69,0.2)]"
      >
        <FiSend className="mr-2" />
        Envoyer le message
      </Button>
    </form>
  );
};