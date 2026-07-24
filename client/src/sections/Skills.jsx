import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaDatabase, 
  FaGitAlt, 
  FaGithub 
} from 'react-icons/fa';
import { SiC, SiMongodb } from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';

const SkillBar = ({ name, percentage, icon: Icon }) => {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.4rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
          {Icon && <Icon style={{ color: 'var(--secondary)', fontSize: '1.1rem' }} />}
          <span>{name}</span>
        </div>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{percentage}%</span>
      </div>
      <div 
        style={{
          height: '8px',
          backgroundColor: 'var(--glass-border)',
          borderRadius: '10px',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: 'var(--gradient-main)',
            borderRadius: '10px',
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", percentage: 80, icon: SiC },
        { name: "Java", percentage: 85, icon: FaJava },
        { name: "Python", percentage: 85, icon: FaPython },
        { name: "JavaScript", percentage: 80, icon: FaJs },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", percentage: 90, icon: FaHtml5 },
        { name: "CSS3", percentage: 90, icon: FaCss3Alt },
        { name: "React.js", percentage: 80, icon: FaReact },
      ]
    },
    {
      title: "Database Management",
      skills: [
        { name: "SQL", percentage: 85, icon: FaDatabase },
        { name: "MongoDB", percentage: 75, icon: SiMongodb },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", percentage: 85, icon: FaGitAlt },
        { name: "GitHub", percentage: 90, icon: FaGithub },
        { name: "VS Code", percentage: 90, icon: DiVisualstudio },
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section 
      id="skills" 
      style={{
        padding: '100px 0',
        position: 'relative',
      }}
    >
      <div className="bg-glow glow-primary" />
      
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="glass hover-target"
              style={{
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background gradient hint */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: 'var(--gradient-main)',
                }}
              />
              
              <h3 
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '0.5px',
                }}
              >
                {category.title}
              </h3>

              <div>
                {category.skills.map((skill, sIndex) => (
                  <SkillBar 
                    key={sIndex}
                    name={skill.name}
                    percentage={skill.percentage}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
