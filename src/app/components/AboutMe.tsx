"use client"
import { useEffect, useRef, useState } from 'react';
import styles from './AboutMe.module.css';

const AboutMe = () => {
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
      <div>
        <h1 className={styles.heading}>About Me</h1>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>
          Soy Ingeniero en Informática y un entusiasta desarrollador de software con una amplia experiencia en el campo del desarrollo web. Mi trayectoria comenzó en 2019 cuando ingresé al mundo profesional como desarrollador web en una agencia de desarrollo, donde me especialicé en la creación de tiendas en línea. Desde entonces, he tenido el privilegio de trabajar con diversas empresas y agencias internacionales, desarrollando soluciones de software a medida que satisfacen las necesidades específicas de cada cliente.
        </p>
        <p className={styles.description}>
          Mi principal enfoque en la actualidad es la creación de interfaces de usuario atractivas y funcionales. Disfruto especialmente del desafío de fusionar el diseño creativo con la ingeniería sólida para desarrollar software que no solo sea visualmente impactante, sino también altamente funcional y fácil de usar. En mi trabajo, busco constantemente el punto óptimo donde convergen el diseño estético y la ingeniería eficiente para ofrecer experiencias de usuario excepcionales.
        </p>
        <p className={styles.description}>
          Fuera del mundo digital, me encontrarás inmerso en actividades que me mantienen en movimiento y en forma. Soy un apasionado del CrossFit y paso una buena parte de mi tiempo en el gimnasio, desafiándome constantemente para superar mis límites. Además, disfruto participar en actividades deportivas al aire libre, como el fútbol y correr, que me permiten conectar con la naturaleza y liberar energía.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
