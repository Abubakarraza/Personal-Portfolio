import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from '../components/Layout/Layout';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ChakraProvider>
        <Component {...pageProps} />;
      </ChakraProvider>
    </Layout>
  );
}

export default MyApp;
