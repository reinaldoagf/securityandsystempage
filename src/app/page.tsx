// page.tsx
import Header from './components/Header';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Interests from './components/Interests';
import ParallaxSection from './components/ParallaxSection';
import Layout from './components/Layout';
import styles from './page.module.css';

export default function Home() {
  return (
    <Layout>
      <Header />
      <main className={styles.main} id="home">
        <Banner />
      </main>
      <ParallaxSection backgroundImage="https://png.pngtree.com/thumb_back/fw800/background/20230722/pngtree-software-developer-conducting-quality-check-on-3d-gaming-software-and-application-image_3771481.jpg">
        <h2>Bienvenido a mi Portfolio</h2>
        <p>Explora un poco sobre mí.</p>
      </ParallaxSection>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="interests">
        <Interests />
      </div>
    </Layout>
  );
}
