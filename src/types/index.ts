// ==========================================
// 2. src/types/index.ts
// ==========================================
export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  tags: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  links: {
    github: string | null;
    demo: string | null;
    documentation: string | null;
  };
  features: string[];
  date: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: number; // 1-5
  icon: React.ReactNode;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Omit<Skill, 'category'>[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}