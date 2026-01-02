"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import styles from '../styles/Project.module.css';
import { getAssetPath } from '../utils/assetPath';
import { Project } from "@/types";

const Projects = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isClient, setIsClient] = useState<boolean>(false);

    // Vos données projets
    const projects: Project[] = [
        {
            id: 1,
            title: "Gestion des emplois du temps",
            description: "Application permettant de gérer les emplois du temps des professeurs et ressources.",
            image: getAssetPath("/images/imagesEDT/pageConnec.png"),
            linkGit: "https://github.com/Logibuilder/gestionEmploiDuTemps",
            pdf: getAssetPath("/description/gestionEDT.pdf"),
            tags: ["JAVA", "Spring Boot", "PostgreSQL", "FullCalendar", "React"],
            details: `<p>Cette application web facilite la gestion des emplois du temps des enseignants en prenant en compte les disponibilités, les salles et les types de séances.</p>`
        },
        {
            id: 2,
            title: "Portfolio",
            description: "Portfolio personnel interactif développé avec Next.js et React.",
            image: getAssetPath("/images/portfolio_.png"),
            linkGit: "https://github.com/Logibuilder/assane.kane",
            pdf: getAssetPath("/description/portfolio.pdf"),
            tags: ["Next.js", "React", "TypeScript", "Framer Motion"],
            details: `<p>Portfolio moderne présentant mon parcours, mes compétences et mes projets avec une architecture propre et performante.</p>`
        },
        {
            id: 3,
            title: "Réseau Tisséo",
            description: "Plateforme interactive explorant le réseau de transport toulousain.",
            image: getAssetPath("/images/logo_tisseo.jpeg"),
            linkGit: "https://github.com/votre-projet-3",
            pdf: getAssetPath("/description/app_tisseo.pdf"),
            tags: ["React", "Mapbox", "API REST"],
            details: `<p>Application visualisant les lignes et arrêts Tisséo en temps réel via l'API Open Data.</p>`
        },
        {
            id: 4,
            title: "League Of Stones",
            description: "Jeu de cartes stratégique combinant LoL et Hearthstone.",
            image: getAssetPath("/images/leagueofstone.png"),
            linkGit: "https://github.com/Logibuilder/LeaguesOfStones",
            pdf: getAssetPath("/description/los-demo.pdf"),
            tags: ["React", "Node.js", "MongoDB", "Socket.io"],
            details: `<p>Jeu de stratégie tour par tour multijoueur avec gestion de decks et matchmaking.</p>`
        },
    ];

    useEffect(() => { setIsClient(true); }, []);

    const handleOpenModal = (project: Project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    if (!isClient) return null;

    return (
        <section id="project" className="container py-5">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-5"
            >
                <h2 className="fw-bold" style={{ color: "#dc3545", fontSize: '2.5rem' }}>Mes Projets</h2>
                <div style={{ width: "60px", height: "4px", backgroundColor: "#dc3545", margin: "10px auto", borderRadius: "2px" }}></div>
            </motion.div>
            
            <div className={styles.gridContainer}>
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={project.id}
                        project={project} 
                        index={index} 
                        onOpenModal={handleOpenModal} 
                    />
                ))}
            </div>

            <ProjectModal 
                show={showModal} 
                onHide={() => setShowModal(false)} 
                project={selectedProject} 
            />
        </section>
    );
};

export default Projects;