"use client"; // Indispensable pour les hooks (useState, useEffect)

import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/About.module.css';
import { useEffect, useRef, useState } from "react";
import { FiDownload } from "react-icons/fi";
// 1. On importe l'interface définie dans types/index.ts
import { AnimationRef} from "@/types";



const About = () => {
    // TypeScript infère automatiquement que c'est un string, mais on peut être explicite
    const [displayName, setDisplayName] = useState<string>("");
    const fullName = "Assane KANE";
    
    // 2. On type le useRef avec l'interface créée au-dessus
    const animationState = useRef<AnimationRef>({
        currentIndex: 0,
        isTyping: true,
        isMounted: true
    });

    useEffect(() => {
        const nameArray = fullName.split("");
        
        const animate = () => {
            if (!animationState.current.isMounted) return;

            const { currentIndex, isTyping } = animationState.current;
            
            // Phase d'écriture
            if (isTyping) {
                if (currentIndex < nameArray.length) {
                    setDisplayName(prev => prev + nameArray[currentIndex]);
                    animationState.current.currentIndex++;
                    setTimeout(animate, 100);
                } else {
                    // Pause après écriture complète
                    animationState.current.isTyping = false;
                    setTimeout(animate, 1000);
                }
            } 
            // Phase d'effacement
            else {
                if (currentIndex > 0) {
                    setDisplayName(prev => prev.slice(0, -1));
                    animationState.current.currentIndex--;
                    setTimeout(animate, 100);
                } else {
                    // Pause après effacement complet
                    animationState.current.isTyping = true;
                    setTimeout(animate, 1000);
                }
            }
        };

        animate();

        return () => {
            animationState.current.isMounted = false;
            setDisplayName("");
        };
    }, []);

    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = "23_08_25_ak_cv.pdf"; // Vérifiez que ce fichier est bien dans le dossier public
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
                            // 3. Typage de l'événement souris sur une IMAGE (HTMLImageElement)
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
                                        Étudiant en L3 MIASHS à l'Université Toulouse 2 Jean Jaurès
                                    </li>
                                    
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="badge bg-danger me-3">💻</span>
                                        Passionné par le développement logiciel et web
                                    </li>

                                    <li className="d-flex align-items-center">
                                        <span className="badge bg-danger me-3">🔍</span>
                                        <span>
                                            À la recherche d'une <strong>alternance en développement logiciel (septembre 2025)</strong><br/>
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
                                // 4. Typage de l'événement souris sur un BOUTON (HTMLButtonElement)
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