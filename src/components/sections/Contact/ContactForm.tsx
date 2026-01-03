// ==========================================
// 2. src/components/sections/Contact/ContactForm.tsx
// ==========================================
"use client";

import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { FiSend, FiCheck } from 'react-icons/fi';

export const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID"); // Remplacer par votre ID
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <FiCheck className="text-3xl text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
        <p className="text-gray-600">Merci pour votre message. Je vous répondrai bientôt.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Nom"
        name="name"
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
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Message
        </label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
          placeholder="Votre message..."
        />
      </div>

      <Button
        type="submit"
        fullWidth
        isLoading={state.submitting}
        disabled={state.submitting}
        rightIcon={<FiSend />}
      >
        Envoyer le message
      </Button>
    </form>
  );
};