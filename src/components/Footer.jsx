import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#04070d',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '4rem',
        paddingBottom: '3rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(99, 102, 241, 0.3) 100%)',
                  border: '1px solid rgba(56, 189, 248, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: 'var(--accent-cyan)',
                }}
              >
                {profile.logoText}
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {profile.name}
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '420px' }}>
              Computer Science Student | Front-End Developer | AI Enthusiast
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Social Icons */}
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-secondary"
              style={{ padding: '0.6rem', borderRadius: '50%', width: '40px', height: '40px' }}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-secondary"
              style={{ padding: '0.6rem', borderRadius: '50%', width: '40px', height: '40px' }}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={profile.socialLinks.email}
              className="btn btn-sm btn-secondary"
              style={{ padding: '0.6rem', borderRadius: '50%', width: '40px', height: '40px' }}
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="btn btn-sm btn-outline"
              style={{
                marginLeft: '0.5rem',
                borderRadius: 'var(--radius-pill)',
                padding: '0.55rem 1rem',
                fontSize: '0.82rem',
              }}
              aria-label="Back to Top"
            >
              <ArrowUp size={15} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            &copy; 2026 {profile.name}. All rights reserved.
          </div>
          <div>
            Crafted with React.js &amp; Vite
          </div>
        </div>
      </div>
    </footer>
  );
}
