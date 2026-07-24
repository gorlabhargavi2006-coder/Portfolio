import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBookOpen, FiTarget, FiActivity, FiCpu } from 'react-icons/fi';

const StatCounter = ({ label, target, suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseFloat(target);
      if (start === end) return;

      const duration = 2000; // ms
      const steps = 60;
      const increment = end / steps;
      const stepTime = duration / steps;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <div 
      ref={ref} 
      className="glass hover-target" 
      style={{
        padding: '1.5rem',
        textAlign: 'center',
        flex: '1 1 200px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-15%',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'var(--card-glow)',
          filter: 'blur(10px)',
          zIndex: 0,
        }}
      />
      <h3 
        style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          background: 'var(--gradient-main)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.25rem',
          zIndex: 1,
          position: 'relative',
        }}
      >
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </h3>
      <p 
        style={{
          fontSize: '0.9rem',
          fontWeight: '600',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          zIndex: 1,
          position: 'relative',
        }}
      >
        {label}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <section 
      id="about" 
      style={{
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="bg-glow glow-accent" />

      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
          }}
        >
          {/* Main Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="glass hover-target"
            style={{
              padding: '3rem',
              position: 'relative',
            }}
          >
            <p 
              style={{
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: 'var(--text-primary)',
                marginBottom: '2.5rem',
                textAlign: 'center',
                fontWeight: '500',
              }}
            >
              "I am a passionate Computer Science Engineering student with a strong foundation in programming, web development, and database management. I enjoy building innovative software solutions and continuously learning emerging technologies. My goal is to contribute to impactful projects while growing as a software engineer."
            </p>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
              }}
              className="about-grid"
            >
              {/* Academic Profile */}
              <div style={{ display: 'flex', gap: '1.25rem' }}>
                <div 
                  style={{
                    fontSize: '1.75rem',
                    color: 'var(--secondary)',
                    backgroundColor: 'var(--cert-badge-bg)',
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <FiBookOpen />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>Academic Profile</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    Currently pursuing a Bachelor of Technology in Computer Science Engineering (CSE). Maintaining a strong academic status with an 8.0 CGPA.
                  </p>
                </div>
              </div>

              {/* Career Objective */}
              <div style={{ display: 'flex', gap: '1.25rem' }}>
                <div 
                  style={{
                    fontSize: '1.75rem',
                    color: 'var(--primary)',
                    backgroundColor: 'var(--cert-badge-bg)',
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <FiTarget />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>Career Objective</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    Aspirations to design high-quality full-stack solutions, scale cloud apps, and implement database-driven engineering architecture.
                  </p>
                </div>
              </div>

              {/* Core Interests */}
              <div style={{ display: 'flex', gap: '1.25rem', gridColumn: 'span 1' }} className="interests-card-full">
                <div 
                  style={{
                    fontSize: '1.75rem',
                    color: 'var(--accent)',
                    backgroundColor: 'var(--cert-badge-bg)',
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <FiCpu />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '700' }}>Interests</h4>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    <span 
                      style={{
                        padding: '0.35rem 0.85rem',
                        fontSize: '0.85rem',
                        borderRadius: '20px',
                        backgroundColor: 'rgba(255, 107, 107, 0.1)',
                        border: '1px solid rgba(255, 107, 107, 0.2)',
                        color: 'var(--accent)',
                        fontWeight: '600'
                      }}
                    >
                      Problem Solving
                    </span>
                    <span 
                      style={{
                        padding: '0.35rem 0.85rem',
                        fontSize: '0.85rem',
                        borderRadius: '20px',
                        backgroundColor: 'rgba(108, 99, 255, 0.1)',
                        border: '1px solid rgba(108, 99, 255, 0.2)',
                        color: 'var(--primary)',
                        fontWeight: '600'
                      }}
                    >
                      Software Development
                    </span>
                    <span 
                      style={{
                        padding: '0.35rem 0.85rem',
                        fontSize: '0.85rem',
                        borderRadius: '20px',
                        backgroundColor: 'rgba(0, 212, 255, 0.1)',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                        color: 'var(--secondary)',
                        fontWeight: '600'
                      }}
                    >
                      Web Technologies
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Row */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <StatCounter label="CGPA" target="8.0" suffix="" decimals={1} />
            <StatCounter label="Programming Languages" target="4" suffix="+" />
            <StatCounter label="Certifications" target="4" suffix="+" />
            <StatCounter label="Technologies" target="8" suffix="+" />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .interests-card-full {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
