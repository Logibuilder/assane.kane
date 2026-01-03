// ==========================================
// 6. src/components/sections/Projects/ProjectCard.tsx
// ==========================================
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full flex flex-col cursor-pointer" onClick={onClick}>
        {/* Image */}
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-4 right-4">
            <Badge variant={
              project.status === 'completed' ? 'success' :
              project.status === 'in-progress' ? 'warning' : 'info'
            }>
              {project.status === 'completed' ? 'Terminé' :
               project.status === 'in-progress' ? 'En cours' : 'Prévu'}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} size="sm">{tag}</Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge size="sm" variant="info">+{project.tags.length - 4}</Badge>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-2 mt-auto">
            {project.links.github && (
              <Button
                variant="outline"
                size="sm"
                leftIcon={<FiGithub />}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.links.github!, '_blank');
                }}
              >
                Code
              </Button>
            )}
            {project.links.demo && (
              <Button
                variant="outline"
                size="sm"
                leftIcon={<FiExternalLink />}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.links.demo!, '_blank');
                }}
              >
                Demo
              </Button>
            )}
            {project.links.documentation && (
              <Button
                variant="outline"
                size="sm"
                leftIcon={<FiFileText />}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.links.documentation!, '_blank');
                }}
              >
                Doc
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};