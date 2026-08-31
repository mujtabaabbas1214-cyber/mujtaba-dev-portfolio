import React, { useState } from 'react';
import { Mail, Send, CheckCircle, MessageSquare, User, AtSign, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate fast client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Let's Build <span className="gradient-text">Something Together.</span>
          </h2>
          <p className="section-subtitle">
            Have a project, internship opportunity, or collaboration in mind? Feel free to get in touch.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            maxWidth: '1080px',
            margin: '0 auto',
          }}
          className="contact-layout-grid"
        >
          {/* Left Column: Direct Reach & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                Contact Details
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>
                I am actively exploring new engineering challenges, frontend development roles, and AI project collaborations. Reach out via email or connect with me through my profiles below.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Email Item */}
                <a
                  href={profile.socialLinks.email}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(9, 13, 22, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all var(--transition-fast)',
                  }}
                  className="contact-info-link"
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(56, 189, 248, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                      Email Address
                    </div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {profile.socialLinks.emailDisplay}
                    </div>
                  </div>
                </a>

                {/* LinkedIn Item */}
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(9, 13, 22, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all var(--transition-fast)',
                  }}
                  className="contact-info-link"
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(99, 102, 241, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-indigo)',
                    }}
                  >
                    <LinkedinIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                      Professional Network
                    </div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      LinkedIn Profile
                    </div>
                  </div>
                  <ArrowUpRight size={16} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />
                </a>

                {/* GitHub Item */}
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(9, 13, 22, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all var(--transition-fast)',
                  }}
                  className="contact-info-link"
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                    }}
                  >
                    <GithubIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                      Code Repositories
                    </div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      GitHub Profile
                    </div>
                  </div>
                  <ArrowUpRight size={16} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Fill in the form below and I will respond to you promptly.
            </p>

            {isSubmitted ? (
              <div
                style={{
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <CheckCircle size={44} color="#10b981" />
                <h4 style={{ fontSize: '1.25rem', color: '#ffffff' }}>Message Sent Successfully!</h4>
                <p style={{ fontSize: '0.95rem', color: '#cbd5e1', maxWidth: '400px' }}>
                  Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-sm btn-outline"
                  style={{ marginTop: '0.5rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <User size={15} color="var(--accent-cyan)" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className="form-input"
                    aria-required="true"
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <AtSign size={15} color="var(--accent-cyan)" />
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className="form-input"
                    aria-required="true"
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MessageSquare size={15} color="var(--accent-cyan)" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share the details of your project, role, or inquiry..."
                    className="form-textarea"
                    aria-required="true"
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.95rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .contact-layout-grid {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
        .contact-info-link:hover {
          border-color: rgba(56, 189, 248, 0.4) !important;
          background-color: rgba(15, 23, 42, 0.95) !important;
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
