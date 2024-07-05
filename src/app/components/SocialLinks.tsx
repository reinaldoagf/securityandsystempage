import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import styles from './SocialLinks.module.css';

const SocialLinks = () => (
    <div className={styles.bannerLinks}>
        <a href="https://github.com/reinaldoagf" title="Github">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/reinaldoagf/" title="Linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:reinaldoagf1@gmail.com" title="faMailBulk">
            <FontAwesomeIcon icon={faMailBulk} />
        </a>
        <a href="https://instagram.com/reinaldoagf.dev" title="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
        </a>
    </div>
);

export default SocialLinks;