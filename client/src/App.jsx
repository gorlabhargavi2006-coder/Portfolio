import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import { FiArrowUp } from 'react-icons/fi';

const LoadingScreen = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#0b0b14',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
      }}
    >
      {/* Premium Loader Ring */}
      <div 
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          border: '3px solid transparent',
          borderTopColor: '#6C63FF',
          borderBottomColor: '#00D4FF',
          animation: 'spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
          marginBottom: '2rem',
        }}
      />
      <h2 
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.75rem',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #6C63FF 0%, #00D4FF 50%, #FF6B6B 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '2px',
        }}
      >
        GORLA BHARGAVI
      </h2>
      <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.5rem', letterSpacing: '1px' }}>
        LOADING EXPERIENCE...
      </p>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 999,
        background: 'var(--gradient-main)',
        border: 'none',
        color: 'white',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.25rem',
        boxShadow: '0 4px 15px rgba(108, 99, 255, 0.4)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: visible ? 'all' : 'none',
      }}
      className="hover-target"
      title="Back to Top"
    >
      <FiArrowUp />
    </button>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer 
      style={{
        padding: '3rem 0',
        borderTop: '1px solid var(--glass-border)',
        background: 'var(--nav-bg)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div className="container">
        <h3 
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            fontWeight: '800',
            background: 'var(--gradient-main)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
          }}
        >
          Gorla Bhargavi
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Computer Science Engineering Student | Problem Solver | Web Developer
        </p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          &copy; {currentYear} Gorla Bhargavi. All rights reserved. Designed & built with passion.
        </p>
      </div>
    </footer>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds splash loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading && <LoadingScreen />}
      
      {/* Background radial overlays */}
      <div className="bg-glow glow-primary" />
      <div className="bg-glow glow-secondary" />

      {/* Main Core Elements */}
      <CustomCursor />
      <Navbar />
      
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
};

export default App;
