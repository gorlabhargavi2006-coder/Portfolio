import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiLayers, FiCheck } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass hover-target"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        overflow: 'hidden',
        height: '100%',
        position: 'relative',
      }}
    >
      {/* Visual Glowing Cap */}
      <div 
        style={{
          height: '6px',
          width: '100%',
          background: `linear-gradient(90deg, ${project.color1}, ${project.color2})`,
        }}
      />

      <div 
        style={{
          padding: '2.25rem',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        {/* Icon & Title */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}
        >
          <div 
            style={{
              fontSize: '1.25rem',
              color: project.color1,
              backgroundColor: 'var(--cert-badge-bg)',
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FiLayers />
          </div>
          <h3 
            style={{
              fontSize: '1.4rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p 
          style={{
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            lineHeight: 1.6,
          }}
        >
          {project.description}
        </p>

        {/* Features Checklist */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '0.75rem',
              fontWeight: '700',
            }}
          >
            Key Features
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {project.features.map((feature, idx) => (
              <li 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.4rem',
                }}
              >
                <FiCheck style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2rem',
            marginTop: 'auto',
          }}
        >
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.8rem',
                padding: '0.3rem 0.75rem',
                borderRadius: '20px',
                backgroundColor: 'var(--glass-border)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-secondary)',
                fontWeight: '500',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Card Links */}
        <div 
          style={{
            display: 'flex',
            gap: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--glass-border)',
          }}
        >
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hover-target"
            style={{
              padding: '0.6rem 1.25rem',
              fontSize: '0.9rem',
              flexGrow: 1,
              justifyContent: 'center',
            }}
          >
            Live Demo <FiExternalLink />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary hover-target"
            style={{
              padding: '0.6rem 1.25rem',
              fontSize: '0.9rem',
              flexGrow: 1,
              justifyContent: 'center',
            }}
          >
            GitHub <FiGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "A premium, fully responsive personal portfolio showcasing projects, skills, and qualifications. Built with glassmorphism design, dark/light mode, smooth animations, and SEO-optimized structure.",
      features: [
        "Responsive Design",
        "Modern Glassmorphic UI",
        "Validated Contact Form",
        "SEO Optimized"
      ],
      tags: ["React", "HTML5", "CSS3", "JavaScript"],
      color1: "#6C63FF",
      color2: "#00D4FF",
      demoLink: "#home",
      githubLink: "https://github.com/gorlabhargavi2006-coder"
    },
    {
      title: "LeadFlow CRM",
      description: "A full-stack customer relationship management application for tracking leads, managing sales pipelines, and organizing client interactions with an intuitive dashboard interface.",
      features: [
        "Lead Management",
        "Sales Pipeline Tracking",
        "Dashboard Analytics",
        "Contact & Follow-up System"
      ],
      tags: ["React", "Node.js", "Express", "MongoDB"],
      color1: "#00D4FF",
      color2: "#FF6B6B",
      demoLink: "https://github.com/gorlabhargavi2006-coder",
      githubLink: "https://github.com/gorlabhargavi2006-coder"
    },
    {
      title: "Local Business Directory",
      description: "A web platform connecting users with local businesses through searchable listings, category filters, and detailed business profiles with contact information and location details.",
      features: [
        "Business Listings",
        "Search & Filter",
        "Category Navigation",
        "Responsive Design"
      ],
      tags: ["React", "Node.js", "MongoDB", "REST API"],
      color1: "#FF6B6B",
      color2: "#6C63FF",
      demoLink: "https://github.com/gorlabhargavi2006-coder",
      githubLink: "https://github.com/gorlabhargavi2006-coder"
    }
  ];

  return (
    <section 
      id="projects" 
      style={{
        padding: '100px 0',
        position: 'relative',
      }}
    >
      <div className="bg-glow glow-primary" />

      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
          }}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
