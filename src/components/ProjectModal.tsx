"use client";

import React, { useEffect } from "react";
import { FiGithub, FiDownload, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import styles from '../styles/Project.module.css';
import { Project } from "@/types";
import { ProjectModalProps } from "@/types";


const ProjectModal: React.FC<ProjectModalProps> = ({ show, onHide, project }) => {
    // Bloque le scroll de la page quand la modale est ouverte
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [show]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {show && (
                <motion.div 
                    className={styles.modalOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onHide}
                >
                    <motion.div 
                        className={styles.modalContent}
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className={styles.modalHeader}>
                            <h2 className={styles.modalTitle}>{project.title}</h2>
                            <button onClick={onHide} className={styles.closeButton}>
                                <FiX />
                            </button>
                        </div>

                        {/* Body */}
                        <div className={styles.modalBody}>
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                style={{ 
                                    width: '100%', 
                                    height: '300px', 
                                    objectFit: 'cover', 
                                    borderRadius: '12px',
                                    marginBottom: '2rem' 
                                }}
                            />
                            
                            <div dangerouslySetInnerHTML={{ __html: project.details }} />
                        </div>

                        {/* Footer */}
                        <div className={styles.modalFooter}>
                            <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={onHide}>
                                Fermer
                            </button>
                            
                            {project.linkGit && (
                                <a href={project.linkGit} target="_blank" className={`${styles.btn} ${styles.btnPrimary}`}>
                                    <FiGithub /> Code Source
                                </a>
                            )}
                             {project.pdf && (
                                <a href={project.pdf} target="_blank" className={`${styles.btn} ${styles.btnOutline}`}>
                                    <FiDownload /> Documentation
                                </a>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;