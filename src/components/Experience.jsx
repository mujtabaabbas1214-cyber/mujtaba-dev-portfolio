import React from 'react';
import { Briefcase, Calendar, Building, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Professional History</span>
          <h2 className="section-title">
            Industry <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development and frontend engineering in collaborative production environments.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          {profile.experience.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel"
              style={{
                padding: '2.5rem',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Accent Strip */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'var(--gradient-primary)',
                }}
              />

              {/* Header Info */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(56, 189, 248, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    <Briefcase size={26} />
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {exp.position}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                      <Building size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0.9rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <Calendar size={14} color="var(--accent-cyan)" />
                  <span>{exp.duration}</span>
                  <span className="badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10b981', marginLeft: '0.4rem' }}>
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Main Narrative */}
              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#cbd5e1',
                  lineHeight: '1.75',
                  marginBottom: '1.5rem',
                }}
              >
                {exp.description}
              </p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.8rem' }}>
                {exp.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.95rem', color: '#94a3b8' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack used */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.6rem',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Technologies Applied:
                </span>
                {exp.technologies.map((tech) => (
                  <span key={tech} className="badge badge-featured">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
