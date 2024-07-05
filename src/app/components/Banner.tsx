import Image from 'next/image';
import styles from './Banner.module.css';
import SocialLinks from './SocialLinks';

const Banner = () => (
    <section className={`${styles.section} ${styles.banner} ${styles.bannerSection}`}>
        <div className={`${styles.container} ${styles.bannerColumn}`}>
            <Image className={styles.bannerImage} src="/img/profile.png" width={800} height={800} alt="profile" />
            <div className={styles.bannerInner}>
                <h1 className={styles.headingXL}>Reinaldo González</h1>
                <p className={styles.paragraph}>
                    Soy un Ingeniero en Informática y un apasionado desarrollador de software con una sólida experiencia de +6 años en el ámbito del desarrollo web
                </p>
                {/* <button className={`${styles.btn} ${styles.btnDarken} ${styles.btnInline}`}>
          Mi portafolio <FontAwesomeIcon icon={faGlobe} />
        </button> */}
            </div>
            <SocialLinks />
        </div>
    </section>
);

export default Banner;