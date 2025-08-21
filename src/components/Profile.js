import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <section id="profile" className="py-8 animate-fadeIn">
      <h2 className="text-4xl font-heading font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow">Profile</h2>
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.07, rotate: 2 }}
          whileTap={{ scale: 0.97, rotate: -2 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-primary blur-2xl opacity-60 animate-pulse z-0" />
          <img
            src="/profile.jpg"
            alt="Rohit Maurya"
            className="relative rounded-full w-40 h-40 object-cover shadow-neumorph border-4 border-primary z-10"
          />
        </motion.div>
        <motion.div
          className="flex-1 bg-white/70 dark:bg-card/80 shadow-frosted-glass backdrop-blur-glass rounded-3xl p-8 md:p-10 flex flex-col gap-6 border border-accent/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          whileHover={{ scale: 1.02, boxShadow: '0 12px 32px 0 rgba(6,182,212,0.18)' }}
        >
          <div>
            <h3 className="text-3xl font-heading font-bold text-primary mb-1">Rohit Maurya</h3>
            <p className="text-lg text-accent font-semibold mb-2">Computer Science Student</p>
            <p className="max-w-2xl text-text/80 leading-relaxed">
              Computer Science student specializing in AI/ML with a stellar 9.38 CGPA. Proficient in Python, Java, C, JavaScript, React.js, and Node.js. 
              Developed impactful projects including StreamSense (AI-powered movie site), Gas-less Transaction System, and Airline Management System. 
              Active participant in prestigious hackathons at IIIT Delhi & IIT Kanpur, with achievements including a college-level coding quiz victory. 
              Passionate about artificial intelligence, cybersecurity, and creating efficient technological solutions.
            </p>
          </div>
          <div className="flex gap-6 mt-2">
            <motion.a
              href="https://github.com/RohitMaurya-16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-primary transition text-xl"
              whileHover={{ scale: 1.2, color: '#06B6D4', textShadow: '0px 0px 8px #06B6D4' }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <FaGithub />
              <span className="hidden sm:inline text-base font-semibold">GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/rohit-maurya-08a52831a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-primary transition text-xl"
              whileHover={{ scale: 1.2, color: '#06B6D4', textShadow: '0px 0px 8px #06B6D4' }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span className="hidden sm:inline text-base font-semibold">LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Profile;
