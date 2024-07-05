// page.tsx
"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faMailBulk } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  // Estados para controlar el menú y el estado del header
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  // Efecto para manejar la apertura/cierre del menú
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 85) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    // Agregar los event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Limpiar los event listeners en el desmontaje del componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const handleBurgerClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <>
    <Head>
      <title>Reinaldo González</title>
      <meta name="description" content="Perfil de usuario con información básica, intereses y sección de contacto" />
    </Head>
      <header className={`${styles.header} ${isScrolled ? styles.onScroll : ''}`} id="header">
        <nav className={`${styles.navbar} ${styles.container}`}>
          <a href="#" className={styles.brand}>reinaldoagf</a>
          <div
            className={`${styles.burger} ${isMenuOpen ? styles.isActive : ''}`}
            id="burger"
            onClick={handleBurgerClick}
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </div>
          <div className={`${styles.menu} ${isMenuOpen ? styles.isActive : ''}`} id="menu">
            <ul className={styles.menuInner}>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuLink} onClick={handleLinkClick}>Inicio</a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuLink} onClick={handleLinkClick}>Sobre mí</a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuLink} onClick={handleLinkClick}>Mis intereses</a>
              </li>
              <li className={styles.menuItem}>
                <a href="#" className={styles.menuLink} onClick={handleLinkClick}>Contacto</a>
              </li>
            </ul>
          </div>
          <a href="https://reinaldoagf.netlify.app/" className={styles.menuBlock}>Portafolio</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={`${styles.section} ${styles.banner} ${styles.bannerSection}`}>
          <div className={`${styles.container} ${styles.bannerColumn}`}>
            <Image className={styles.bannerImage} src="/img/profile.png" width={800} height={800} alt="profile" />
            <div className={styles.bannerInner}>
              <h1 className={styles.headingXL}>Reinaldo González</h1>
              <p className={styles.paragraph}>
              Soy un Ingeniero en Informática y un apasionado desarrollador de software con una sólida experiencia de +6 años en el ámbito del desarrollo web
              </p>
              {/* <button className={`${styles.btn} ${styles.btnDarken} ${styles.btnInline}`}>*/}
              {/*  Mi portafolio <FontAwesomeIcon icon={faGlobe} /> */}
              {/*</button> */}
            </div>
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
          </div>
        </section>
      </main>
    </>
  );
}
