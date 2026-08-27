import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import HomePage          from './pages/HomePage';
import SkillsPage        from './pages/SkillsPage';
import EducationPage     from './pages/EducationPage';
import ProjectsPage      from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import WorkExperiencePage from './pages/WorkExperiencePage';
import ContactPage       from './pages/ContactPage';
import ResumePage        from './pages/ResumePage';
import AIChatbotPage     from './pages/AIChatbotPage';

/* ────────────────────────────────── */
/*  NAV LINKS                         */
/* ────────────────────────────────── */
const navLinks = [
  { to: '/',              label: 'About',       num: '01.' },
  { to: '/skills',        label: 'Skills',      num: '02.' },
  { to: '/education',     label: 'Education',   num: '03.' },
  { to: '/projects',      label: 'Projects',    num: '04.' },
  { to: '/certifications',label: 'Certs',       num: '05.' },
  { to: '/work',          label: 'Experience',  num: '06.' },
  { to: '/resume',        label: 'Resume',      num: '07.' },
  { to: '/contact',       label: 'Contact',     num: '08.' },
  { to: '/chatbot',       label: 'AI',          num: '09.' },
];

/* ── Nav component ── */
function Nav() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location.pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const headerStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 clamp(16px, 4vw, 48px)',
    transition: 'background 0.3s ease, box-shadow 0.3s ease',
    background: scrolled ? 'rgba(10,25,47,0.97)' : 'transparent',
    boxShadow: scrolled ? '0 1px 0 rgba(100,255,218,0.06), 0 4px 30px rgba(2,12,27,0.5)' : 'none',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
  };

  return (
    <>
      <header style={headerStyle}>

        {/* ── Logo ── */}
        <Link to="/" aria-label="Home" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.3rem',
            fontWeight: 700,
            color: 'var(--green)',
            letterSpacing: '-0.04em',
          }}>
            &lt;RM /&gt;
          </span>
        </Link>

        <div style={{ flex: 1 }} />

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '2px', flexWrap: 'nowrap' }}>
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: '3px',
                  padding: '7px 10px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  color: active ? 'var(--green)' : 'var(--slate-light)',
                  background: active ? 'var(--green-tint)' : 'transparent',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: active ? 500 : 400,
                  transition: 'color 0.2s, background 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  if (!active) { e.currentTarget.style.color = 'var(--green)'; e.currentTarget.style.background = 'var(--green-tint)'; }
                }}
                onMouseLeave={e => {
                  if (!active) { e.currentTarget.style.color = 'var(--slate-light)'; e.currentTarget.style.background = 'transparent'; }
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: 'var(--green)', opacity: 0.7 }}>
                  {link.num}
                </span>
                {link.label}
              </Link>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green"
            style={{ marginLeft: '12px', padding: '8px 16px', fontSize: '0.74rem' }}
          >
            Resume
          </a>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{
            alignItems: 'center', justifyContent: 'center',
            background: 'none',
            border: '1px solid rgba(100,255,218,0.25)',
            borderRadius: '4px',
            color: 'var(--green)',
            cursor: 'pointer',
            padding: '7px',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.background = 'var(--green-tint)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(100,255,218,0.25)'; e.currentTarget.style.background = 'none'; }}
        >
          {/* Animated hamburger lines */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 98,
                background: 'rgba(2,12,27,0.75)',
                backdropFilter: 'blur(4px)',
              }}
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.645, 0.045, 0.355, 1] }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: 'min(75vw, 300px)',
                zIndex: 99,
                background: 'var(--navy)',
                borderLeft: '1px solid var(--navy-light)',
                display: 'flex', flexDirection: 'column',
                boxShadow: '-20px 0 60px rgba(2,12,27,0.7)',
              }}
            >
              {/* Drawer header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0 24px',
                height: '70px',
                borderBottom: '1px solid var(--navy-light)',
                flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: 'var(--green)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                }}>
                  &lt;RM /&gt;
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'none',
                    border: '1px solid rgba(100,255,218,0.2)',
                    borderRadius: '4px',
                    color: 'var(--green)',
                    cursor: 'pointer',
                    padding: '6px',
                    transition: 'background 0.2s',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Nav links — scroll if needed */}
              <nav style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
                {navLinks.map((link, i) => {
                  const active = location.pathname === link.to;
                  return (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 + 0.05, duration: 0.22 }}
                    >
                      <Link
                        to={link.to}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          padding: '13px 28px',
                          textDecoration: 'none',
                          color: active ? 'var(--green)' : 'var(--slate-light)',
                          background: active ? 'var(--green-tint)' : 'transparent',
                          borderLeft: active ? '2px solid var(--green)' : '2px solid transparent',
                          fontSize: '0.95rem',
                          fontWeight: active ? 500 : 400,
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <span style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.62rem',
                          color: 'var(--green)',
                          opacity: 0.6,
                          width: '22px',
                          flexShrink: 0,
                        }}>
                          {link.num}
                        </span>
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer footer */}
              <div style={{ padding: '20px 28px 36px', borderTop: '1px solid var(--navy-light)', flexShrink: 0 }}>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem' }}
                >
                  View Resume ↗
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Social sidebar ── */
function SocialSidebar() {
  return (
    <div className="social-sidebar">
      {[
        { href: 'https://github.com/RohitMaurya-16', Icon: FaGithub, label: 'GitHub' },
        { href: 'https://linkedin.com/in/rohit-maurya-08a52831a/', Icon: FaLinkedin, label: 'LinkedIn' },
        { href: 'mailto:rohitmaurya1604@gmail.com', Icon: HiOutlineMail, label: 'Email' },
      ].map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          style={{
            color: 'var(--slate)',
            fontSize: '1.2rem',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--green)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--slate)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

/* ── App ── */
function App() {
  return (
    <Router>
      <Nav />
      <SocialSidebar />

      <main style={{ paddingTop: '70px', maxWidth: '1100px', margin: '0 auto', padding: '70px 24px 120px' }}>
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/skills"         element={<SkillsPage />} />
          <Route path="/education"      element={<EducationPage />} />
          <Route path="/projects"       element={<ProjectsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/work"           element={<WorkExperiencePage />} />
          <Route path="/resume"         element={<ResumePage />} />
          <Route path="/chatbot"        element={<AIChatbotPage />} />
          <Route path="/contact"        element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '24px', borderTop: '1px solid var(--navy-light)' }}>
        <p style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.72rem',
          color: 'var(--slate)',
          letterSpacing: '0.05em',
        }}>
          Designed &amp; Built by{' '}
          <a href="https://github.com/RohitMaurya-16" target="_blank" rel="noopener noreferrer"
             style={{ color: 'var(--green)' }}>
            Rohit Maurya
          </a>
        </p>
      </footer>
    </Router>
  );
}

export default App;
