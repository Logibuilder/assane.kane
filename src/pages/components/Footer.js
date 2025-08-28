
import styles from "../../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer id="footer" className={`${styles.footer} ` }>
            <div className={`${styles.social_icons}`}>
                
                <a href="https://github.com/Logibuilder" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />Github
                </a>

                <a href="https://www.linkedin.com/in/assane-kane-10bb19267/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />Linkedin
                </a>
            </div>
            <p>&copy; 2024 Logi_builder. Tous droits réservés.</p>
        </footer>
    );
};


export default Footer;