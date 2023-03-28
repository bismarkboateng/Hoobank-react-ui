import React from 'react';
import { Billing, Business, Cards, Companies, CTA, Footer, Hero, Navbar, Stats, Testimonials } from './components';
import styles from './style';

const App = () => {
  
  return (
    <main className='bg-primary'>
      <Navbar />
      <Hero />

      <Stats />
      <Business />
      <Billing />
      <Cards />
      <Testimonials />
      <Companies />
      <CTA />
      <Footer />
    </main>
  );
}


export default App;