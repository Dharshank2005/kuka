import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setIsHeroSection(window.scrollY < window.innerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsHeroSection(activeSection === 'home');
  }, [activeSection]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? (isHeroSection ? 'bg-white shadow-md py-2' : 'bg-primary-800 shadow-md py-2') 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" className="mr-2">
              <rect width="40" height="40" rx="8" fill={scrolled && isHeroSection ? "#0d47a1" : (scrolled ? "#ffffff" : "#0d47a1")}/>
              <path d="M9 20L15 14M9 20L15 26M9 20H25M31 20C31 25.5228 26.5228 30 21 30C19.0429 30 17.2051 29.4772 15.6271 28.5715" 
                stroke={scrolled && isHeroSection ? "#ffffff" : (scrolled ? "#0d47a1" : "#ffffff")} 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 10C26.5228 10 31 14.4772 31 20" 
                stroke={scrolled && isHeroSection ? "#ffffff" : (scrolled ? "#0d47a1" : "#ffffff")} 
                strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className={`text-xl font-bold font-heading ${
              scrolled 
                ? (isHeroSection ? 'text-primary-900' : 'text-white') 
                : (isHeroSection ? 'text-white' : 'text-primary-900')
            }`}>KUKA Hackathon</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#challenges', label: 'Challenges' },
                { href: '#timeline', label: 'Timeline' },
                { href: '#register', label: 'Register' },
                { href: '#faq', label: 'FAQ' }
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className={`nav-link relative ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  >
                    <span className={`${
                      scrolled 
                        ? (isHeroSection ? 'text-primary-800' : 'text-white') 
                        : (isHeroSection ? 'text-white' : 'text-primary-800')
                    } hover:text-accent-500 transition-colors duration-200 font-medium`}>
                      {link.label}
                    </span>
                    {activeSection === link.href.substring(1) && (
                      <motion.span 
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-500"
                        layoutId="navbar-underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className={`md:hidden ${
              scrolled 
                ? (isHeroSection ? 'text-primary-800' : 'text-white') 
                : (isHeroSection ? 'text-white' : 'text-primary-800')
            } focus:outline-none`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <nav className="container mx-auto container-padding py-4">
              <ul className="flex flex-col space-y-4">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'About' },
                  { href: '#challenges', label: 'Challenges' },
                  { href: '#timeline', label: 'Timeline' },
                  { href: '#register', label: 'Register' },
                  { href: '#faq', label: 'FAQ' }
                ].map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className={`block py-2 ${activeSection === link.href.substring(1) ? 'text-primary-600 font-medium' : 'text-gray-600'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;