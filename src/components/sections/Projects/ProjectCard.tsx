"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi';
import { Card } from '@/components/ui/Card/Card';
import { Badge } from '@/components/ui/Badge/Badge';
import { Button } from '@/components/ui/Button/Button';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Card hoverable className="h-full flex flex-col group" onClick={onClick}>
        {/* Image avec Overlay */}
        <div className="relative h-60 bg-surface overflow-hidden border-b border-glass-border">
          <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        
        {/* Contenu */}
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
          <p className="text-muted mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge>+{project.tags.length - 3}</Badge>
            )}
          </div>
          
          {/* Liens - Utilisation de textes simples pour le design moderne */}
          <div className="flex gap-4 mt-auto pt-4 border-t border-glass-border">
            {project.links.github && (
              <button onClick={(e) => { e.stopPropagation(); window.open(project.links.github!, '_blank'); }} className="flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors">
                <FiGithub /> Code
              </button>
            )}
            {project.links.demo && (
              <button onClick={(e) => { e.stopPropagation(); window.open(project.links.demo!, '_blank'); }} className="flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors">
                <FiExternalLink /> Demo
              </button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};