import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaTimes } from 'react-icons/fa';


const certs = [
  { title: 'Machine Learning I',        issuer: 'Columbia+',           year: '2025' },
  { title: 'Intro to Deep Learning',    issuer: 'Infosys Springboard', year: '2025' },
  { title: 'Database Design',           issuer: 'Infosys Springboard', year: '2024' },
  { title: 'Programming in C',          issuer: 'Infosys Springboard', year: '2024' },
  { title: 'Hack 24',                   issuer: 'IIIT Delhi',          year: '2024' },
  { title: 'Hack IIT Kanpur',           issuer: 'IIT Kanpur',          year: '2024' },
];

const gallery = [
  { title: 'Hack24 Certificate',           image: '/hack24.png',                     dl: 'hack24.png' },
  { title: 'IIT Kanpur Certificate',       image: '/ceritificate_iit.png',           dl: 'iit-kanpur.png' },
  { title: 'Adobe Hackathon Certificate',  image: '/adobe_cirtificate_page-0001.jpg',dl: 'adobe.jpg' },
  {
    title: 'Machine Learning I – Columbia+',
    image: 'https://pdf.ms.credential.net/v2/certificate/image?env=production&credential=s3v59g8u&variant=medium',
    dl: 'ml-columbia.png',
  },
  { title: 'Deep Learning – Infosys',      image: '/Infosys_deep_learning_page.jpg', dl: 'deep-learning.jpg' },
  { title: 'Database Design – Infosys',    image: '/Infosys_dbms.jpg',               dl: 'dbms.jpg' },
  { title: 'Programming in C – Infosys',   image: '/infosys_c.jpg',                  dl: 'c-programming.jpg' },
];

const Certifications = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="certifications" style={{ padding: '80px 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '48px' }}
      >
        <span className="section-num">05. Certifications</span>
        <h2 className="section-heading">Credentials</h2>
      </motion.div>

      {/* List */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1px',
          background: 'var(--navy-light)',
          border: '1px solid var(--navy-light)',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '60px',
          maxWidth: '860px',
        }}
      >
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.06 }}
            style={{
              background: 'var(--navy)',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'var(--green)',
              fontSize: '0.7rem',
              opacity: 0.7,
            }}>
              {c.year}
            </p>
            <h3 style={{ color: 'var(--slate-lightest)', fontSize: '0.95rem', fontWeight: 600 }}>
              {c.title}
            </h3>
            <p style={{ color: 'var(--slate)', fontSize: '0.82rem' }}>{c.issuer}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Gallery heading */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          color: 'var(--slate-lightest)',
          fontSize: '1.1rem',
          fontWeight: 600,
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        Certificate Gallery
        <span style={{ height: '1px', flex: 1, maxWidth: '120px', background: 'var(--navy-light)', display: 'block' }} />
      </motion.h3>

      {/* Gallery grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '16px',
      }}>
        {gallery.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="cert-img-card"
            style={{ cursor: 'pointer' }}
            onClick={() => setLightbox(g)}
          >
            <div style={{ position: 'relative', paddingTop: '66%', background: 'var(--navy-darkest)' }}>
              <img
                src={g.image}
                alt={g.title}
                style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  objectFit: 'contain', padding: '8px',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <div style={{ padding: '10px 14px' }}>
              <p style={{ color: 'var(--slate-light)', fontSize: '0.78rem', fontWeight: 500 }}>{g.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(2,12,27,0.92)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '16px',
              backdropFilter: 'blur(4px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: 'var(--navy)',
                border: '1px solid var(--navy-light)',
                borderRadius: '4px',
                maxWidth: '720px',
                width: '100%',
                overflow: 'hidden',
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 20px',
                borderBottom: '1px solid var(--navy-light)',
              }}>
                <h4 style={{ color: 'var(--slate-lightest)', fontSize: '0.9rem', fontWeight: 600 }}>
                  {lightbox.title}
                </h4>
                <button
                  onClick={() => setLightbox(null)}
                  style={{ background: 'none', border: 'none', color: 'var(--slate)', cursor: 'pointer', fontSize: '1rem', display: 'flex' }}
                >
                  <FaTimes />
                </button>
              </div>
              <div style={{ background: 'var(--navy-darkest)', padding: '12px' }}>
                <img src={lightbox.image} alt={lightbox.title}
                     style={{ width: '100%', height: 'auto', maxHeight: '65vh', objectFit: 'contain', borderRadius: '3px' }} />
              </div>
              <div style={{ padding: '14px 20px', display: 'flex', justifyContent: 'flex-end' }}>
                <a href={lightbox.image} download={lightbox.dl} className="btn-green" style={{ fontSize: '0.75rem', padding: '10px 20px' }}>
                  <FaDownload /> Download
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
