import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const itemV = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] } },
};

const Profile = () => {
  return (
    <section
      id="about"
      style={{ minHeight: 'calc(100vh - 140px)', display: 'flex', alignItems: 'center', paddingTop: '60px' }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
        width: '100%',
        flexWrap: 'wrap',
      }}>

        {/* ── Left: Text ── */}
        <motion.div
          variants={containerV}
          initial="hidden"
          animate="show"
          style={{ maxWidth: '580px', flex: '1 1 320px' }}
        >
          {/* Greeting */}
          <motion.p
            variants={itemV}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'var(--green)',
              fontSize: '1rem',
              marginBottom: '20px',
              letterSpacing: '0.03em',
            }}
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemV}
            style={{
              color: 'var(--slate-lightest)',
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '12px',
            }}
          >
            Rohit Maurya.
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            variants={itemV}
            style={{
              color: 'var(--slate)',
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '28px',
            }}
          >
            I build things for the web.
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={itemV}
            style={{
              color: 'var(--slate)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              maxWidth: '540px',
              marginBottom: '44px',
            }}
          >
            I'm a Computer Science student at{' '}
            <span style={{ color: 'var(--green)' }}>IILM University</span> specialising in AI &amp; ML,
            currently maintaining a{' '}
            <span style={{ color: 'var(--green)' }}>9.01 CGPA</span>.
            I build full-stack web applications, explore machine learning, and compete in hackathons
            at IITs and NITs across India.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={itemV}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <Link to="/projects" className="btn-green">
              Check out my work ↓
            </Link>
            <Link to="/contact" className="btn-green">
              Get in touch
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Right: Profile Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
          style={{ flex: '0 0 auto', position: 'relative' }}
        >
          {/* Decorative offset border */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            width: '280px',
            height: '280px',
            borderRadius: '6px',
            border: '2px solid var(--green)',
            zIndex: 0,
            opacity: 0.5,
          }} />

          {/* Photo */}
          <motion.div
            whileHover={{ scale: 1.03, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            style={{
              position: 'relative',
              zIndex: 1,
              width: '280px',
              height: '280px',
              borderRadius: '6px',
              overflow: 'hidden',
              boxShadow: '0 0 0 2px var(--green), 0 20px 60px -10px rgba(100,255,218,0.15)',
              cursor: 'pointer',
            }}
          >
            {/* Green tint overlay on hover */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(100,255,218,0.08)',
              zIndex: 2,
              transition: 'opacity 0.3s',
              borderRadius: '6px',
            }} />
            <img
              src="/profile.jpg"
              alt="Rohit Maurya"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'grayscale(20%) contrast(1.05)',
                transition: 'filter 0.4s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%) contrast(1)'; }}
              onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(20%) contrast(1.05)'; }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Profile;
