// page.tsx
import Header from './components/Header';
import Banner from './components/Banner';
import Layout from './components/Layout';
import styles from './page.module.css';

export default function Home() {
  return (    
    <Layout>
      <Header />
      <main className={styles.main} id='home'>
        <Banner />
      </main>
    </Layout>
  );
}
