import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import { profile } from '../data/profile';

export default function Education() {
  return (
    <section id="education" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal computer science education focusing on algorithmic thinking, system design, and software engineering.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          {profile.education.map((edu) => (
            <div
              key={edu.id}
              className="glass-panel"
              style={{
                padding: '2.5rem',
                border: '1px solid rgba(99, 102, 241, 0.25)',
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
                  background: 'var(--gradient-accent)',
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
                      backgroundColor: 'rgba(99, 102, 241, 0.15)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-indigo)',
                    }}
                  >
                    <GraduationCap size={28} />
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {edu.degree}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#a5b4fc', fontWeight: 600 }}>
                      <Award size={16} />
                      <span>{edu.institution}</span>
                      <span style={{ color: 'var(--text-muted)' }}>•</span>
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                        <MapPin size={13} /> {edu.location}
                      </span>
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
                  <Calendar size={14} color="var(--accent-indigo)" />
                  <span>{edu.timeline}</span>
                  <span className="badge" style={{ backgroundColor: 'rgba(56, 189, 248, 0.15)', color: 'var(--accent-cyan)', marginLeft: '0.4rem' }}>
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#cbd5e1',
                  lineHeight: '1.75',
                  marginBottom: '1.5rem',
                }}
              >
                {edu.description}
              </p>

              {/* Core Academic Disciplines */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '0.88rem', fontWeight: 600, color: '#f8fafc' }}>
                  <BookOpen size={16} color="var(--accent-indigo)" />
                  <span>Key Coursework &amp; Subject Areas</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {edu.keyCoursework.map((course) => (
                    <span key={course} className="badge">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
