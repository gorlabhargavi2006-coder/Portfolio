import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink, FiDownload, FiX, FiCheckCircle } from 'react-icons/fi';

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  const certs = [
    {
      id: 1,
      title: "SQL Certification",
      issuer: "GeeksforGeeks",
      date: "January 2025",
      credentialId: "GFG-SQL-89327",
      color: "#4CAF50",
      skills: ["SQL Querying", "Database Design", "Joins", "Subqueries"]
    },
    {
      id: 2,
      title: "HTML Certification",
      issuer: "Infosys Springboard",
      date: "February 2025",
      credentialId: "INF-HTML-22104",
      color: "#007acc",
      skills: ["Semantic HTML", "SEO Best Practices", "Forms & Validation"]
    },
    {
      id: 3,
      title: "CSS Certification",
      issuer: "Infosys Springboard",
      date: "February 2025",
      credentialId: "INF-CSS-33291",
      color: "#E34F26",
      skills: ["CSS Flexbox", "CSS Grid", "Responsive Layouts", "Animations"]
    },
    {
      id: 4,
      title: "JavaScript Certification",
      issuer: "Infosys Springboard",
      date: "March 2025",
      credentialId: "INF-JS-90342",
      color: "#F7DF1E",
      skills: ["DOM Manipulation", "ES6+ Features", "Asynchronous JS", "APIs"]
    }
  ];

  // HTML5 Canvas Certificate Generator
  const downloadCertificate = (cert) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 700;
    const ctx = canvas.getContext('2d');

    // 1. Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 1000, 700);
    bgGrad.addColorStop(0, '#0b0b14');
    bgGrad.addColorStop(1, '#1e1e2f');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Fancy Outer Border
    ctx.strokeStyle = '#6C63FF';
    ctx.lineWidth = 15;
    ctx.strokeRect(25, 25, 950, 650);

    // 3. Inner Decorative Border
    ctx.strokeStyle = '#00D4FF';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, 920, 620);

    // Corner Accents
    ctx.fillStyle = '#FF6B6B';
    ctx.fillRect(20, 20, 30, 30);
    ctx.fillRect(950, 20, 30, 30);
    ctx.fillRect(20, 650, 30, 30);
    ctx.fillRect(950, 650, 30, 30);

    // 4. Header text
    ctx.fillStyle = '#00D4FF';
    ctx.font = 'bold 24px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("CERTIFICATE OF COMPLETION", 500, 120);

    ctx.fillStyle = '#9ca3af';
    ctx.font = '16px "Inter", sans-serif';
    ctx.fillText("THIS IS PROUDLY PRESENTED TO", 500, 180);

    // 5. Name (Recipient)
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px "Outfit", sans-serif';
    ctx.fillText("Gorla Bhargavi", 500, 250);

    // Line under Name
    const nameLineGrad = ctx.createLinearGradient(350, 0, 650, 0);
    nameLineGrad.addColorStop(0, 'rgba(108, 99, 255, 0)');
    nameLineGrad.addColorStop(0.5, '#6C63FF');
    nameLineGrad.addColorStop(1, 'rgba(108, 99, 255, 0)');
    ctx.fillStyle = nameLineGrad;
    ctx.fillRect(300, 275, 400, 3);

    // 6. Certificate Description
    ctx.fillStyle = '#f3f4f6';
    ctx.font = 'italic 18px "Inter", sans-serif';
    ctx.fillText(`For successfully completing the program requirements and demonstrating proficiency in`, 500, 330);
    
    ctx.fillStyle = '#00D4FF';
    ctx.font = 'bold 28px "Outfit", sans-serif';
    ctx.fillText(cert.title, 500, 380);

    ctx.fillStyle = '#9ca3af';
    ctx.font = '16px "Inter", sans-serif';
    ctx.fillText(`Offered by ${cert.issuer}`, 500, 420);

    // 7. Footer Details
    ctx.fillStyle = '#6b7280';
    ctx.font = '14px "Inter", sans-serif';
    ctx.fillText(`Issue Date: ${cert.date}`, 300, 520);
    ctx.fillText(`Credential ID: ${cert.credentialId}`, 700, 520);

    // Signature Line
    ctx.strokeStyle = '#6b7280';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(400, 570);
    ctx.lineTo(600, 570);
    ctx.stroke();

    // Signature Author
    ctx.fillStyle = '#f3f4f6';
    ctx.font = '15px "Inter", sans-serif';
    ctx.fillText("Authorized Verifier", 500, 595);

    // Seal shape (Gold Starburst)
    ctx.fillStyle = '#FF6B6B';
    ctx.beginPath();
    ctx.arc(500, 500, 25, 0, 2 * Math.PI);
    ctx.fill();

    // Trigger Download
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `Gorla_Bhargavi_${cert.title.replace(/\s+/g, '_')}.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <section 
      id="certifications" 
      style={{
        padding: '100px 0',
        position: 'relative',
      }}
    >
      <div className="bg-glow glow-secondary" />

      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}
        >
          {certs.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: cert.id * 0.1 }}
              className="glass hover-target"
              style={{
                padding: '2rem',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '280px',
                borderLeft: `5px solid ${cert.color}`
              }}
              onClick={() => setActiveCert(cert)}
            >
              <div>
                <div 
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <span 
                    style={{
                      fontSize: '0.85rem',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      backgroundColor: 'var(--cert-badge-bg)',
                      color: 'var(--secondary)',
                      fontWeight: '600'
                    }}
                  >
                    {cert.issuer}
                  </span>
                  <FiAward style={{ fontSize: '1.5rem', color: cert.color }} />
                </div>

                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  {cert.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Credential ID: {cert.credentialId}
                </p>
              </div>

              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto',
                }}
              >
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {cert.date}
                </span>
                <span 
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--secondary)',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                  className="hover-target"
                >
                  Preview <FiExternalLink />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preview Modal Overlay */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgba(5, 5, 10, 0.85)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                width: '100%',
                maxWidth: '750px',
                backgroundColor: 'var(--bg-color)',
                borderRadius: '24px',
                border: '1px solid var(--glass-border)',
                padding: '2.5rem',
                boxShadow: 'var(--glass-shadow)',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-primary)',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  zIndex: 10,
                }}
                className="hover-target"
              >
                <FiX />
              </button>

              {/* Certificate Preview Frame */}
              <div 
                style={{
                  border: '3px double var(--primary)',
                  padding: '2rem',
                  borderRadius: '16px',
                  textAlign: 'center',
                  backgroundColor: 'var(--glass-bg)',
                  marginBottom: '2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative glows in modal */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '-20%',
                    width: '150px',
                    height: '150px',
                    background: 'var(--card-glow)',
                    filter: 'blur(30px)',
                    zIndex: 0,
                  }}
                />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <FiAward style={{ fontSize: '3rem', color: activeCert.color, marginBottom: '1rem' }} />
                  <h4 
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1rem',
                      color: 'var(--secondary)',
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      marginBottom: '1rem',
                    }}
                  >
                    Certificate of Completion
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    THIS CERTIFICATE IS PROUDLY AWARDED TO
                  </p>
                  <h3 
                    style={{
                      fontSize: '2rem',
                      fontWeight: '800',
                      marginBottom: '1rem',
                      color: 'var(--text-primary)'
                    }}
                  >
                    Gorla Bhargavi
                  </h3>
                  <p 
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      maxWidth: '500px',
                      margin: '0 auto 1.5rem auto'
                    }}
                  >
                    for successfully demonstrating proficiency and passing all required examinations in 
                    <strong style={{ display: 'block', color: 'var(--text-primary)', fontSize: '1.2rem', margin: '0.5rem 0' }}>
                      {activeCert.title}
                    </strong>
                    issued online by <strong>{activeCert.issuer}</strong>.
                  </p>

                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      marginBottom: '2rem',
                    }}
                  >
                    {activeCert.skills.map((skill, index) => (
                      <span
                        key={index}
                        style={{
                          fontSize: '0.8rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '15px',
                          backgroundColor: 'var(--glass-border)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--glass-border)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      borderTop: '1px solid var(--glass-border)',
                      paddingTop: '1rem',
                    }}
                  >
                    <span>ID: {activeCert.credentialId}</span>
                    <span>Date: {activeCert.date}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '1rem',
                }}
              >
                <button
                  onClick={() => setActiveCert(null)}
                  className="btn btn-secondary hover-target"
                >
                  Close
                </button>
                <button
                  onClick={() => downloadCertificate(activeCert)}
                  className="btn btn-primary hover-target"
                >
                  Download PNG <FiDownload />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
