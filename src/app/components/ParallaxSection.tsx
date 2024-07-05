"use client"
import React, { useEffect, useRef } from 'react';
import styles from './ParallaxSection.module.css';

type ParallaxSectionProps = {
  backgroundImage: string;
  children: React.ReactNode;
};

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ backgroundImage, children }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.pageYOffset;
        // Ajusta la posición Y de la imagen de fondo para el efecto parallax
        parallaxRef.current.style.backgroundPositionY = `-${offset * 0.2}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={parallaxRef}
      className={styles.parallaxSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
