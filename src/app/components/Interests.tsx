"use client"
// Interests.tsx
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import TagSlider from './TagSlider';
import styles from './Interests.module.css';

const Interests = () => {
  const tags = [
    'React',
    'JavaScript',
    'CSS',
    'HTML',
    'Node.js',
    'Webpack',
    'TypeScript',
    'GraphQL',
    'Redux',
    'Next.js',
    'Vue.js',
    'Angular',
    'SASS',
    'Tailwind CSS',
    'Bootstrap',
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
