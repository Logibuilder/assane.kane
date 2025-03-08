import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Badge } from "react-bootstrap";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import styles from '../../styles/Project.module.css';

const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isClient, setIsClient] = useState(false);

    // Données des projets
    const projects = [
        {
            id: 1,
            title: "Gestion des emplois du temps",
            description: "Application permettant de gérer les emplois du temps des professeurs en prenant en compte leurs disponibilités et les ressources disponibles.",
            image: "/images/imagesEDT/page_connec.png", // Ajoute une image représentative
            linkGit: "https://github.com/Logibuilder/gestionEmploiDuTemps", // Lien vers ton dépôt GitHub
            pdf: "/description/gestionEDT.pdf", // Lien vers une doc PDF si disponible
            tags: ["JAVA","Spring Boot","PostgreSQL",  "FullCalendar", "Thymeleaf", "JavaScript", "Bootstrap"],
            details: `Cette application web facilite la gestion des emplois du temps des enseignants en prenant en compte les disponibilités des professeurs, les salles et les types de séances (CM, TD, TP).

            Fonctionnalités principales : 
            Gestion des enseignants, matières et salles de cours.
            Consultation et modification des emplois du temps.
            Prise en compte des contraintes de disponibilités des enseignants.
            Interface utilisateur intuitive avec FullCalendar.
            
            L’objectif est d’aider à organiser les plannings tout en évitant les conflits liés aux disponibilités et aux ressources.`
        },
        {
            id: 2,
            title: "Portfolio",
            description: "Mon portfolio personnel où je présente mes projets, mes compétences et où les utilisateurs peuvent me contacter via un formulaire de contact utilisant Formspree.",
            image: "/images/portfolio.png", // Ajoute une image de ton portfolio
            linkGit: "https://github.com/Logibuilder/assane.kane", // Lien vers ton dépôt GitHub
            pdf: "/description/portfolio.pdf", // Lien vers une doc PDF si disponible
            tags: ["React", "Formspree", "Bootstrap", "JavaScript", "HTML", "CSS"],
            details: `🚀 Portfolio Développeur – Assane KANE est une application web 
            dynamique développée avec React, permettant de présenter mon parcours, mes 
            compétences et mes projets en développement logiciel. Il intègre plusieurs 
            technologies telles que React pour une interface interactive, JavaScript & 
            CSS pour la gestion du comportement et du design, ainsi que Bootstrap 5 pour 
            assurer un rendu moderne et responsive. Ses principales fonctionnalités 
            incluent une présentation personnelle détaillant mon parcours et mes objectifs, 
            un affichage de mes projets avec descriptions et liens vers GitHub, une liste 
            de mes compétences en programmation et en frameworks, ainsi qu’une section 
            contact & réseaux avec un formulaire et des liens vers mes profils professionnels. 
            L'interface est conçue avec une palette de couleurs blanche et rouge, offrant un 
            design épuré et professionnel. Ce projet est en constante évolution pour intégrer 
            de nouvelles fonctionnalités et améliorer l'expérience utilisateur. 🚀`
        },
        {
            id: 3,
            title: "Réseau tisseo",
            description: "L'application est une plateforme interactive permettant d'explorer le réseau de transport en commun de Toulouse en récupérant et affichant en temps réel les données des lignes et arrêts via l'API Tisséo.",
            image: "/images/logo_tisseo.jpeg", // Chemin relatif depuis le dossier public
            linkGit: "https://github.com/votre-projet-3",
            pdf: "/description/app_tisseo.pdf", // Chemin relatif depuis le dossier public
            tags: ["React", "Mapbox", "UI/UX"],
            details: `Application Tisséo 🚍
                    Cette application web interactive permet d’explorer le réseau de transport en commun de Toulouse en récupérant les données en temps réel via l’API Tisséo.
                    Technologies utilisées :
                        • Svelte ⚡ : Framework JavaScript moderne pour une interface réactive et performante.
                        • Fetch API 🌍 : Communication avec l’API Tisséo pour récupérer les lignes et arrêts en temps réel.
                        • Bootstrap 🎨 : Amélioration de l’interface utilisateur avec des composants et une mise en page responsive.
                    Fonctionnalités principales :
                        • Affichage dynamique des lignes de transport (bus, tram, métro).
                        • Sélection d’une ligne pour afficher ses arrêts correspondants.
                        • Indication visuelle de la ligne sélectionnée.`
        }
    ];

    // Vérifie si le composant est côté client
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Gestion de l'affichage du modal
    const handleShow = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    // Si le composant n'est pas côté client, ne rien afficher
    if (!isClient) return null;

    return (
        <section id="project" className="container py-5">
            <h2 className="text-center mb-5 fw-bold" style={{ color: "#dc3545" }}>Mes Projets</h2>
            
            {/* Grille de projets */}
            <div className="row g-4">
                {projects.map((project) => (
                    <div key={project.id} className="col-md-6 col-lg-4">
                        <Card 
                            className={`${styles.projectCard} h-100 shadow-lg border-1 border-danger`}
                            onMouseEnter={(e) => e.currentTarget.classList.add('shadow')}
                            onMouseLeave={(e) => e.currentTarget.classList.remove('shadow')}
                        >
                            <div className={styles.cardHeader}>
                                <FiFolder className={styles.folderIcon} />
                                <div className={styles.links}>
                                    {project.linkGit && (
                                        <a href={project.linkGit} target="_blank" rel="noopener noreferrer">
                                            <FiGithub />
                                        </a>
                                    )}
                                    {project.pdf && (
                                        <Button 
                                            variant="link" 
                                            onClick={() => handleShow(project)}
                                        >
                                            <FiExternalLink />
                                        </Button>
                                    )}
                                </div>
                            </div>
                        
                            <Card.Body>
                                <h3 className="h4 mb-3">{project.title}</h3>
                                <Card.Text>{project.description}</Card.Text>
                                <div className="d-flex gap-2 flex-wrap">
                                    {project.tags.map((tag, index) => (
                                        <Badge key={index} bg="danger" pill>
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Modal pour les détails */}
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                {selectedProject && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedProject.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img 
                                src={selectedProject.image} 
                                alt={selectedProject.title} 
                                className="img-fluid mb-4"
                                style={{ height: "300px", objectFit: "cover", width: "100%" }}
                            />
                            <p>{selectedProject.details}</p>
                            <div className="d-flex gap-2">
                                <Button 
                                    variant="danger" 
                                    href={selectedProject.link} 
                                    target="_blank"
                                >
                                    <FiGithub /> Code Source
                                </Button>
                                {selectedProject.pdf && (
                                    <Button 
                                        variant="outline-danger"
                                        href={selectedProject.pdf}
                                        target="_blank"
                                    >
                                        Télécharger PDF
                                    </Button>
                                )}
                            </div>
                        </Modal.Body>
                    </>
                )}
            </Modal>
        </section>
    );
};

export default Projects;