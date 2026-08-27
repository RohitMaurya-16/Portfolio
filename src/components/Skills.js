import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  { label: 'Languages',    skills: ['Java', 'JavaScript', 'Python', 'C', 'SQL'] },
  { label: 'Frontend',     skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { label: 'Backend',      skills: ['Node.js', 'Express.js', 'Flask', 'REST APIs'] },
  { label: 'Databases',    skills: ['Supabase', 'PostgreSQL', 'MongoDB'] },
  { label: 'AI / ML',      skills: ['Machine Learning', 'Scikit-learn', 'OpenAI API'] },
  { label: 'Tools',        skills: ['Git', 'GitHub', 'VS Code', 'Google Colab'] },
  { label: 'CS Concepts',  skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'OS'] },
];

const Skills = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" style={{ padding: '80px 0' }}>
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '48px' }}
      >
        <span className="section-num">02. Skills</span>
        <h2 className="section-heading">What I work with</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        style={{
          display: 'flex',
          gap: '0',
          background: 'var(--navy)',
          border: '1px solid var(--navy-light)',
          borderRadius: '4px',
          overflow: 'hidden',
          minHeight: '260px',
        }}
      >
        {/* Tab list */}
        <div
          style={{
            borderRight: '1px solid var(--navy-light)',
            minWidth: '160px',
            flexShrink: 0,
          }}
          className="hidden sm:block"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              style={{
                display: 'block',
                width: '100%',
                padding: '14px 20px',
                textAlign: 'left',
                background: active === i ? 'var(--green-tint)' : 'transparent',
                border: 'none',
                borderLeft: active === i ? '2px solid var(--green)' : '2px solid transparent',
                color: active === i ? 'var(--green)' : 'var(--slate)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.78rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (active !== i) e.currentTarget.style.background = 'var(--navy-light)'; }}
              onMouseLeave={e => { if (active !== i) e.currentTarget.style.background = 'transparent'; }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mobile: horizontal scroll tabs */}
        <div className="sm:hidden w-full">
          <div style={{
            display: 'flex',
            overflowX: 'auto',
            borderBottom: '1px solid var(--navy-light)',
          }}>
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActive(i)}
                style={{
                  padding: '12px 16px',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: active === i ? '2px solid var(--green)' : '2px solid transparent',
                  color: active === i ? 'var(--green)' : 'var(--slate)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.72rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
          {/* Mobile panel */}
          <div style={{ padding: '24px 20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories[active].skills.map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop panel */}
        <div className="hidden sm:block" style={{ padding: '32px 40px', flex: 1 }}>
          <h3 style={{
            color: 'var(--slate-lightest)',
            fontSize: '1.1rem',
            fontWeight: 600,
            marginBottom: '24px',
          }}>
            {categories[active].label}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {categories[active].skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="tag"
                style={{ fontSize: '0.8rem', padding: '5px 14px' }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
