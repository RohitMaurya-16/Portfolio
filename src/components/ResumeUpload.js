import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

const ResumeUpload = () => {
  return (
    <section id="resume-upload" className="animate-fadeIn">
      <h2 className="text-3xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow">Resume</h2>
      <p className="mb-6 text-lg text-muted max-w-2xl">Download or view my latest resume to learn more about my experience, education, and skills. Updated regularly for your convenience.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-lg hover:from-accent hover:to-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent text-lg"
        >
          <FaDownload className="text-xl" /> Download Resume
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-surface-light dark:bg-surface-dark text-primary font-bold rounded-xl shadow-lg hover:bg-primary/10 hover:text-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary text-lg"
        >
          <FaEye className="text-xl" /> View Resume
        </a>
      </div>
    </section>
  );
};

export default ResumeUpload;
