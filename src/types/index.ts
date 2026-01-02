// src/types/index.ts
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

// Type pour un élément du menu (utilisé dans Menu.tsx)
export interface MenuItem {
    name: string;
    path: string;
    icon: IconDefinition;
}

// Type pour un projet (utilisé dans Projects.tsx et la page de détail)
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;      // Chemin vers l'image
    linkGit: string;    // URL GitHub
    pdf?: string;       // Le "?" signifie que c'est optionnel (certains projets n'en ont pas)
    tags: string[];     // Tableau de strings (ex: ["React", "Java"])
    details: string;    // HTML ou texte long pour la description détaillée
}

// Type pour les champs du formulaire de contact (Optionnel, mais utile)
export interface ContactFormInputs {
    nom: string;
    prenom: string;
    email: string;
    message: string;
}

// 1. On définit l'interface pour l'objet d'état de l'animation
export interface AnimationRef {
    currentIndex: number;
    isTyping: boolean;
    isMounted: boolean;
}


// On définit les types pour nos données
interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}


//projects
interface ProjectCardProps {
    project: Project;
    index: number;
    onOpenModal: (project: Project) => void;
}


interface ProjectModalProps {
    show: boolean;
    onHide: () => void;
    project: Project | null;
}


//themeContext
// Définition des types
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: 'dark' | 'light';
}