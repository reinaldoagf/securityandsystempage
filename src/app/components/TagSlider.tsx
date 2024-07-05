// TagSlider.tsx
import React from 'react';
import styles from './TagSlider.module.css';

const TagSlider = ({ tags }: { tags: string[] }) => {

  return (
    <>
      {/* Contenedor principal para la animación de derecha a izquierda */}
      <div className={`${styles.sliderContainer} ${styles.sliderBackground}`}>
        <div className={styles.slider}>
          <div className={styles.gradientLeft}></div>
          <ul className={`${styles.infiniteTranslate} ${styles.sliderContent}`}>
            {tags.map((tag, index) => (
              <li key={index} className={styles.tagItem}>
                <span className={``}>{tag}</span>
              </li>
            ))}
            {tags.map((tag, index) => (
              <li key={`${index}-copy`} className={styles.tagItem}>
                <span className={``}>{tag}</span>
              </li>
            ))}
          </ul>
          <div className={styles.gradientRight}></div>
        </div>
      </div>
    </>
  );
};

export default TagSlider;
