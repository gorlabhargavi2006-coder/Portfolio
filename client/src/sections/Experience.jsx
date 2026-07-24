import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCode, FiDatabase, FiCpu, FiTrendingUp } from 'react-icons/fi';

const Experience = () => {
  const timelineData = [
    {
      id: 1,
      type: "education",
      role: "B.Tech in Computer Science Engineering",
      institution: "Student / Undergrad",
      period: "2023 - Present",
      description: "Currently pursuing a Bachelor of Technology degree in Computer Science Engineering (CSE). Focus on core software principles, programming abstractions, algorithms, and system engineering.",
      skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Computer Networks"],
      icon: FiBookOpen,
      side: "left"
    },
    {
      id: 2,
      type: "learning",
      role: "Web & Full Stack Development",
      institution: "Self-Paced / Interactive Programs",
      period: "Ongoing Focus",
      description: "Developing modern web layouts and backend services. Building dynamic user interfaces using React and connecting them to scalable server APIs.",
      skills: ["React Development", "Node.js & Express", "HTML5 / CSS3", "REST APIs"],
      icon: FiCode,
      side: "right"
    },
    {
      id: 3,
      type: "learning",
      role: "Database Management Systems",
      institution: "Academic & Projects Focus",
      period: "Ongoing Focus",
      description: "Designing and building relational and non-relational database architectures. Managing database integrations, schemas, joins, and queries.",
      skills: ["SQL / MySQL", "MongoDB Integration", "Schema Design", "CRUD Optimization"],
      icon: FiDatabase,
      side: "left"
    },
    {
      id: 4,
      type: "learning",
      role: "Problem Solving",
      institution: "Competitive Programming Platforms",
      period: "Ongoing Focus",
      description: "Strengthening analytical skills by solving coding challenges on platforms like LeetCode and GeeksforGeeks. Applying mathematical concepts to optimize algorithms.",
      skills: ["C Programming", "Java Core", "Python Scripts", "Algorithmic Logic"],
      icon: FiCpu,
      side: "right"
    }
  ];

  return (
    <section 
      id="experience" 
      style={{
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="bg-glow glow-accent" />

      <div className="container">
        <h2 className="section-title">My Journey</h2>

        <div className="timeline">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div 
                key={item.id}
                className={`timeline-container ${item.side}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: item.side === 'left' ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass hover-target"
                  style={{
                    padding: '2rem',
                    position: 'relative',
                    borderRadius: '20px',
                  }}
                >
                  {/* Category Pill */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                    }}
                  >
                    <span 
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        backgroundColor: 'var(--cert-badge-bg)',
                        color: 'var(--secondary)',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <Icon style={{ fontSize: '0.9rem' }} />
                      {item.type}
                    </span>
                    <span 
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        fontWeight: '600'
                      }}
                    >
                      {item.period}
                    </span>
                  </div>

                  {/* Header Title */}
                  <h3 
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {item.role}
                  </h3>
                  <h4 
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--primary)',
                      fontWeight: '600',
                      marginBottom: '1rem'
                    }}
                  >
                    {item.institution}
                  </h4>

                  {/* Body Paragraph */}
                  <p 
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Key Skills learned tags */}
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.8rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '12px',
                          backgroundColor: 'var(--glass-border)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--glass-border)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
