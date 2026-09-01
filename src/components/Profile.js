import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, animate } from 'framer-motion';

/* ── Variants ── */
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const itemV = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.645, 0.045, 0.355, 1] } },
};

/* ── Typewriter Hook ── */
function useTypewriter(text, speed = 55, startDelay = 800) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

/* ── Animated Counter Hook ── */
function useCounter(target, duration = 1.4, startDelay = 1600) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => {
      const controls = animate(0, target, {
        duration,
        ease: 'easeOut',
        onUpdate: (v) => setValue(parseFloat(v.toFixed(2))),
      });
      return () => controls.stop();
    }, startDelay);
    return () => clearTimeout(t);
  }, [inView, target, duration, startDelay]);

  return { value, ref };
}

/* ── Floating Particles ── */
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => i);
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {particles.map((i) => {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const delay = Math.random() * 6;
        const dur = Math.random() * 8 + 8;
        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              bottom: '-10px',
              left: `${x}%`,
              width: size,
              height: size,
              borderRadius: '50%',
              background: 'var(--green)',
              opacity: 0,
            }}
            animate={{
              y: [0, -(Math.random() * 300 + 200)],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: dur,
              delay,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        );
      })}
    </div>
  );
}

/* ── Animated Bio ── */
function AnimatedBio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const segments = [
    { text: "I'm a Computer Science student at ", highlight: false },
    { text: 'IILM University', highlight: true },
    { text: ' specialising in AI & ML, currently maintaining a ', highlight: false },
    { text: '9.01 CGPA', highlight: true },
    { text: '. I build full-stack web applications, explore machine learning, and compete in hackathons at IITs and IIITs across India.', highlight: false },
  ];

  return (
    <p
      ref={ref}
      style={{
        color: 'var(--slate)',
        fontSize: '1.05rem',
        lineHeight: 1.8,
        maxWidth: '540px',
        marginBottom: '32px',
      }}
    >
      {segments.map((seg, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 + i * 0.18, duration: 0.4, ease: 'easeOut' }}
          style={{
            display: 'inline',
            color: seg.highlight ? 'var(--green)' : 'var(--slate)',
          }}
        >
          {seg.text}
        </motion.span>
      ))}
    </p>
  );
}

/* ── Main Component ── */
const Profile = () => {
  const tagline = 'I build things for the web.';
  const { displayed, done } = useTypewriter(tagline, 52, 700);
  const { value: cgpa, ref: cgpaRef } = useCounter(9.01, 1.5, 1800);

  return (
    <section
      id="about"
      style={{ minHeight: 'calc(100vh - 140px)', display: 'flex', alignItems: 'center', paddingTop: '60px', position: 'relative' }}
    >
      {/* Background particles */}
      <Particles />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
        width: '100%',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* ── Left: Text ── */}
        <motion.div
          variants={containerV}
          initial="hidden"
          animate="show"
          style={{ maxWidth: '580px', flex: '1 1 320px' }}
        >
          {/* Greeting with blinking cursor */}
          <motion.p
            variants={itemV}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'var(--green)',
              fontSize: '1rem',
              marginBottom: '20px',
              letterSpacing: '0.03em',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            Hi, my name is
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 0.1 }}
              style={{ display: 'inline-block', width: '2px', height: '1em', background: 'var(--green)', marginLeft: '4px', borderRadius: '1px' }}
            />
          </motion.p>

          {/* Name — shimmer on hover */}
          <motion.h1
            variants={itemV}
            style={{
              color: 'var(--slate-lightest)',
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '12px',
              position: 'relative',
              cursor: 'default',
            }}
            whileHover={{ scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <span style={{ position: 'relative', display: 'inline-block' }}>
              Rohit Maurya.
              <motion.span
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, transparent 0%, rgba(100,255,218,0.25) 50%, transparent 100%)',
                  backgroundSize: '200% 100%',
                  borderRadius: '4px',
                  pointerEvents: 'none',
                }}
                animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
              />
            </span>
          </motion.h1>

          {/* Tagline — typewriter */}
          <motion.h2
            variants={itemV}
            style={{
              color: 'var(--slate)',
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '28px',
              minHeight: 'clamp(2.2rem, 5vw, 3.8rem)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {displayed}
            {/* Blinking cursor while typing */}
            <motion.span
              animate={{ opacity: done ? [1, 0, 1] : 1 }}
              transition={done ? { duration: 0.8, repeat: Infinity } : {}}
              style={{
                display: 'inline-block',
                width: '3px',
                height: '0.9em',
                background: 'var(--green)',
                marginLeft: '4px',
                borderRadius: '2px',
                verticalAlign: 'middle',
              }}
            />
          </motion.h2>

          {/* Bio — segment-by-segment reveal */}
          <motion.div variants={itemV}>
            <AnimatedBio />
          </motion.div>

          {/* CGPA counter badge */}
          <motion.div
            ref={cgpaRef}
            variants={itemV}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--green-tint)',
              border: '1px solid rgba(100,255,218,0.2)',
              borderRadius: '4px',
              padding: '8px 16px',
              marginBottom: '32px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.82rem',
            }}
          >
            <motion.span
              style={{ color: 'var(--green)', fontWeight: 700, fontSize: '1.1rem' }}
            >
              {cgpa.toFixed(2)}
            </motion.span>
            <span style={{ color: 'var(--slate)', fontSize: '0.78rem' }}>CGPA · IILM University</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ fontSize: '0.8rem' }}
            >
              🎓
            </motion.span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemV}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
              <Link to="/projects" className="btn-green">
                Check out my work ↓
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
              <Link to="/contact" className="btn-green">
                Get in touch
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Right: Profile Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.45, ease: [0.645, 0.045, 0.355, 1] }}
          style={{ flex: '0 0 auto', position: 'relative' }}
        >
          {/* Animated rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: '-12px', left: '-12px',
              width: '304px', height: '304px',
              borderRadius: '8px',
              border: '1.5px dashed rgba(100,255,218,0.25)',
              zIndex: 0,
            }}
          />

          {/* Decorative offset border */}
          <motion.div
            animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '16px', left: '16px',
              width: '280px', height: '280px',
              borderRadius: '6px',
              border: '2px solid var(--green)',
              zIndex: 0,
              opacity: 0.5,
            }}
          />

          {/* Photo */}
          <motion.div
            whileHover={{ scale: 1.04, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 180, damping: 14 }}
            style={{
              position: 'relative', zIndex: 1,
              width: '280px', height: '280px',
              borderRadius: '6px', overflow: 'hidden',
              boxShadow: '0 0 0 2px var(--green), 0 20px 60px -10px rgba(100,255,218,0.2)',
              cursor: 'pointer',
            }}
          >
            <div style={{
              position: 'absolute', inset: 0,
              background: 'rgba(100,255,218,0.08)',
              zIndex: 2, transition: 'opacity 0.3s', borderRadius: '6px',
            }} />
            <img
              src="/profile.jpg"
              alt="Rohit Maurya"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', display: 'block',
                filter: 'grayscale(20%) contrast(1.05)',
                transition: 'filter 0.4s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%) contrast(1)'; }}
              onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(20%) contrast(1.05)'; }}
            />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
            whileHover={{ scale: 1.08 }}
            style={{
              position: 'absolute',
              bottom: '-18px', right: '-18px',
              background: 'var(--navy)',
              border: '1px solid var(--green)',
              borderRadius: '6px',
              padding: '8px 14px',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 8px 32px rgba(100,255,218,0.15)',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)' }}
            />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: 'var(--green)',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}>
              Open to work
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Profile;
