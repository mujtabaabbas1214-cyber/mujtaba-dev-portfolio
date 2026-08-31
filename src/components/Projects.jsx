import React, { useState } from 'react';
import { Sparkles, Layers, Cpu, Smartphone, Database } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects (6)', icon: Layers },
    { id: 'ai', label: 'AI & Full-Stack', icon: Sparkles },
    { id: 'mobile', label: 'Android Mobile', icon: Smartphone },
    { id: 'design', label: 'UI/UX & HCI', icon: Cpu },
    { id: 'database', label: 'Databases & Systems', icon: Database },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'ai') return project.category.includes('AI');
    if (filter === 'mobile') return project.category.includes('Android');
    if (filter === 'design') return project.category.includes('UI/UX');
    if (filter === 'database') return project.category.includes('Database') || project.category.includes('Python');
    return true;
  });

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Featured Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Engineering Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore my flagship software implementations ranging from autonomous AI agents and web platforms to native Android apps and database systems.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center',
            marginBottom: '3.5rem',
          }}
        >
          {filterOptions.map((opt) => {
            const Icon = opt.icon;
            const isActive = filter === opt.id;

            return (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.25rem',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
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
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Project Grid: 2 columns for clear readability and high-impact cards */}
        <div className="grid-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
