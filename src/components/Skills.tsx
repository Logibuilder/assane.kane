"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { 
  FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker 
} from "react-icons/fa";
import { 
  SiSpringboot, SiPostgresql, SiJavascript, SiTypescript, SiNextdotjs, SiBootstrap, SiTailwindcss 
} from "react-icons/si";

import { SkillCategory, Skill } from "@/types";



const Skills = () => {
  // Vos données organisées par catégorie
  const categories: SkillCategory[] = [
    {
      title: "Backend & Architecture",
      skills: [
        { name: "Java", icon: <FaJava />, color: "#e76f00" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
      ]
    },
    {
      title: "Frontend Moderne",
      skills: [
        { name: "React.js", icon: <FaReact />, color: "#61dafb" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
      ]
    },
    {
      title: "UI & Outils",
      skills: [
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952b3" },
        { name: "Git / GitHub", icon: <FaGitAlt />, color: "#f05032" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
      ]
    }
  ];

  return (
    <section id="skill" className="py-5 bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-5 fw-bold" style={{ color: "#dc3545" }}>
            Compétences Techniques
          </h2>

          <Row className="g-4">
            {categories.map((category, index) => (
              <Col key={index} lg={4} md={6}>
                <Card className="h-100 shadow-sm border-0 hover-effect">
                  <Card.Body>
                    <h4 className="text-center mb-4 fw-bold text-dark">{category.title}</h4>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                      {category.skills.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            bg="white" 
                            className="text-dark border d-flex align-items-center gap-2 px-3 py-2 shadow-sm"
                            style={{ fontSize: "0.9rem" }}
                          >
                            <span style={{ color: skill.color, fontSize: "1.2rem" }}>
                              {skill.icon}
                            </span>
                            {skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;