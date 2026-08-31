import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import ProjectLinks from './ProjectLinks';

export default function ProjectCard({ project }) {
  const {
    slug,
    number,
    name,
    category,
    isFeatured,
    isMobile,
    accentGlow,
    description,
    technologies,
    features,
    images
  } = project;

  const coverImage = images && images.length > 0 ? images[0] : null;

  const glowStyles = isFeatured
    ? {
        border: '1px solid rgba(56, 189, 248, 0.35)',
        boxShadow: '0 15px 35px -10px rgba(56, 189, 248, 0.15)',
      }
    : {
        border: '1px solid var(--border-subtle)',
      };

  return (
    <div
      className="glass-panel project-card-item"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all var(--transition-smooth)',
        ...glowStyles,
      }}
    >
      {/* Top Cover Visual */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: isMobile ? '62%' : '56.25%', // Generous height for both mobile & desktop
          backgroundColor: '#050811',
          background: 'radial-gradient(circle at center, #0f172a 0%, #050811 100%)',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {coverImage ? (
          <img
            src={coverImage.src}
            alt={coverImage.alt || name}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: isMobile ? 'contain' : 'cover',
              objectPosition: 'center top',
              padding: isMobile ? '0.75rem' : '0',
              transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="project-cover-img"
          />
        ) : (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            No Preview Available
          </div>
        )}

        {/* Floating Number & Featured Badge */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            zIndex: 2,
          }}
        >
          <span
            style={{
              padding: '0.3rem 0.75rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(7, 10, 18, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.82rem',
              color: 'var(--accent-cyan)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {number}
          </span>

          {isFeatured && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(99, 102, 241, 0.9)',
                color: '#ffffff',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.75rem',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
              }}
            >
              <Sparkles size={12} />
              Featured AI
            </span>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div
        style={{
          padding: '1.8rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {/* Category Tag */}
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              color: isFeatured ? 'var(--accent-cyan)' : 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {category}
          </span>

          {/* Project Title */}
          <h3
            style={{
              fontSize: '1.45rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.3,
            }}
          >
            <Link
              to={`/project/${slug}`}
              style={{ color: 'inherit', textDecoration: 'none' }}
              className="project-title-link"
            >
              {name}
            </Link>
          </h3>

          {/* Short Description */}
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.65',
            }}
          >
            {description}
          </p>

          {/* Feature Highlight Bullets */}
          {features && features.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.4rem' }}>
              {features.slice(0, 3).map((feat, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: '#cbd5e1',
                  }}
                >
                  <Check size={14} color="var(--accent-cyan)" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.45rem',
              marginTop: '0.6rem',
            }}
          >
            {technologies.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.85rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          {/* Primary View Details Button */}
          <Link
            to={`/project/${slug}`}
            className="btn btn-sm btn-primary"
            style={{ borderRadius: 'var(--radius-sm)' }}
          >
            <span>View Details</span>
            <ArrowRight size={14} />
          </Link>

          {/* Contextual Link Buttons */}
          <ProjectLinks project={project} isDetail={false} />
        </div>
      </div>

      <style>{`
        .project-card-item:hover {
          transform: translateY(-4px);
          border-color: rgba(56, 189, 248, 0.5) !important;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6), 0 0 25px rgba(56, 189, 248, 0.18) !important;
        }
        .project-card-item:hover .project-cover-img {
          transform: scale(1.03);
        }
        .project-title-link:hover {
          color: var(--accent-cyan) !important;
        }
      `}</style>
    </div>
  );
}
