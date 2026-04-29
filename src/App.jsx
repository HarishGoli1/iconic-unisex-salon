import React from 'react';
import { useReveal } from './hooks/useReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import About from './components/About';
import Signature from './components/Signature';
import Testimonials from './components/Testimonials';
import CTA from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Activates scroll-reveal for all .reveal elements
  useReveal();

  return (
    <div
      style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        background: '#FDFCF8',
        color: '#2C2C2C',
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <Gallery />
      <About />
      <Signature />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
