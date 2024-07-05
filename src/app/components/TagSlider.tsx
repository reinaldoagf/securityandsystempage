// TagSlider.tsx
import React from 'react';
import styles from './TagSlider.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TagSlider = ({ tags }: { tags: any[] }) => {
  return (
    <>
      {/* Contenedor principal para la animación de derecha a izquierda */}
      <div className={`${styles.sliderContainer} ${styles.sliderBackground}`}>
        <div className={styles.slider}>
          <div className={styles.gradientLeft}></div>
          <ul className={`${styles.infiniteTranslate} ${styles.sliderContent}`}>
            {tags.map((tag, index) => (
              <li key={index} className={styles.tagItem}>
                <span className={``}>{tag.text}</span>
                <div className={styles.tagIcon}>
                  <FontAwesomeIcon width={100} height={100} icon={tag.icon} />
                </div>
              </li>
            ))}
            {tags.map((tag, index) => (
              <li key={`${index}-copy`} className={styles.tagItem}>
                <span className={``}>{tag.text}</span>
                <div className={styles.tagIcon}>
                  <FontAwesomeIcon width={100} height={100} icon={tag.icon} />
                </div>
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
