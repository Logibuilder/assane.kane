// ==========================================
// 7. src/data/skills.ts
// ==========================================
import { SkillCategory } from '@/types';
import { 
  FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiPostgresql, SiJavascript, SiTypescript, 
  SiNextdotjs, SiBootstrap, SiTailwindcss 
} from 'react-icons/si';

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Architecture",
    skills: [
      { 
        name: "Java", 
        icon: <FaJava />, 
        color: "#e76f00",
        level: 4,
      },
      { 
        name: "Spring Boot", 
        icon: <SiSpringboot />, 
        color: "#6db33f",
        level: 4,
      },
      { 
        name: "PostgreSQL", 
        icon: <SiPostgresql />, 
        color: "#336791",
        level: 4,
      },
      { 
        name: "Node.js", 
        icon: <FaNodeJs />, 
        color: "#68a063",
        level: 3,
      },
    ]
  },
  {
    title: "Frontend Moderne",
    skills: [
      { 
        name: "React.js", 
        icon: <FaReact />, 
        color: "#61dafb",
        level: 5,
      },
      { 
        name: "Next.js", 
        icon: <SiNextdotjs />, 
        color: "#000000",
        level: 4,
      },
      { 
        name: "TypeScript", 
        icon: <SiTypescript />, 
        color: "#3178c6",
        level: 4,
      },
      { 
        name: "JavaScript", 
        icon: <SiJavascript />, 
        color: "#f7df1e",
        level: 5,
      },
    ]
  },
  {
    title: "UI & Outils",
    skills: [
      { 
        name: "Tailwind CSS", 
        icon: <SiTailwindcss />, 
        color: "#38bdf8",
        level: 4,
      },
      { 
        name: "Bootstrap", 
        icon: <SiBootstrap />, 
        color: "#7952b3",
        level: 4,
      },
      { 
        name: "Git", 
        icon: <FaGitAlt />, 
        color: "#f05032",
        level: 4,
      },
      { 
        name: "Python", 
        icon: <FaPython />, 
        color: "#3776ab",
        level: 3,
      },
    ]
  }
];
