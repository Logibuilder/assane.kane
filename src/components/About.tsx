"use client";

import "bootstrap/dist/css/bootstrap.min.css";
/* eslint-disable @next/next/no-img-element */ // On désactive le warning Image pour ce fichier
import styles from '../styles/About.module.css';
import { useEffect, useRef, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { AnimationRef } from "@/types";

const About = () => {
    const [displayName, setDisplayName] = useState<string>("");
    const fullName = "Assane KANE";
    
    const animationState = useRef<AnimationRef>({
        currentIndex: 0,
        isTyping: true,
        isMounted: true
    });

    useEffect(() => {
        // Copie de la ref pour le cleanup (corrige le warning exhaustive-deps)
        const animRef = animationState.current;
        const nameArray = fullName.split("");
        
        const animate = () => {
            if (!animRef.isMounted) return;

            const { currentIndex, isTyping } = animRef;
            
            // Phase d'écriture
            if (isTyping) {
                if (currentIndex < nameArray.length) {
                    setDisplayName(prev => prev + nameArray[currentIndex]);
                    animRef.currentIndex++;
                    setTimeout(animate, 100);
                } else {
                    // Pause après écriture complète
                    animRef.isTyping = false;
                    setTimeout(animate, 1000);
                }
            } 
            // Phase d'effacement
            else {
                if (currentIndex > 0) {
                    setDisplayName(prev => prev.slice(0, -1));
                    animRef.currentIndex--;
                    setTimeout(animate, 100);
                } else {
                    // Pause après effacement complet
                    animRef.isTyping = true;
                    setTimeout(animate, 1000);
                }
            }
        };

        animate();

        return () => {
            animRef.isMounted = false;
            setDisplayName("");
        };
    }, []);

    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = "23_08_25_ak_cv.pdf";
        link.download = "cv_Assane_KANE.pdf";
        link.click();
    };

    return (
        <section id="about" className="container py-5">
            <h2 className="text-center mb-5 fw-bold" style={{ color: "#dc3545" }}>À propos de moi</h2>
            
            <div className="row align-items-stretch g-5">
                {/* Colonne de l'image */}
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
                        <img 
                            src="avatar_cv.jpg" 
                            alt="Assane KANE" 
                            className={`img-fluid shadow-lg ${styles.stretchImage}`}
                            onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => {
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        />
                    </div>
                </div>

                {/* Colonne de la description */}
                <div className="col-md-8 h-100">
                    <div className="ps-md-4 h-100 d-flex flex-column justify-content-between">
                        <div>
                            <h1 className="display-5 fw-bold mb-4 text-center text-md-start" style={{ color: "#2c3e50", minHeight: "60px" }}>
                                {displayName || <span style={{ visibility: "hidden" }}>A</span>}
                            </h1>
                            
                            <div className="lead mb-4" style={{ lineHeight: 1.8 }}>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="badge bg-danger me-3">📚</span>
                                        {/* CORRECTION ICI : l'Université -> l&apos;Université */}
                                        Étudiant en L3 MIASHS à l&apos;Université Toulouse 2 Jean Jaurès
                                    </li>
                                    
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="badge bg-danger me-3">💻</span>
                                        Passionné par le développement logiciel et web
                                    </li>

                                    <li className="d-flex align-items-center">
                                        <span className="badge bg-danger me-3">🔍</span>
                                        <span>
                                            {/* CORRECTION ICI : d'une -> d&apos;une */}
                                            À la recherche d&apos;une <strong>alternance en développement logiciel (septembre 2025)</strong><br/>
                                            Objectif : Contribuer à des projets innovants avec mes compétences techniques
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Bouton Télécharger mon CV */}
                        <div className="text-center text-md-start">
                            <button 
                                onClick={handleDownloadCV}
                                className="btn btn-danger btn-lg px-4 py-3 d-inline-flex align-items-center"
                                style={{
                                    transition: "all 0.3s ease",
                                    transformOrigin: "center"
                                }}
                                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.currentTarget.style.transform = "scale(1.05)";
                                }}
                                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                            >
                                <FiDownload className="me-2" size={20}/>
                                Télécharger mon CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;