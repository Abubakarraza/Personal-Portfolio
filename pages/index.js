import { Fragment } from 'react';
import Hero from '../components/UI/Hero';
import Services from '../components/UI/Services';
import About from '../components/UI/About';
import Portfolio from '../components/UI/Portfolio';
import Testimonial from '../components/UI/Testimonial';
import Contact from '../components/UI/Contact';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Abubakar Raza</title>
        <meta name="description" content="Abubakar Raza Portfolio" />
      </Head>
      <Fragment>
        <Head>Abubakar</Head>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonial />
        <Contact />
      </Fragment>
    </>
  );
}
