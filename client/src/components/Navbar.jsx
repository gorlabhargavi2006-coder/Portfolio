import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollWidth, setScrollWidth] = useState(0);

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Certifications', target: 'certifications' },
    { name: 'Projects', target: 'projects' },
    { name: 'Experience', target: 'experience' },
    { name: 'Contact', target: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background scroll class
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const scrolledPct = (window.scrollY / totalScroll) * 100;
        setScrollWidth(scrolledPct);
      }

      // Active Section Spy
      const scrollPosition = window.scrollY + 150; // offset for triggers
      for (const link of navLinks) {
        const section = document.getElementById(link.target);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(link.target);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(target);
    if (element) {
      const offset = 80; // navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(target);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollWidth}%` }} />

      <header 
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '1200px',
          zIndex: 1000,
          padding: scrolled ? '0.75rem 1.5rem' : '1.2rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          boxShadow: scrolled ? 'var(--glass-shadow)' : 'none',
          border: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
          borderRadius: scrolled ? '50px' : '0px',
        }}
      >
        {/* Branding Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, 'home')}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            fontWeight: '800',
            background: 'var(--gradient-main)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '1px'
          }}
        >
          GB.
        </a>

        {/* Desktop Links */}
        <nav 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
          }}
          className="desktop-nav"
        >
          <ul 
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '1.5rem',
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link) => (
              <li key={link.target}>
                <a
                  href={`#${link.target}`}
                  onClick={(e) => handleLinkClick(e, link.target)}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    color: activeSection === link.target ? 'var(--secondary)' : 'var(--text-primary)',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '20px',
                    transition: 'var(--transition-fast)',
                    position: 'relative',
                  }}
                  className="nav-item"
                >
                  {link.name}
                  {activeSection === link.target && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '12px',
                        height: '3px',
                        borderRadius: '10px',
                        background: 'var(--gradient-main)',
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.25rem',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'var(--glass-border)',
              transition: 'var(--transition-fast)',
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="hover-target"
          >
            {theme === 'dark' ? <FiSun style={{ color: '#00D4FF' }} /> : <FiMoon style={{ color: '#6C63FF' }} />}
          </button>
        </nav>

        {/* Mobile Navigation controls */}
        <div 
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1rem',
          }}
          className="mobile-nav-toggle"
        >
          {/* Theme Toggle inside mobile header */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.2rem',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: 'var(--glass-border)',
            }}
          >
            {theme === 'dark' ? <FiSun style={{ color: '#00D4FF' }} /> : <FiMoon style={{ color: '#6C63FF' }} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '75%',
          maxWidth: '300px',
          height: '100vh',
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          zIndex: 999,
          boxShadow: 'var(--glass-shadow)',
          borderLeft: '1px solid var(--glass-border)',
          padding: '8rem 2rem 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {navLinks.map((link) => (
            <li key={link.target}>
              <a
                href={`#${link.target}`}
                onClick={(e) => handleLinkClick(e, link.target)}
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: activeSection === link.target ? 'var(--secondary)' : 'var(--text-primary)',
                  display: 'block',
                  padding: '0.5rem 0',
                  transition: 'var(--transition-fast)',
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Styles injector for responsive Navbar behavior */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
        .nav-item:hover {
          color: var(--secondary) !important;
          background-color: rgba(108, 99, 255, 0.05);
        }
      `}</style>
    </>
  );
};

export default Navbar;
