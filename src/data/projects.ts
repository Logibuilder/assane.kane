// ==========================================
// 6. src/data/projects.ts
// ==========================================
import { Project } from '@/types';
import { withBasePath } from '@/lib/paths';

export const projects: Project[] = [
  {
    id: 1,
    title: "Gestion emplois du temps",
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
    tags: ["Svelte", "API REST", "Bootstrap", "Git"],
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
      backend: ["Python", "FastAPI", "PostgreSQL"],
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
  },
  {
    id: 7,
    title: "Serveur FTP Multi-Clients",
    slug: "ftp-server",
    description: "Implémentation d'un serveur FTP en Java gérant les connexions simultanées via threads",
    longDescription: `
      Développement complet d'un serveur FTP respectant les standards du protocole. 
      L'application gère les authentifications, la navigation dans les répertoires, et 
      les transferts de fichiers en mode actif et passif. L'architecture repose sur 
      le multithreading pour supporter plusieurs clients simultanément.
    `,
    image: withBasePath("/images/ftp_server_avatar.png"),
    images: [
      withBasePath("/images/ftp_server_avatar.png")
    ],
    tags: ["Java", "Réseau", "Multithreading", "Protocoles"],
    technologies: {
      frontend: ["Client FTP standard"],
      backend: ["Java", "Sockets", "Threads"],
      tools: ["Maven", "Git", "UML"],
    },
    links: {
      github: "https://github.com/Logibuilder/ftp_server",
      demo: "https://github.com/Logibuilder/ftp_server/blob/main/doc/demo_ftp_server.mp4",
      documentation: null,
    },
    features: [
      "Gestion complète des commandes FTP (USER, PASS, LIST, RETR, STOR, etc.)",
      "Architecture multithread pour la concurrence des connexions",
      "Support des modes de transfert de données actif (PORT) et passif (PASV)",
      "Gestion de système de fichiers virtuel pour la navigation",
    ],
    date: "2026-02",
    status: "completed",
  },
  {
    id: 8,
    title: "Client FTP",
    slug: "ftp-client",
    description: "Application client FTP en ligne de commande développée en Java permettant de naviguer et d'explorer l'arborescence d'un serveur distant.",
    longDescription: `
      Logiciel client FTP en ligne de commande développé en Java. Il permet de se connecter à un serveur distant, de naviguer dans les dossiers et de lister les fichiers. 
      Sa fonctionnalité principale réside dans l'exploration récursive de l'arborescence du serveur selon deux algorithmes : le parcours en profondeur (DFS) et le parcours en largeur (BFS). 
      Il intègre un mécanisme de reconnexion automatique en cas de panne réseau et permet d'exporter la structure explorée au format JSON.
    `,
    image: withBasePath("/images/ftp_client_avatar.png"),
    images: [
      withBasePath("/images/ftp_client_avatar.png")
    ],
    tags: ["Java", "Réseau", "Algorithmique", "CLI"],
    technologies: {
      frontend: ["CLI (Ligne de commande)"],
      backend: ["Java", "Sockets", "Gson"],
      tools: ["Maven", "Git", "JUnit 5", "Mockito"],
    },
    links: {
      github: "https://github.com/Logibuilder/ftpclient",
      demo: "https://github.com/Logibuilder/ftpclient/blob/main/demo-client-ftp.mkv",
      documentation:null,
    },
    features: [
      "Connexion et authentification au serveur FTP avec gestion du mode passif (PASV)",
      "Navigation interactive et listage des dossiers distants (CWD, CDUP, PWD, LIST, NLST)",
      "Exploration récursive de l'arborescence via les algorithmes DFS et BFS",
      "Exportation de la structure des fichiers au format JSON via Gson (Pattern Composite)",
      "Mécanisme de résilience avec reconnexion automatique après perte de connexion réseau",
      "Architecture modulaire utilisant les design patterns Façade et Composite"
    ],
    date: "2026-01",
    status: "completed",
  },
  {
    id: 9,
    title: "FlopBox",
    slug: "flopbox",
    description: "Proxy REST pour serveurs FTP avec sécurité JWT, permettant de piloter des serveurs distants via une API HTTP.",
    longDescription: `
      FlopBox est un proxy REST développé en Java 21 et Spring Boot 3.4.3. Il permet à un client HTTP de piloter des serveurs FTP distants (liste, création, renommage, suppression, téléchargement) sans implémenter le protocole FTP. 
      Le projet intègre une authentification stateless sécurisée par JWT, une base de données H2 en mémoire pour l'enregistrement des alias de serveurs, et utilise les design patterns Façade, Adaptateur et DTO pour une architecture logicielle découplée et robuste.
    `,
    image: withBasePath("/images/flopbox_avatar.png"),
    images: [
      withBasePath("/images/flopbox_avatar.png")
    ],
    tags: ["Java 21", "Spring Boot", "REST API", "JWT", "FTP"],
    technologies: {
      frontend: ["Client HTTP", "Swagger UI"],
      backend: ["Java 21", "Spring Boot 3.4.3", "Spring Security", "Apache Commons Net", "H2 Database", "JJWT"],
      tools: ["Maven", "Git", "UML"],
    },
    links: {
      github: "https://github.com/Logibuilder/flopbox",
      demo: "https://github.com/Logibuilder/flopbox/blob/main/src/flopbox-demo.mkv",
      documentation: null,
    },
    features: [
      "Exposition d'une API REST complète pour piloter des serveurs FTP distants",
      "Authentification stateless avec JWT (Access tokens de 15 min & Refresh tokens de 7 jours)",
      "Recherche récursive globale et tolérante aux pannes sur multi-serveurs avec garde-fous",
      "Téléchargement et téléversement de fichiers en streaming avec fermeture propre des sockets FTP",
      "Base de données H2 en mémoire pour la gestion centralisée des serveurs",
      "Traduction dynamique des codes de réponse FTP en codes HTTP via un Adaptateur"
    ],
    date: "2026-03",
    status: "completed",
  },
  {
    id: 11,
    title: "FlopBox Agent",
    slug: "flopbox-agent",
    description: "Agent de synchronisation multi-serveurs automatique et console interactive pour la gestion de la corbeille distante.",
    longDescription: `
      Application cliente Java en console conçue pour synchroniser automatiquement des serveurs FTP distants via la plateforme FlopBox. 
      Elle relève le défi technique de l'exécution multi-threadée, séparant une boucle de synchronisation bidirectionnelle en tâche de fond (toutes les 60 secondes) d'une console interactive s'exécutant sur le thread principal. 
      L'agent intègre une détection intelligente des renommages locaux basés sur des heuristiques de taille et de date pour optimiser les transferts réseau. Une gestion rigoureuse de l'alignement des horloges (timestamps) entre le FTP et le système d'exploitation local évite les faux positifs de synchronisation. 
      Enfin, une technique de 'fichier fantôme' (ghost file) est implémentée lors de la restauration de fichiers depuis la corbeille pour garantir la cohérence des états locaux et distants lors du cycle suivant.
    `,
    image: withBasePath("/images/flopbox_agent_avatar.jpg"), // Image à générer ultérieurement
    images: [
      withBasePath("/images/flopbox_agent_avatar.jpg")
    ],
    tags: ["Java", "Multi-threading", "Maven", ],
    technologies: {
      frontend: ["Console interactive"],
      backend: ["Java21", "HttpClient Asynchrone", "Records", "ScheduledExecutorService", "Jackson Databind"],
      tools: ["Maven", "Git", "JUnit 5", "Mockito", "Logback"],
    },
    links: {
      github: "https://github.com/Logibuilder/flopbox-agent", 
      demo: null,
      documentation: null,
    },
    features: [
      "Authentification sécurisée JWT (stateless)",
      "Synchronisation bidirectionnelle multi-serveurs automatique et planifiée (background thread)",
      "Console interactive de gestion de la corbeille distante (.deleted)",
      "Détection heuristique intelligente des renommages locaux pour optimiser la bande passante",
      "Optimisation des performances via E/S Asynchrones non bloquantes (sendAsync)",
      "Alignement précis des timestamps FTP/OS pour éviter les cycles de synchro inutiles",
      "Algorithme de cohérence par 'fichier fantôme' lors de la restauration distante"
    ],
    date: "2026-04", 
    status: "completed",
  },
  {
    id: 12,
    title: "Audio File Player",
    slug: "audio-file-player",
    description: "Lecteur audio performant et extensible en ligne de commande (CLI) avec pipeline de traitement modulaire.",
    longDescription: `
      Ce projet est un lecteur audio simple en ligne de commande écrit en Rust. Il met en œuvre un pipeline de traitement audio modulaire permettant le décodage, la gestion d'état et la lecture en temps réel sur le matériel système. L'architecture exploite les concepts avancés de concurrence de Rust, tels que les canaux de communication non bloquants (\`mpsc\`) et le partage d'état sécurisé via \`Arc<Mutex<T>>\`. La conception repose sur des Traits pour abstraire la sortie audio, rendant l'application facilement extensible à d'autres backends.
    `,
    image: withBasePath("/images/audio_file_player_avatar.png"), 
    images: [
      withBasePath("/images/audio_file_player_avatar.png")
    ],
    tags: ["Rust", "CLI", "Audio", "Multi-threading", "CPAL"],
    technologies: {
      frontend: ["Console CLI", "Crossterm"],
      backend: ["Rust", "Symphonia", "CPAL", "mpsc"],
      tools: ["Cargo", "Git"],
    },
    links: {
      github: "https://github.com/Logibuilder/audio-file-player",
      demo: null,
      documentation: null,
    },
    features: [
      "Interface utilisateur interactive en ligne de commande (CLI) pour piloter la lecture, mettre en pause, stopper et régler le volume",
      "Décodage audio optimisé par morceaux (chunks) via la bibliothèque Symphonia (supportant MP3, WAV, FLAC, ISOMP4)",
      "Sortie audio bas niveau gérée de manière asynchrone par la bibliothèque CPAL",
      "Architecture concurrente thread-safe séparant l'interface utilisateur, la gestion d'état (Pipeline) et le moteur audio",
      "Abstraction logicielle de la sortie audio utilisant le système de Traits de Rust",
      "Suite complète de tests unitaires et d'intégration validant le pipeline, les commandes et le décodage"
    ],
    date: "2026-05", 
    status: "completed",
  },
  {
    id: 13,
    title: "100 Exercises Rust",
    slug: "100-exercises-to-learn-rust",
    description: "Formation pratique et interactive pour maîtriser les concepts fondamentaux et avancés du langage Rust.",
    longDescription: `
      Ce projet retrace mon parcours à travers le cours "100 Exercises To Learn Rust" développé par Mainmatter et écrit par Luca Palmieri. 
      Basée sur la méthodologie de "l'apprentissage par la pratique", cette formation couvre l'intégralité du langage Rust de manière progressive. Elle aborde la syntaxe de base, le système de types, les structures, les énumérations, et plonge dans les concepts plus complexes comme la gestion de la mémoire (Stack/Heap, Ownership, Lifetimes), le multi-threading (Channels, Mutex) et la programmation asynchrone (Futures).
    `,
    image: withBasePath("/images/100_exercices_to_learn_rust_avatar.png"), // Image à générer ultérieurement
    images: [
      withBasePath("/images/100_exercices_to_learn_rust_avatar.png")
    ],
    tags: ["Rust", "Formation", "Algo"],
    technologies: {
      frontend: [],
      backend: ["Rust"],
      tools: ["Git", "wr (Workshop Runner CLI)", "Cargo"],
    },
    links: {
      github: "https://github.com/Logibuilder/100_execices_to_learn_rust", 
      demo: null,
      documentation : "https://academy.jetbrains.com/course/16631",
    },
    features: [
      "Résolution d'une centaine d'exercices pratiques couvrant la bibliothèque standard et l'écosystème Rust",
      "Validation continue et automatisée des exercices via l'outil en ligne de commande 'wr'",
      "Manipulation avancée de la mémoire : Ownership, Lifetimes, pointeurs intelligents (Box, Rc, Arc)",
      "Implémentation du multi-threading : Scoped threads, Channels (synchrones et asynchrones), RwLock",
      "Pratique de la programmation asynchrone (Async/Await, Futures) et des traits spécifiques de Rust",
      "Gestion rigoureuse des erreurs via le pattern matching, Result, et la crate 'thiserror'"
    ],
    date: "2026-05", 
    status: "completed",
  },
  {
    id: 14,
    title: "Pokémon Battle Simulator",
    slug: "pokemon-battle",
    description: "Simulateur de combats Pokémon en équipe automatisé en console, illustrant les concepts avancés de la POO en C++.",
    longDescription: `
      Ce projet est une application console simulant un tournoi automatisé entre deux dresseurs. Chaque joueur reçoit une équipe générée aléatoirement et s'affronte dans un combat au tour par tour. 
      Le moteur de jeu intègre les statistiques (PV, Attaque, Défense, Vitesse), le hasard et un système d'affinités de types (Eau, Feu, Plante). L'architecture du code met en pratique les concepts fondamentaux de la Programmation Orientée Objet en C++ : classes abstraites, héritage, polymorphisme, gestion dynamique de la mémoire avec des pointeurs, et utilisation de la bibliothèque standard (STL).
    `,
    // Remplacement du lien blob par le lien raw, et retrait de withBasePath
    image: "https://raw.githubusercontent.com/Logibuilder/pokemon-battle/main/pokemon-battle.png", 
    images: [
      "https://raw.githubusercontent.com/Logibuilder/pokemon-battle/main/pokemon-battle.png"
    ],
    tags: ["C++", "POO", "STL", "Jeu"],
    technologies: {
      frontend: ["Console CLI"],
      backend: ["C++", "STL (Standard Template Library)", "API Windows (<windows.h>)"],
      tools: ["G++ (MinGW)", "Git"],
    },
    links: {
      github: "https://github.com/Logibuilder/pokemon-battle",
      demo: null,
      documentation: null,
    },
    features: [
      "Système de types (Pierre-Feuille-Ciseaux) avec gestion des avantages et faiblesses",
      "Combat d'équipe automatisé avec remplacement dynamique des Pokémon K.O.",
      "Architecture POO exploitant le polymorphisme, l'héritage et les classes abstraites",
      "Attaques spécifiques par type gérées via des collections de la STL (std::map, std::list)",
      "Interface console rythmée en temps réel via temporisation de l'API Windows"
    ],
    date: "2024-01", 
    status: "completed",
  },
  {
    id: 15,
    title: "Tisseo Android",
    slug: "tisseo-android",
    description: "Application Android moderne pour consulter les horaires en temps réel du réseau de transport Tisséo (Toulouse Métropole).",
    longDescription: `
      Application mobile développée en Kotlin dans le cadre du Master 1 Informatique de l'Université de Lille. 
      Elle repose sur les principes de Clean Architecture et du pattern MVVM pour garantir un code modulaire et maintenable. L'application permet de rechercher des arrêts, de consulter les lignes et les horaires en temps réel, de gérer des favoris accessibles hors connexion (grâce à Room), et de visualiser le tracé des lignes sur une carte interactive.
    `,
    image: withBasePath("/images/app_tisseo_avatar.png"), 
    images: [
      withBasePath("/images/app_tisseo_avatar.png")
    ],
    tags: ["Android", "Kotlin", "MVVM", "Jetpack Compose", "Clean Architecture"],
    technologies: {
      frontend: ["Jetpack Compose", "Material 3", "Navigation Compose"],
      backend: ["Kotlin 2.0.21", "Coroutines & Flow", "Retrofit", "Moshi", "Room (SQLite)"],
      tools: ["OSMDroid (OpenStreetMap)", "Git"],
    },
    links: {
      github: "https://github.com/Logibuilder/Tisseo", 
      demo: null,
      documentation: null,
    },
    features: [
      "Recherche d'arrêts avec autocomplétion (minimum 3 caractères)",
      "Affichage des horaires, des alertes et des informations trafic en temps réel",
      "Sauvegarde des arrêts favoris avec disponibilité hors connexion et export au format JSON",
      "Visualisation cartographique des lignes de transport via OpenStreetMap (OSMDroid)",
      "Architecture robuste (Clean Architecture, MVVM) avec gestion centralisée des erreurs"
    ],
    date: "2025-12", 
    status: "completed",
  }
];