import React, { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    org: 'Eduskills',
    role: 'AI-ML Virtual Intern',
    duration: 'Jan 2026 – Mar 2026',
    points: [
      'Built and evaluated Machine Learning models using Scikit-learn.',
      'Applied data preprocessing, feature engineering, and model evaluation techniques.',
      'Improved predictive performance through systematic feature selection.',
    ],
  },
  {
    org: 'Adobe India',
    role: 'Hackathon Participant',
    duration: '2025',
    points: [
      'Competed in the Adobe India Hackathon as part of Team Recursion Rebels.',
      'Addressed real-world product challenges with innovative technical solutions.',
    ],
  },
  {
    org: 'IIT Kanpur',
    role: 'Cybersecurity Hackathon Participant',
    duration: 'Feb 15–18, 2025',
    points: [
      'Competed in the Cybersecurity Solution Track.',
      'Designed and presented a solution addressing modern cybersecurity threats.',
    ],
  },
  {
    org: 'IIT Roorkee – GreenGuard',
    role: 'Hackathon Finalist',
    duration: '2025',
    points: [
      'Reached the finalist stage, placing in the top 5% of all participants.',
      'Presented an environment-tech solution for sustainability challenges.',
    ],
  },
  {
    org: 'IIIT Delhi – Hack 24',
    role: 'Hackathon Participant',
    duration: 'Aug 24, 2024',
    points: [
      'Secured 6th rank among all participating teams.',
      'Delivered a working prototype within 24 hours.',
    ],
  },
  {
    org: 'IIT Roorkee – Drone4S',
    role: 'Hackathon Participant',
    duration: 'Oct 12, 2024',
    points: [
      'Focused on drone and autonomous systems innovation.',
      'Collaborated in a cross-disciplinary team on embedded solutions.',
    ],
  },
];

const WorkExperience = () => {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" style={{ padding: '80px 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '48px' }}
      >
        <span className="section-num">06. Experience</span>
        <h2 className="section-heading">Where I've worked</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{
          display: 'flex',
          gap: '0',
          maxWidth: '700px',
        }}
      >
        {/* Tab sidebar */}
        <div
          style={{
            borderRight: '2px solid var(--navy-light)',
            minWidth: '160px',
            flexShrink: 0,
          }}
          className="hidden sm:block"
        >
          {experiences.map((e, i) => (
            <button
              key={e.org}
              onClick={() => setActive(i)}
              style={{
                display: 'block',
                width: '100%',
                padding: '12px 20px',
                textAlign: 'left',
                background: active === i ? 'var(--green-tint)' : 'transparent',
                border: 'none',
                borderRight: active === i ? '2px solid var(--green)' : '2px solid transparent',
                marginRight: '-2px',
                color: active === i ? 'var(--green)' : 'var(--slate)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.77rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {e.org.split('–')[0].trim()}
            </button>
          ))}
        </div>

        {/* Mobile: horizontal tabs */}
        <div className="sm:hidden w-full">
          <div style={{ display: 'flex', overflowX: 'auto', borderBottom: '2px solid var(--navy-light)' }}>
            {experiences.map((e, i) => (
              <button
                key={e.org}
                onClick={() => setActive(i)}
                style={{
                  padding: '10px 14px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: active === i ? '2px solid var(--green)' : '2px solid transparent',
                  marginBottom: '-2px',
                  color: active === i ? 'var(--green)' : 'var(--slate)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {e.org.split('–')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Panel */}
        <div
          key={active}
          style={{ padding: '8px 0 8px 32px', flex: 1 }}
          className="hidden sm:block"
        >
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 style={{
              color: 'var(--slate-lightest)',
              fontSize: '1.1rem',
              fontWeight: 600,
              marginBottom: '4px',
            }}>
              {exp.role}{' '}
              <span style={{ color: 'var(--green)' }}>@ {exp.org}</span>
            </h3>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'var(--slate)',
              fontSize: '0.75rem',
              marginBottom: '24px',
            }}>
              {exp.duration}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {exp.points.map((pt, i) => (
                <li key={i} style={{ display: 'flex', gap: '10px', color: 'var(--slate)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  <span style={{ color: 'var(--green)', marginTop: '2px', flexShrink: 0 }}>▹</span>
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile panel (outside flex) */}
      <div className="sm:hidden" style={{ marginTop: '16px', padding: '0 4px' }}>
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 style={{ color: 'var(--slate-lightest)', fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>
            {exp.role} <span style={{ color: 'var(--green)' }}>@ {exp.org}</span>
          </h3>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--slate)', fontSize: '0.72rem', marginBottom: '16px' }}>
            {exp.duration}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {exp.points.map((pt, i) => (
              <li key={i} style={{ display: 'flex', gap: '10px', color: 'var(--slate)', fontSize: '0.87rem', lineHeight: 1.65 }}>
                <span style={{ color: 'var(--green)', flexShrink: 0 }}>▹</span>
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
