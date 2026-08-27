import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaGithub, FaLinkedin, FaCheckCircle } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!form.name.trim())    errs.name    = 'Required';
    if (!form.email.trim())   errs.email   = 'Required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submit = e => {
    e.preventDefault();
    if (!validate()) return;
    const wa = `https://wa.me/919026888758?text=Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(wa, '_blank');
    setLoading(true);
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
      .finally(() => { setSubmitted(true); setLoading(false); });
  };

  const socials = [
    { href: 'https://github.com/RohitMaurya-16',              Icon: FaGithub,       label: 'GitHub' },
    { href: 'https://linkedin.com/in/rohit-maurya-08a52831a/',Icon: FaLinkedin,     label: 'LinkedIn' },
    { href: 'mailto:rohitmaurya1604@gmail.com',               Icon: HiOutlineMail,  label: 'Email' },
  ];

  return (
    <section id="contact" style={{ padding: '80px 0', maxWidth: '680px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '48px' }}
      >
        <span className="section-num">08. Contact</span>
        <h2 className="section-heading">Get In Touch</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        style={{ color: 'var(--slate)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '48px', maxWidth: '520px' }}
      >
        I'm currently open to new opportunities. Whether you have a question, a project idea, or just
        want to say hi — my inbox is always open!
      </motion.p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
            padding: '60px 32px', textAlign: 'center',
            border: '1px solid var(--navy-light)', borderRadius: '4px',
            background: 'var(--navy)',
          }}
        >
          <FaCheckCircle style={{ fontSize: '2.5rem', color: 'var(--green)' }} />
          <h3 style={{ color: 'var(--slate-lightest)', fontSize: '1.2rem', fontWeight: 600 }}>
            Message received!
          </h3>
          <p style={{ color: 'var(--slate)', fontSize: '0.9rem' }}>
            Thanks for reaching out. I'll get back to you shortly.
          </p>
          <button
            className="btn-green"
            style={{ marginTop: '8px', fontSize: '0.78rem' }}
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
          >
            Send another
          </button>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          onSubmit={submit}
          noValidate
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
               className="sm:grid-cols-2 grid-cols-1">
            {/* Name */}
            <div>
              <label htmlFor="ct-name" style={{
                display: 'block',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                color: 'var(--slate)',
                marginBottom: '8px',
                letterSpacing: '0.05em',
              }}>
                Name {errors.name && <span style={{ color: '#e06c75' }}>— {errors.name}</span>}
              </label>
              <input
                id="ct-name" name="name" type="text"
                value={form.name} onChange={change}
                placeholder="Rohit Maurya"
                className={`field ${errors.name ? 'error' : ''}`}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="ct-email" style={{
                display: 'block',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                color: 'var(--slate)',
                marginBottom: '8px',
                letterSpacing: '0.05em',
              }}>
                Email {errors.email && <span style={{ color: '#e06c75' }}>— {errors.email}</span>}
              </label>
              <input
                id="ct-email" name="email" type="email"
                value={form.email} onChange={change}
                placeholder="you@email.com"
                className={`field ${errors.email ? 'error' : ''}`}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="ct-msg" style={{
              display: 'block',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              color: 'var(--slate)',
              marginBottom: '8px',
              letterSpacing: '0.05em',
            }}>
              Message {errors.message && <span style={{ color: '#e06c75' }}>— {errors.message}</span>}
            </label>
            <textarea
              id="ct-msg" name="message" rows={6}
              value={form.message} onChange={change}
              placeholder="Tell me about your project or idea…"
              className={`field ${errors.message ? 'error' : ''}`}
              style={{ resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <button
              type="submit"
              disabled={loading}
              className="btn-green"
              style={{ opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              <FaPaperPlane style={{ fontSize: '0.8rem' }} />
              {loading ? 'Sending…' : 'Send Message'}
            </button>

            <div style={{ display: 'flex', gap: '16px' }}>
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ color: 'var(--slate)', fontSize: '1.15rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--slate)'}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </motion.form>
      )}
    </section>
  );
};

export default ContactForm;
