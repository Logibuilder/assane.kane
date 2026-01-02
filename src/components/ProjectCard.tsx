"use client";

import React from "react";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { motion } from "framer-motion";
import styles from '../styles/Project.module.css';
import { Project } from "@/types";
import { ProjectCardProps } from "@/types";


const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenModal }) => {
    return (
        <motion.div
            className={styles.projectCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
        >
            <div className={styles.cardHeader}>
                <FiFolder size={28} color="#dc3545" />
                <div style={{ display: 'flex', gap: '15px' }}>
                    {project.linkGit && (
                        <a href={project.linkGit} target="_blank" rel="noopener noreferrer" title="Voir le code">
                            <FiGithub size={20} color="#333" />
                        </a>
                    )}
                    {project.pdf && (
                        <button 
                            onClick={() => onOpenModal(project)} 
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                            title="Voir les détails"
                        >
                            <FiExternalLink size={20} color="#333" />
                        </button>
                    )}
                </div>
            </div>
        
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>
                    {project.description}
                </p>
                
                <div className={styles.tagsWrapper}>
                    {project.tags.map((tag, i) => (
                        <span key={i} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;