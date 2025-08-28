import { useState } from "react";
import styles from "../../styles/Menu.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCode, faProjectDiagram, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ThemeToggle from "./ThemeToggle";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Ferme le menu quand on clique sur un lien (optionnel)
    const closeMenu = () => setIsOpen(false);

    // Liste des éléments du menu (évite la duplication)
    const menuItems = [
        { name: "A propos", path: "about" , icon: faUser },
        { name: "Compétences", path: "skill", icon: faCode },
        { name: "Projets", path: "project", icon: faProjectDiagram },
        { name: "Contact", path: "contact", icon: faEnvelope }
    ];

    return (
        <>
            {/* Overlay mobile */}
            <div 
                id="menu"
                className={`${styles.overlay} ${isOpen ? styles.show : ""}`} 
                onClick={closeMenu}
            />

            {/* Navbar Bootstrap */}
            <nav className="navbar navbar-expand-sm bg-danger navbar-light shadow position-relative" 
                 style={{ backgroundColor: "#ff0000" }}>
                <div className="container-fluid">
                    
                    {/* Logo */}
                    <h3>
                        <a className="navbar-brand text-white" href="#">Logi_builder</a>
                    </h3>
                    
                    {/* ThemeToggle positionné absolument */}
                    
                    
                    {/* Menu desktop (horizontal) */}
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto me-5"> {/* me-5 pour laisser de la place au toggle */}
                            <li className="nav-item mx-2" >
                                    <a 
                                        className={`nav-link text-white  d-flex flex-column`}
                                    >
                                        <ThemeToggle />
                                    </a>
                                </li>
                            {menuItems.map((item, index) => (
                                <li className="nav-item mx-2" key={index}>
                                    <a 
                                        className={`nav-link text-white ${styles.nav_link} d-flex flex-column`}
                                        href={`#${item.path}`}
                                        onClick={closeMenu}
                                    >
                                        <FontAwesomeIcon icon={item.icon} className="mb-1" size="2x" />
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Bouton hamburger (mobile seulement) */}
                    <article 
                        className={`${styles["menu-toggle"]} d-sm-none`} 
                        style={{ marginRight: '0px' }} // Laisser de la place au toggle
                    >
                        <ThemeToggle />
                    </article>            
                    {/* Bouton hamburger (mobile seulement) */}
                    <button 
                        className={`${styles["menu-toggle"]} d-sm-none`} 
                        onClick={toggleMenu}
                        style={{ marginRight: '20px' }} // Laisser de la place au toggle
                    >
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
            </nav>

            {/* Sidebar mobile */}
            <section className={`${styles.menu} ${isOpen ? styles.show : ""} bg bg-danger`}>
                <ul className="nav flex-column mt-5">
                    
                    
                    <hr className="text-white mx-3" />
                    
                    {menuItems.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <a 
                                className="nav-link text-white" 
                                href={`#${item.path}`}
                                onClick={closeMenu}
                            >
                                <FontAwesomeIcon icon={item.icon} className="me-2" />{item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Menu;