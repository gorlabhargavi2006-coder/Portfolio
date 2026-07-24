import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMessageSquare, FiExternalLink } from 'react-icons/fi';
import avatarImg from '../assets/avatar.png';

const Hero = () => {
  const titles = [
    "Computer Science Student",
    "Frontend Developer",
    "React Developer",
    "Future Software Engineer"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = titles[currentTitleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting characters
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 0 60px 0',
      }}
    >
      {/* Background neon glows */}
      <div className="bg-glow glow-primary" />
      <div className="bg-glow glow-secondary" />

      {/* Decorative floating shapes in background */}
      <div 
        style={{
          position: 'absolute',
          width: '50px',
          height: '50px',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
          top: '25%',
          left: '10%',
          opacity: 0.2,
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div 
        style={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, var(--secondary), var(--accent))',
          bottom: '15%',
          right: '15%',
          opacity: 0.15,
          animation: 'float 12s ease-in-out infinite',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Main Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h5 
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--secondary)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Welcome to my space
            </h5>
            
            <h1 
              style={{
                fontSize: '3.75rem',
                fontWeight: '800',
                marginBottom: '1.5rem',
                lineHeight: 1.1,
              }}
              className="hero-heading"
            >
              Hi, I'm <span style={{
                background: 'var(--gradient-main)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Gorla Bhargavi</span>
            </h1>

            <div 
              style={{
                fontSize: '2rem',
                fontWeight: '600',
                height: '50px',
                marginBottom: '1.5rem',
                color: 'var(--text-secondary)',
              }}
              className="hero-subtext"
            >
              <span>{currentText}</span>
              <span className="typing-cursor">|</span>
            </div>

            <p 
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                marginBottom: '2.5rem',
                lineHeight: 1.7,
              }}
            >
              I am a passionate Computer Science Engineering student. I focus on web technologies, databases, and writing clean code to solve real-world problems. Let's build something amazing together!
            </p>

            <div 
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary hover-target"
              >
                View Projects <FiArrowRight />
              </button>
              
              <a 
                href="/resume.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary hover-target"
              >
                View Resume <FiExternalLink />
              </a>

              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-accent hover-target"
              >
                Contact Me <FiMessageSquare />
              </button>
            </div>
          </motion.div>

          {/* Portrait illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Spinning decorative borders */}
            <div 
              style={{
                position: 'absolute',
                width: '360px',
                height: '360px',
                borderRadius: '50%',
                border: '2px dashed var(--primary)',
                animation: 'spin 40s linear infinite',
                opacity: 0.3,
              }}
              className="avatar-ring-outer"
            />
            <div 
              style={{
                position: 'absolute',
                width: '340px',
                height: '340px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, rgba(108,99,255,0.1), rgba(0,212,255,0.1))',
                zIndex: 0,
              }}
              className="avatar-ring-inner"
            />

            {/* Glowing background */}
            <div 
              style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                boxShadow: '0 0 60px rgba(0, 212, 255, 0.4)',
                filter: 'blur(30px)',
                zIndex: -1,
              }}
            />

            <img 
              src={avatarImg} 
              alt="Gorla Bhargavi Avatar"
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '6px solid var(--glass-border)',
                zIndex: 1,
                boxShadow: 'var(--glass-shadow)',
                animation: 'float 6s ease-in-out infinite',
              }}
              className="hover-target"
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
            text-align: center;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
          .hero-heading {
            font-size: 2.75rem !important;
          }
          .hero-subtext {
            font-size: 1.5rem !important;
          }
          .hero-grid > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .avatar-ring-outer, .avatar-ring-inner {
            width: 280px !important;
            height: 280px !important;
          }
          img {
            width: 260px !important;
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
