import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const educationList = [
  {
    institution: 'IILM University',
    location: 'Greater Noida, Uttar Pradesh',
    degree: "B.Tech – Computer Science (AI & ML)",
    year: '2023 – 2027 (Expected)',
    score: '9.38 CGPA',
    current: true,
  },
  {
    institution: 'New Public Inter College',
    location: 'Lucknow, Uttar Pradesh',
    degree: 'Intermediate – 12th Grade',
    year: '2020 – 2022',
    score: '78%',
  },
  {
    institution: 'New Public Inter College',
    location: 'Lucknow, Uttar Pradesh',
    degree: 'High School – 10th Grade',
    year: '2018 – 2020',
    score: '90%',
  },
];

const Education = () => (
  <section id="education" style={{ padding: '80px 0' }}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '48px' }}
    >
      <span className="section-num">03. Education</span>
      <h2 className="section-heading">Where I studied</h2>
    </motion.div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '780px' }}>
      {educationList.map((edu, i) => (
        <motion.div
          key={`${edu.institution}-${edu.degree}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          className="panel"
          style={{ padding: '24px 28px' }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                <h3 style={{
                  color: 'var(--slate-lightest)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                }}>
                  {edu.institution}
                </h3>
                {edu.current && (
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    color: 'var(--green)',
                    border: '1px solid var(--green)',
                    padding: '1px 7px',
                    borderRadius: '3px',
                  }}>
                    Current
                  </span>
                )}
              </div>
              <p style={{ color: 'var(--slate-light)', fontSize: '0.9rem', marginBottom: '8px' }}>
                {edu.degree}
              </p>
              <p style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: 'var(--slate)',
                fontSize: '0.8rem',
              }}>
                <FaMapMarkerAlt style={{ color: 'var(--green)', fontSize: '0.75rem' }} />
                {edu.location}
              </p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: 'var(--green)',
                fontSize: '1.05rem',
                fontWeight: 500,
                marginBottom: '4px',
              }}>
                {edu.score}
              </p>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: 'var(--slate)',
                fontSize: '0.75rem',
              }}>
                {edu.year}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Education;
