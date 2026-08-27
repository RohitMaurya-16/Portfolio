import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';

const ResumeUpload = () => (
  <section id="resume" style={{ padding: '80px 0' }}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '48px' }}
    >
      <span className="section-num">07. Resume</span>
      <h2 className="section-heading">My Resume</h2>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      style={{ maxWidth: '560px' }}
    >
      <p style={{
        color: 'var(--slate)',
        fontSize: '1rem',
        lineHeight: 1.75,
        marginBottom: '36px',
      }}>
        My resume covers my education, projects, skills, and experience in AI/ML and full-stack development.
        It's updated regularly — feel free to download or view it online.
      </p>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <a href="/resume.pdf" download className="btn-green">
          <FaDownload style={{ fontSize: '0.85rem' }} />
          Download PDF
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-green"
        >
          <HiOutlineExternalLink style={{ fontSize: '1rem' }} />
          View Online
        </a>
      </div>

      {/* Preview frame */}
      <div style={{
        marginTop: '40px',
        border: '1px solid var(--navy-light)',
        borderRadius: '4px',
        overflow: 'hidden',
        background: 'var(--navy)',
        height: '520px',
      }}>
        <iframe
          src="/resume.pdf"
          title="Rohit Maurya Resume"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </motion.div>
  </section>
);

export default ResumeUpload;
