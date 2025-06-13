import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Challenges from './components/Challenges';
import Timeline from './components/Timeline';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  const handleScroll = () => {
    const sections = ['home', 'about', 'challenges', 'timeline', 'register', 'faq'];
    
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    
    if (current) {
      setActiveSection(current);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Challenges />
      <Timeline />
      <Registration />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;