// ==========================================
// 3. src/components/sections/Contact/Contact.tsx
// ==========================================
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Section } from '@/components/layout/Section';
import { Card } from '@/components/ui/Card';
import { ContactForm } from './ContactForm';
import { siteConfig } from '@/constants/config';

export const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      value: siteConfig.author.email,
      link: `mailto:${siteConfig.author.email}`,
    },
    {
      icon: <FiGithub className="text-2xl" />,
      title: "GitHub",
      value: "@Logibuilder",
      link: siteConfig.social.github,
    },
    {
      icon: <FiLinkedin className="text-2xl" />,
      title: "LinkedIn",
      value: "Assane KANE",
      link: siteConfig.social.linkedin,
    },
  ];

  return (
    <Section id="contact" background="gray">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">Contact</h2>
        <div className="w-20 h-1 bg-red-500 mx-auto mb-4"></div>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Un projet en tête ? Une question ? N'hésitez pas à me contacter !
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Me contacter</h3>
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="text-red-500">{method.icon}</div>
                    <div>
                      <p className="font-semibold">{method.title}</p>
                      <p className="text-sm text-gray-600">{method.value}</p>
                    </div>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Envoyez-moi un message</h3>
              <ContactForm />
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};
