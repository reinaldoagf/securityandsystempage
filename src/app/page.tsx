// page.tsx
import Header from './components/Header';
import Banner from './components/Banner';
import ParallaxSection from './components/ParallaxSection';
import AboutMe from './components/AboutMe';
import Interests from './components/Interests';
import ContactForm from './components/ContactForm';
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
      <ParallaxSection backgroundImage="https://as2.ftcdn.net/v2/jpg/01/08/85/33/1000_F_108853380_yOPTggGSuYRZWBqRxW6DePDOcc1WfaBU.jpg">
        <h2>Contáctame</h2>
      </ParallaxSection>
      <div id="contact">
        <ContactForm />
      </div>
    </Layout>
  );
}
