// ==========================================
// 1. src/components/sections/Projects/ProjectModal.tsx
// ==========================================
"use client";

import React from 'react';
import { FiGithub, FiExternalLink, FiFileText, FiX } from 'react-icons/fi';
import { Modal } from '@/components/ui/Modal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  isOpen, 
  onClose 
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="space-y-6">
        {/* Header Image */}
        <div className="relative h-64 -m-6 mb-6 bg-gray-200 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title & Status */}
        <div>
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <Badge variant={
              project.status === 'completed' ? 'success' :
              project.status === 'in-progress' ? 'warning' : 'info'
            }>
              {project.status === 'completed' ? 'Terminé' :
               project.status === 'in-progress' ? 'En cours' : 'Prévu'}
            </Badge>
          </div>
          <p className="text-gray-600 leading-relaxed">{project.longDescription}</p>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Technologies utilisées</h3>
          <div className="space-y-3">
            {project.technologies.frontend.length > 0 && (
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">Frontend</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.frontend.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            )}
            {project.technologies.backend.length > 0 && (
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">Backend</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.backend.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            )}
            {project.technologies.tools.length > 0 && (
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">Outils</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.tools.map((tech) => (
                    <Badge key={tech} variant="info">{tech}</Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        {project.features.length > 0 && (
          <div>
            <h3 className="font-semibold text-lg mb-3">Fonctionnalités principales</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-4 border-t">
          {project.links.github && (
            <Button
              variant="outline"
              leftIcon={<FiGithub />}
              onClick={() => window.open(project.links.github!, '_blank')}
            >
              Voir le code
            </Button>
          )}
          {project.links.demo && (
            <Button
              leftIcon={<FiExternalLink />}
              onClick={() => window.open(project.links.demo!, '_blank')}
            >
              Voir la démo
            </Button>
          )}
          {project.links.documentation && (
            <Button
              variant="outline"
              leftIcon={<FiFileText />}
              onClick={() => window.open(project.links.documentation!, '_blank')}
            >
              Documentation
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};
