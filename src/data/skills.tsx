// ==========================================
// 7. src/data/skills.ts
// ==========================================
import { SkillCategory } from '@/types';
import { 
  FaJava, FaReact, FaNodeJs, FaGitAlt, FaPython 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiPostgresql, SiJavascript, SiTypescript, 
  SiNextdotjs, SiBootstrap, SiTailwindcss, SiFastapi, 
  SiMongodb, SiDocker, SiSvelte, SiFramer, SiSocketdotio, SiShadcnui,
  SiRust, SiCplusplus, SiKotlin, SiAndroid, SiC
} from 'react-icons/si';

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Architecture",                       
    skills: [
      { 
        name: "Java 21", 
        icon: <FaJava />, 
        color: "#e76f00",
        level: 5,
      },
      { 
        name: "Kotlin", 
        icon: <SiKotlin />, 
        color: "#7F52FF",
        level: 3,
      },
      { 
        name: "C++", 
        icon: <SiCplusplus />, 
        color: "#00599C",
        level: 3,
      },
      { 
        name: "C", 
        icon: <SiC />, 
        color: "#00599C",
        level: 3,
      },
      { 
        name: "Rust", 
        icon: <SiRust />, 
        color: "#dea584",
        level: 2,
      },
      { 
        name: "Spring Boot", 
        icon: <SiSpringboot />, 
        color: "#6db33f",
        level: 4,
      },
      { 
        name: "Python", 
        icon: <FaPython />, 
        color: "#3776ab",
        level: 4,
      },
      { 
        name: "FastAPI", 
        icon: <SiFastapi />, 
        color: "#009688",
        level: 4,
      },
      { 
        name: "Node.js", 
        icon: <FaNodeJs />, 
        color: "#68a063",
        level: 3,
      },
      { 
        name: "PostgreSQL", 
        icon: <SiPostgresql />, 
        color: "#336791",
        level: 4,
      },
      { 
        name: "MongoDB", 
        icon: <SiMongodb />, 
        color: "#47A248",
        level: 3,
      },
      { 
        name: "Docker", 
        icon: <SiDocker />, 
        color: "#2496ED",
        level: 3,
      },
    ]
  },
  {
    title: "Frontend Moderne",
    skills: [
      { 
        name: "Android", 
        icon: <SiAndroid />, 
        color: "#3DDC84",
        level: 3,
      },
      { 
        name: "React.js", 
        icon: <FaReact />, 
        color: "#61dafb",
        level: 4,
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
      { 
        name: "Svelte", 
        icon: <SiSvelte />, 
        color: "#FF3E00",
        level: 3,
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
        name: "shadcn/ui", 
        icon: <SiShadcnui />, 
        color: "#000000",
        level: 4,
      },
      { 
        name: "Bootstrap", 
        icon: <SiBootstrap />, 
        color: "#7952b3",
        level: 4,
      },
      { 
        name: "Framer Motion", 
        icon: <SiFramer />, 
        color: "#0055FF",
        level: 3,
      },
      { 
        name: "Socket.io", 
        icon: <SiSocketdotio />, 
        color: "#010101",
        level: 3,
      },
      { 
        name: "Git", 
        icon: <FaGitAlt />, 
        color: "#f05032",
        level: 4,
      },
    ]
  }
];