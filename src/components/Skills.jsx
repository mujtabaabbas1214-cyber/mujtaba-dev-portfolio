import React, { useState } from 'react';
import {
  Code,
  Layout,
  Database,
  Wrench,
  Sparkles,
  CheckCircle2,
  Terminal,
  Server,
  Layers,
  ShieldCheck,
  Binary,
  Cpu,
  Boxes,
  Network,
  GitPullRequest,
  Zap,
} from 'lucide-react';
import { profile } from '../data/profile';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Competencies', icon: Sparkles },
    { id: 'languages', name: 'Programming Languages', icon: Code },
    { id: 'frontend', name: 'Frontend Engineering', icon: Layout },
    { id: 'backend', name: 'Backend & Databases', icon: Database },
    { id: 'tools', name: 'Tools & Environments', icon: Wrench },
    { id: 'other', name: 'Core CS & Concepts', icon: Cpu },
  ];

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Technical Proficiency</span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, frameworks, databases, and engineering fundamentals.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.2rem',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(99, 102, 241, 0.25) 100%)'
                    : 'rgba(15, 23, 42, 0.6)',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: isActive ? 'rgba(56, 189, 248, 0.4)' : 'var(--border-subtle)',
                  boxShadow: isActive ? '0 0 15px rgba(56, 189, 248, 0.15)' : 'none',
                }}
              >
                <Icon size={16} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Visual Grid Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {/* Group 1: Programming Languages */}
          {(activeCategory === 'all' || activeCategory === 'languages') && (
            <div className="glass-panel" style={{ padding: '2rem 2.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  <Code size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Programming Languages</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Foundational &amp; application languages</p>
                </div>
              </div>

              <div className="grid-3">
                {profile.skills.programmingLanguages.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      padding: '1.1rem 1.3rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(9, 13, 22, 0.85)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all var(--transition-fast)',
                    }}
                    className="skill-badge-item"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-cyan)',
                          boxShadow: '0 0 8px var(--accent-cyan)',
                        }}
                      />
                      <span style={{ fontWeight: 600, fontSize: '1rem', color: '#f8fafc' }}>{skill.name}</span>
                    </div>
                    <span className="badge" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Group 2: Frontend Engineering */}
          {(activeCategory === 'all' || activeCategory === 'frontend') && (
            <div className="glass-panel" style={{ padding: '2rem 2.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(99, 102, 241, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-indigo)',
                  }}
                >
                  <Layout size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Frontend Engineering</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Responsive single-page architectures</p>
                </div>
              </div>

              <div className="grid-4">
                {profile.skills.frontend.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      padding: '1.1rem 1.3rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(9, 13, 22, 0.85)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all var(--transition-fast)',
                    }}
                    className="skill-badge-item"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-indigo)',
                          boxShadow: '0 0 8px var(--accent-indigo)',
                        }}
                      />
                      <span style={{ fontWeight: 600, fontSize: '1rem', color: '#f8fafc' }}>{skill.name}</span>
                    </div>
                    <span className="badge" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Group 3: Backend & Databases */}
          {(activeCategory === 'all' || activeCategory === 'backend') && (
            <div className="glass-panel" style={{ padding: '2rem 2.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-emerald)',
                  }}
                >
                  <Database size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Backend &amp; Databases</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>APIs, relational databases &amp; cloud storage</p>
                </div>
              </div>

              <div className="grid-3">
                {profile.skills.backendAndDatabases.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      padding: '1.1rem 1.3rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(9, 13, 22, 0.85)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all var(--transition-fast)',
                    }}
                    className="skill-badge-item"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-emerald)',
                          boxShadow: '0 0 8px var(--accent-emerald)',
                        }}
                      />
                      <span style={{ fontWeight: 600, fontSize: '1rem', color: '#f8fafc' }}>{skill.name}</span>
                    </div>
                    <span className="badge" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Group 4: Tools & Environments */}
          {(activeCategory === 'all' || activeCategory === 'tools') && (
            <div className="glass-panel" style={{ padding: '2rem 2.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(249, 115, 22, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-orange)',
                  }}
                >
                  <Wrench size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Tools &amp; Environments</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Version control, IDEs &amp; design platforms</p>
                </div>
              </div>

              <div className="grid-3">
                {profile.skills.tools.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      padding: '1.1rem 1.3rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(9, 13, 22, 0.85)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all var(--transition-fast)',
                    }}
                    className="skill-badge-item"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-orange)',
                          boxShadow: '0 0 8px var(--accent-orange)',
                        }}
                      />
                      <span style={{ fontWeight: 600, fontSize: '1rem', color: '#f8fafc' }}>{skill.name}</span>
                    </div>
                    <span className="badge" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Group 5: Other Core Computer Science Concepts */}
          {(activeCategory === 'all' || activeCategory === 'other') && (
            <div className="glass-panel" style={{ padding: '2rem 2.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-purple)',
                  }}
                >
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Computer Science &amp; Core Disciplines</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Theoretical foundation and software engineering principles</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                {profile.skills.other.map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      padding: '0.8rem 1.3rem',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: 'rgba(9, 13, 22, 0.85)',
                      border: '1px solid rgba(139, 92, 246, 0.25)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#f8fafc',
                      transition: 'all var(--transition-fast)',
                    }}
                    className="skill-badge-pill"
                  >
                    <CheckCircle2 size={16} color="var(--accent-purple)" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .skill-badge-item:hover {
          border-color: rgba(56, 189, 248, 0.4) !important;
          background-color: rgba(15, 23, 42, 0.95) !important;
          transform: translateY(-2px);
        }
        .skill-badge-pill:hover {
          border-color: var(--accent-purple) !important;
          background-color: rgba(139, 92, 246, 0.15) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
