import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const featured = [
  {
    name: 'FormSathi',
    desc: 'Full-stack application management system for managing applications, profiles, documents, eligibility, and opportunities — built with a REST API-first architecture on React + Supabase.',
    tags: ['Node.js', 'Express.js', 'React.js', 'Supabase', 'REST APIs'],
    github: 'https://github.com/RohitMaurya-16/FormSathi',
    demo: 'https://formsathi-20260324210206.netlify.app/',
  },
  {
    name: 'Digital Mental Health Platform',
    desc: 'Full-stack digital mental health platform featuring an AI chat assistant, appointment scheduling, mood tracking with Chart.js analytics, and a social feed.',
    tags: ['Python', 'Flask', 'JavaScript', 'Chart.js'],
    github: 'https://github.com/RohitMaurya-16/Digital_Mental_Health',
    demo: 'https://comforting-boba-03f45e.netlify.app/',
  },
  {
    name: 'StreamSense',
    desc: 'AI-powered movie recommendation system that suggests titles based on user preferences using the Watchmode API. Optimised API call latency by 40% with smart caching.',
    tags: ['React.js', 'Node.js', 'OpenAI API', 'Watchmode API'],
    github: 'https://github.com/RohitMaurya-16/Stream',
    demo: 'https://stream-rosy-nine.vercel.app/',
  },
];

const other = [
  {
    name: 'NoteHive',
    desc: 'Full-stack note management platform with clean UI for creating and organising notes.',
    tags: ['React.js', 'Node.js', 'Database'],
    github: 'https://github.com/RohitMaurya-16/NoteHive',
  },
  {
    name: 'ProjectCloud',
    desc: 'Open-source platform connecting students and institutions for project sharing and event discovery.',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/RohitMaurya-16/projectcloud',
  },
  {
    name: 'E-Commerce Website',
    desc: 'Django-powered e-commerce site with product browsing, cart, auth, profile, reviews, and search.',
    tags: ['Django', 'Python', 'SQLite'],
    github: 'https://github.com/RohitMaurya-16/E-Commerce-Websites',
  },
  {
    name: 'Airline Management System',
    desc: 'Real-time flight booking and scheduling system built in Java + SQL with reliable transaction management.',
    tags: ['Java', 'SQL'],
    github: 'https://github.com/RohitMaurya-16/AirLineSystem',
  },
];

const FeaturedCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr',
        marginBottom: '80px',
      }}
      className="md:grid-cols-12"
    >
      {/* Content */}
      <div
        style={{
          padding: '28px',
          background: 'var(--navy)',
          border: '1px solid var(--navy-light)',
          borderRadius: '4px',
        }}
        className={`md:col-span-7 ${isEven ? 'md:col-start-1' : 'md:col-start-6'}`}
      >
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: 'var(--green)',
          fontSize: '0.75rem',
          marginBottom: '8px',
          letterSpacing: '0.05em',
        }}>
          Featured Project
        </p>
        <h3 style={{
          color: 'var(--slate-lightest)',
          fontSize: '1.3rem',
          fontWeight: 700,
          marginBottom: '16px',
          letterSpacing: '-0.01em',
        }}>
          {project.name}
        </h3>
        <p style={{
          color: 'var(--slate)',
          fontSize: '0.92rem',
          lineHeight: 1.75,
          marginBottom: '20px',
        }}>
          {project.desc}
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: 'var(--slate-lightest)', fontSize: '1.15rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--slate-lightest)'}
            >
              <FaGithub />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              style={{ color: 'var(--slate-lightest)', fontSize: '1.15rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--slate-lightest)'}
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const OtherCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="panel"
    style={{ padding: '28px', display: 'flex', flexDirection: 'column', height: '100%' }}
  >
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '28px',
    }}>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
      <div style={{ display: 'flex', gap: '12px' }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--slate)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--slate)'}
          >
            <FaGithub style={{ fontSize: '1.15rem' }} />
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--slate)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--slate)'}
          >
            <FaExternalLinkAlt style={{ fontSize: '1rem' }} />
          </a>
        )}
      </div>
    </div>
    <h3 style={{
      color: 'var(--slate-lightest)',
      fontSize: '1rem',
      fontWeight: 600,
      marginBottom: '10px',
      letterSpacing: '-0.01em',
    }}>
      {project.name}
    </h3>
    <p style={{
      color: 'var(--slate)',
      fontSize: '0.85rem',
      lineHeight: 1.7,
      flex: 1,
      marginBottom: '20px',
    }}>
      {project.desc}
    </p>
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {project.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.68rem' }}>{t}</span>)}
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" style={{ padding: '80px 0' }}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '60px' }}
    >
      <span className="section-num">04. Projects</span>
      <h2 className="section-heading">Things I've built</h2>
    </motion.div>

    {/* Featured */}
    <div>
      {featured.map((p, i) => <FeaturedCard key={p.name} project={p} index={i} />)}
    </div>

    {/* Other noteworthy */}
    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      style={{
        color: 'var(--slate-lightest)',
        textAlign: 'center',
        fontSize: '1.3rem',
        fontWeight: 600,
        marginBottom: '12px',
      }}
    >
      Other Noteworthy Projects
    </motion.h3>
    <p style={{ textAlign: 'center', color: 'var(--green)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', marginBottom: '40px' }}>
      view the archive
    </p>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '16px',
    }}>
      {other.map((p, i) => <OtherCard key={p.name} project={p} index={i} />)}
    </div>
  </section>
);

export default Projects;
