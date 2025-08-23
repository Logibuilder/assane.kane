import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, 
    FaNodeJs, FaDocker, FaGit, FaPython, FaJava, FaPhp, 
    FaDatabase, FaCuttlefish
} from "react-icons/fa";
import { SiSpringboot, SiDjango, SiMongodb, SiPostgresql, SiMariadb, SiUml, SiCplusplus, SiJunit5, SiTestinglibrary, SiPostman, SiSvelte, SiNextdotjs } from "react-icons/si";

import styles from "../../styles/Skill.module.css";
const skills = [
    {
        name: "Développement Frontend",
        technologies: [
            { name: "HTML5", icon: <FaHtml5 color="#E34F26" size={40} /> },
            { name: "CSS3", icon: <FaCss3Alt color="#1572B6" size={40} /> },
            { name: "React", icon: <FaReact color="#61DBFB" size={40} className="react-spin" /> },
            { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" size={40} /> },
            { name: "Svelte", icon: <SiSvelte color="#FF3E00" size={40} /> }
        ]
    },
    {
        name: "Développement Backend",
        technologies: [
            { name: "Node.js", icon: <FaNodeJs color="#68A063" size={40} /> },
            { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" size={40} /> },
            { name: "Next.js", icon: <SiNextdotjs color="#000000" size={40} /> }
        ]
    },
    {
        name: "Bases de données",
        technologies: [
            { name: "MySQL", icon: <FaDatabase color="#4479A1" size={40} /> },
            { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={40} /> },
            { name: "MariaDB", icon: <SiMariadb color="#003545" size={40} /> }
        ]
    },
    {
        name: "Langages de programmation",
        technologies: [
            { name: "Python", icon: <FaPython color="#3776AB" size={40} /> },
            { name: "Java", icon: <FaJava color="#007396" size={40} /> },
            { name: "PHP", icon: <FaPhp color="#777BB4" size={40} /> },
            { name: "C/C++", icon: <SiCplusplus color="#00599C" size={40} /> },
            { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={40} /> },

        ]
    },
    {
        name: "Tests & Qualité",
        technologies: [
            { name: "JUnit 4", icon: <SiTestinglibrary color="#F05032" size={40} /> },
            { name: "JUnit 5", icon: <SiJunit5 color="#25A162" size={40} /> },
            { name: "Unittest", icon: <SiTestinglibrary color="#F7DF1E" size={40} /> }
        ]
    },
    {
        name: "Outils & Méthodologies",
        technologies: [
            { name: "Git", icon: <FaGit color="#F05032" size={40} /> },
            { name: "UML", icon: <SiUml color="#F47C20" size={40} /> },
            { name: "Postman", icon: <SiPostman color="#FF6C37" size={40} /> }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skill" className="container-fluid mt-5">
            <h2 className="text-center mb-4 text-danger"> Mes Compétences</h2>
            <div className="row">
                {skills.map((category, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4 ">
                        <div className={`${styles.category_item} m-2 text-center card  shadow-lg border border-1 border-danger rounded-4 p-3 text-center h-100`}>
                            <h5 className="card-title mb-3">{category.name}</h5>
                            <div className="d-flex flex-wrap justify-content-center">
                                {category.technologies.map((tech, i) => (
                                    <div key={i} className={`${styles.skill_item} m-2 text-center `}>
                                        {tech.icon}
                                        <p className="mb-0">{tech.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
