"use client"
// Interests.tsx
import React, { useEffect, useRef, useState } from 'react';
import { faAngular, faBootstrap, faCss3, faHtml5, faJs, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import TagSlider from './TagSlider';
import styles from './Interests.module.css';

const Interests = () => {
  const tags = [
    {text: 'React', icon: faReact },
    {text: 'JavaScript', icon: faJs },
    {text: 'CSS', icon: faCss3},
    {text: 'HTML', icon: faHtml5},
    {text: 'Node.js', icon: faNodeJs},
    {text: 'Angular', icon: faAngular},
    {text: 'SASS', icon: faSass},
    {text: 'Bootstrap', icon: faBootstrap},
  ];
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Se activa cuando el 10% de la sección es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={` ${styles.content}`}>
        <h1 className={styles.heading}>Mis intereses</h1>
      </div>
      <TagSlider tags={tags} />
    </section>
  );
};

export default Interests;
