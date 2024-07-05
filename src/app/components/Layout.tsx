import Head from 'next/head';

const Layout = ({ children }: any) => (
  <>
    <Head>
      <title>Reinaldo González</title>
      <meta name="description" content="Perfil de usuario con información básica, intereses y sección de contacto" />
    </Head>
    {children}
  </>
);

export default Layout;