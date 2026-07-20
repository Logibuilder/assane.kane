// ==========================================
// 6. src/data/projects.ts
// ==========================================
import { Project } from '@/types';
import { withBasePath } from '@/lib/paths';

export const projects: Project[] = [
  {
    id: 1,
    title: "Gestion des emplois du temps",
    slug: "gestion-emplois-du-temps",
    description: "Application web de gestion d'emplois du temps pour établissements scolaires avec contraintes de disponibilité",
    longDescription: `
      Système complet de planification et gestion des emplois du temps pour établissements scolaires.
      L'application prend en compte les disponibilités des enseignants, les salles disponibles,
      et les types de séances (CM, TD, TP) pour générer des plannings optimisés.
    `,
    image: withBasePath("/images/imagesEDT/pageConnec.png"),
    images: [
      withBasePath("/images/imagesEDT/pageConnec.png"),
      withBasePath("/images/imagesEDT/dashboard.png"),
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "React", "FullCalendar"],
    technologies: {
      frontend: ["React", "FullCalendar", "Bootstrap"],
      backend: ["Java", "Spring Boot", "PostgreSQL"],
      tools: ["Git", "Postman", "Maven"],
    },
    links: {
      github: "https://github.com/Logibuilder/gestionEmploiDuTemps",
      demo: null,
      documentation: withBasePath("/description/gestionEDT.pdf"),
    },
    features: [
      "Gestion des contraintes de disponibilité des enseignants",
      "Visualisation calendrier interactive avec FullCalendar",
      "Export PDF des plannings générés",
      "Système de notifications pour les changements",
      "Interface d'administration complète",
    ],
    date: "2024-09",
    status: "completed",
  },
  {
    id: 2,
    title: "Portfolio Moderne",
    slug: "portfolio-moderne",
    description: "Portfolio personnel avec Next.js, TypeScript et animations avancées",
    longDescription: `
      Portfolio personnel développé avec les dernières technologies web.
      Architecture modulaire avec composants réutilisables, système de design cohérent,
      et optimisations pour les performances et le SEO.
    `,
    image: withBasePath("/images/portfolio_.png"),
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    technologies: {
      frontend: ["Next.js 15", "TypeScript", "Framer Motion", "Tailwind CSS"],
      backend: [],
      tools: ["Git", "Vercel"],
    },
    links: {
      github: "https://github.com/Logibuilder/assane.kane",
      demo: "https://assane-kane.vercel.app",
      documentation: withBasePath("/description/portfolio.pdf"),
    },
    features: [
      "Architecture Next.js 15 avec App Router",
      "Composants TypeScript modulaires et réutilisables",
      "Animations avancées avec Framer Motion",
      "Mode sombre/clair avec persistance",
      "Optimisation SEO complète",
    ],
    date: "2024-12",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Réseau Tisséo",
    slug: "reseau-tisseo",
    description: "Application interactive explorant le réseau de transport toulousain en temps réel",
    longDescription: `
      Application web permettant de visualiser les lignes et arrêts du réseau Tisséo.
      Utilise l'API Open Data Tisséo pour récupérer les informations en temps réel.
    `,
    image: withBasePath("/images/logo_tisseo.jpeg"),
    tags: ["Svelte", "API REST", "Bootstrap"],
    technologies: {
      frontend: ["Svelte", "Bootstrap"],
      backend: ["API Tisséo"],
      tools: ["Git"],
    },
    links: {
      github: "https://github.com/votre-projet-3",
      demo: null,
      documentation: withBasePath("/description/app_tisseo.pdf"),
    },
    features: [
      "Affichage dynamique des lignes de transport",
      "Sélection d'une ligne pour voir ses arrêts",
      "Indication visuelle de la ligne sélectionnée",
      "Interface responsive",
    ],
    date: "2024-06",
    status: "completed",
  },
  {
    id: 4,
    title: "League Of Stones",
    slug: "league-of-stones",
    description: "Jeu de cartes stratégique multijoueur combinant LoL et Hearthstone",
    longDescription: `
      Jeu de cartes stratégique en temps réel combinant les univers de League of Legends et Hearthstone.
      Système de matchmaking, gestion de decks et parties multijoueurs via WebSocket.
    `,
    image: withBasePath("/images/leagueofstone.png"),
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    technologies: {
      frontend: ["React", "CSS Modules"],
      backend: ["Node.js", "Express", "MongoDB"],
      tools: ["Socket.io", "Git"],
    },
    links: {
      github: "https://github.com/Logibuilder/LeaguesOfStones",
      demo: null,
      documentation: withBasePath("/description/los-demo.pdf"),
    },
    features: [
      "Système de combat tour par tour en temps réel",
      "Matchmaking automatique des joueurs",
      "Gestion de decks et collection de cartes",
      "Communication WebSocket bidirectionnelle",
      "Système de classement",
    ],
    date: "2024-03",
    status: "completed",
  },
  {
    id: 5,
    title: "DreamPark",
    slug: "dream-park",
    description: "Système de gestion automatisée et intelligente de stationnement multiniveaux",
    longDescription: `
      Application modulaire développée en Python suivant l'architecture MVC pour gérer les infrastructures de stationnement.
      Le système orchestre l'accès automatisé des véhicules, l'allocation dynamique des emplacements selon les dimensions, 
      la facturation via des bornes, et l'intégration de services annexes (entretien, livraison par voiturier).
    `,
    image: withBasePath("/images/dream_parc_avatar.png"),
    images: [
      withBasePath("/images/dream_parc_avatar.png")
    ],
    tags: ["Python", "MVC", "Unittest", "CLI"],
    technologies: {
      frontend: ["CLI (Ligne de commande)"],
      backend: ["Python 3.11/3.12"],
      tools: ["Unittest", "MagicMock", "Git"],
    },
    links: {
      github: "https://github.com/Logibuilder/dreamPark",
      demo: null,
      documentation: null,
    },
    features: [
      "Architecture Modèle-Vue-Contrôleur (MVC) stricte",
      "Algorithmique de placement optimisée selon les dimensions du véhicule",
      "Contrôle d'accès et facturation via bornes automatisées",
      "Simulation d'acheminement automatisé (Téléporteur)",
      "Suite de tests unitaires complète avec isolation par Mocks",
    ],
    date: "2026-07",
    status: "completed",
  },
  {
    id: 6,
    title: "Catiches (ICARE)",
    slug: "catiches-icare",
    description: "Plateforme IoT de gestion de passerelles et de capteurs connectés en temps réel",
    longDescription: `
      Application full-stack de supervision et de gestion d'objets connectés (passerelles et capteurs).
      Le projet intègre un back-end robuste (Python/FastAPI) gérant l'authentification sécurisée, les WebSockets et les bases de données,
      associé à un front-end moderne (React, TypeScript, Tailwind CSS / Shadcn UI) pour le tableau de bord administrateur et utilisateur.
    `,
    image: withBasePath("/images/catiches_avatar.png"), // Ajuste le chemin de l'image si besoin
    images: [
      withBasePath("/images/catiches_avatar.png")
    ],
    tags: ["Python", "FastAPI", "React", "TypeScript", "Docker", "WebSockets"],
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      backend: ["Python", "FastAPI", "", "PostgreSQL"],
      tools: ["Docker", "Docker Compose", "Git", "Pytest"],
    },
    links: {//
      github: null,  
      demo: "http://172.28.101.33/login",
      documentation: null,
    },
    features: [
      "Gestion centralisée des passerelles (gateways) et des capteurs (sensors)",
      "Communication en temps réel via WebSockets",
      "Tableau de bord administrateur et gestion des rôles utilisateurs",
      "Authentification sécurisée et chiffrement",
      "Conteneurisation complète avec Docker et Docker Compose",
    ],
    date: "2026-06",
    status: "completed",
  }
];