"use client"
import { useEffect, useRef, useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Se activa cuando el 10% del pie de página es visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`${styles.footer} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.content}>
        <div className={styles.section}>
          <h3 className={styles.heading}>Navegación</h3>
          <ul className={styles.navList}>
            <li><a href="#home" className={styles.link}>Inicio</a></li>
            <li><a href="#about" className={styles.link}>Sobre mí</a></li>
            <li><a href="#interests" className={styles.link}>Intereses</a></li>
            <li><a href="#contact" className={styles.link}>Contacto</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3 className={styles.heading}>Redes Sociales</h3>
          <ul className={styles.socialList}>
            <li><a href="https://www.linkedin.com/in/reinaldoagf/" target="_blank" className={styles.socialLink}>LinkedIn</a></li>
            <li><a href="https://instagram.com/reinaldoagf.dev" target="_blank" className={styles.socialLink}>Instagram</a></li>
            <li><a href="mailto:reinaldoagf1@gmail.com" target="_blank" className={styles.socialLink}>Gmail</a></li>
            <li><a href="https://github.com/reinaldoagf" target="_blank" className={styles.socialLink}>Github</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3 className={styles.heading}>Contacto</h3>
          <p className={styles.description}>Email: reinaldoagf1@gmail.com</p>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
