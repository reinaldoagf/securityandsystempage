// page.tsx
import Header from './components/Header';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Layout from './components/Layout';
import styles from './page.module.css';

export default function Home() {
  return (
    <Layout>
      <Header />
      <main className={styles.main} id="home">
        <Banner />
      </main>
      <div id="about-me" >
        <AboutMe />
      </div>
    </Layout>
  );
}
