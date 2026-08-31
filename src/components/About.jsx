import React from 'react';
import { GraduationCap, Layout, Bot, Sparkles, Check, ArrowRight } from 'lucide-react';
import { profile } from '../data/profile';

const iconMap = {
  GraduationCap: GraduationCap,
  Layout: Layout,
  Bot: Bot,
  Sparkles: Sparkles,
};

export default function About() {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Passionate About Crafting <span className="gradient-text">Intelligent &amp; Modern Systems</span>
          </h2>
          <p className="section-subtitle">
            A snapshot of my engineering background, core technical focus, and creative drive.
          </p>
        </div>

        {/* Narrative Box */}
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            marginBottom: '3.5rem',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(11, 17, 32, 0.95) 100%)',
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="about-narrative-grid">
            <div>
              <p
                style={{
                  fontSize: '1.18rem',
                  lineHeight: '1.85',
                  color: '#e2e8f0',
                  fontWeight: 400,
                  marginBottom: '1.5rem',
                }}
              >
                {profile.aboutMeText}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <div className="badge badge-featured">
                  <Check size={14} /> Full-Stack &amp; Web Engineering
                </div>
                <div className="badge badge-featured">
                  <Check size={14} /> AI Integration &amp; Multi-Agent Systems
                </div>
                <div className="badge badge-featured">
                  <Check size={14} /> Relational Databases &amp; Secure Queries
                </div>
                <div className="badge badge-featured">
                  <Check size={14} /> Native Android Application Development
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Professional Highlight Cards */}
        <div className="grid-4">
          {profile.aboutHighlights.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || Sparkles;
            const accentColors = [
              { color: 'var(--accent-cyan)', bg: 'rgba(56, 189, 248, 0.1)', border: 'rgba(56, 189, 248, 0.3)' },
              { color: 'var(--accent-indigo)', bg: 'rgba(99, 102, 241, 0.1)', border: 'rgba(99, 102, 241, 0.3)' },
              { color: 'var(--accent-purple)', bg: 'rgba(139, 92, 246, 0.1)', border: 'rgba(139, 92, 246, 0.3)' },
              { color: 'var(--accent-emerald)', bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.3)' },
            ];
            const theme = accentColors[idx % accentColors.length];

            return (
              <div
                key={card.id}
                className="glass-panel"
                style={{
                  padding: '2rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all var(--transition-smooth)',
                }}
              >
                {/* Subtle top indicator bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: theme.color,
                  }}
                />

                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    backgroundColor: theme.bg,
                    border: `1px solid ${theme.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme.color,
                  }}
                >
                  <IconComponent size={26} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>
                    {card.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: theme.color,
                      fontWeight: 600,
                    }}
                  >
                    {card.tagline}
                  </span>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
