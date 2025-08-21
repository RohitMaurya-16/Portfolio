import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import WorkExperiencePage from './pages/WorkExperiencePage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import AIChatbotPage from './pages/AIChatbotPage';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/skills', label: 'Skills' },
  { to: '/education', label: 'Education' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/work', label: 'Work' },
  { to: '/resume', label: 'Resume' },
  { to: '/chatbot', label: 'AI' },
  { to: '/contact', label: 'Contact' },
];

function AnimatedNav() {
  const location = useLocation();
  return (
    <nav className="hidden md:flex gap-6 text-lg font-medium">
      {navLinks.map((link) => (
        <motion.div
          key={link.to}
          whileHover={{ scale: 1.15, y: -2, textShadow: '0px 0px 8px #6366F1' }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={link.to}
            className={`relative transition-colors duration-300 px-2 py-1 rounded-lg
              ${location.pathname === link.to ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' : 'hover:bg-primary/10 hover:text-primary'}`}
          >
            {link.label}
            {location.pathname === link.to && (
              <motion.span
                layoutId="nav-underline"
                className="absolute left-0 right-0 -bottom-1 h-1 rounded bg-gradient-to-r from-primary to-accent"
                style={{ zIndex: 1 }}
              />
            )}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-background-light via-surface-light to-accent-light dark:from-background-dark dark:via-surface-dark dark:to-primary-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="p-4 md:p-6 sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b-2 border-gradient-to-r from-primary to-accent shadow-xl">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src="/profile.jpg" alt="Avatar" className="w-14 h-14 rounded-full border-4 border-accent shadow-lg" />
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg">Rohit Maurya</h1>
            </div>
            <AnimatedNav />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-lg hover:from-accent hover:to-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Toggle dark mode"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </header>

        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/work" element={<WorkExperiencePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/chatbot" element={<AIChatbotPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="text-center p-6 bg-gradient-to-r from-background-light via-surface-light to-accent-light dark:from-background-dark dark:via-surface-dark dark:to-primary-dark border-t border-primary/30 shadow-inner">
          <p className="text-lg font-medium tracking-wide">© 2024 Rohit Maurya</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
