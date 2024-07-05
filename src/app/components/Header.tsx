"use client"
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

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

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

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
              <a href="#home" className={styles.menuLink} onClick={handleLinkClick}>Inicio</a>
            </li>
            <li className={styles.menuItem}>
              <a href="#about-me" className={styles.menuLink} onClick={handleLinkClick}>Sobre mí</a>
            </li>
            <li className={styles.menuItem}>
              <a href="#interests" className={styles.menuLink} onClick={handleLinkClick}>Mis intereses</a>
            </li>
            <li className={styles.menuItem}>
              <a href="#contact" className={styles.menuLink} onClick={handleLinkClick}>Contacto</a>
            </li>
          </ul>
        </div>
        <a href="https://reinaldoagf.netlify.app/" className={styles.menuBlock}>Portafolio</a>
      </nav>
    </header>
  );
};

export default Header;