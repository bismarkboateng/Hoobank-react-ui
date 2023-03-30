import React from 'react';
import { Billing, Business, Cards, Companies, CTA, Footer, Hero, Navbar, Stats, Testimonials } from './components';
import styles from './style';

const App = () => {
  
  return (
    <main className='bg-primary'>
      <div className="w-2/3 mx-auto">
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
      </div>
    </main>
  );
}


export default App;