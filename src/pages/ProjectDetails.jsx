import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  Lightbulb,
  Code2,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectGallery from '../components/ProjectGallery';
import ProjectLinks from '../components/ProjectLinks';
import { projects, getProjectBySlug } from '../data/projects';

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main
          className="container"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 'calc(var(--navbar-height) + 4rem)',
            paddingBottom: '6rem',
          }}
        >
          <h1 style={{ marginBottom: '1rem' }}>Project Not Found</h1>
          <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            The project <code style={{ color: 'var(--accent-cyan)' }}>{slug}</code> does not exist.
          </p>
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main
        style={{
          flex: 1,
          paddingTop: 'calc(var(--navbar-height) + 3rem)',
          paddingBottom: '4rem',
        }}
      >
        <div className="container">

          {/* Back Navigation */}
          <div style={{ marginBottom: '2.5rem' }}>
            <Link
              to="/#projects"
              className="btn btn-secondary btn-sm"
              style={{ borderRadius: 'var(--radius-pill)' }}
            >
              <ArrowLeft size={15} />
              <span>All Projects</span>
            </Link>
          </div>

          {/* Project Hero Header */}
          <div style={{ marginBottom: '4rem' }}>
            {/* Category + Number */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="section-tag" style={{ marginBottom: 0 }}>{project.category}</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-subtle)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                Project {project.number}
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 800,
                marginBottom: '1.25rem',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
              }}
            >
              {project.name}
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                maxWidth: '860px',
                lineHeight: '1.7',
                marginBottom: '2rem',
              }}
            >
              {project.description}
            </p>

            {/* Top Project Action Buttons */}
            <div style={{ marginBottom: '2.5rem' }}>
              <ProjectLinks project={project} isDetail={true} />
            </div>

            {/* Large Cover Hero Preview */}
            {project.images && project.images.length > 0 && (
              <div
                className="glass-panel"
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 35px rgba(56, 189, 248, 0.1)',
                  backgroundColor: '#050811',
                  background: 'radial-gradient(circle at center, #0f172a 0%, #050811 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: project.isMobile ? '2.5rem 1rem' : '0',
                }}
              >
                <img
                  src={project.images[0].src}
                  alt={project.images[0].alt || project.name}
                  style={{
                    width: project.isMobile ? 'auto' : '100%',
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: project.isMobile ? '560px' : '640px',
                    display: 'block',
                    objectFit: project.isMobile ? 'contain' : 'cover',
                    borderRadius: project.isMobile ? '24px' : '0',
                    boxShadow: project.isMobile
                      ? '0 20px 50px rgba(0,0,0,0.8), 0 0 0 2px rgba(255,255,255,0.12)'
                      : 'none',
                  }}
                />
              </div>
            )}
          </div>

          {/* Project Details Grid (Overview, Problem, Features, Technologies) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
              marginBottom: '4rem',
            }}
            className="project-deepdive-grid"
          >
            {/* Left Main Column: Narrative & Technical Depth */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {/* Project Overview */}
              <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
                  <Layers size={22} color="var(--accent-cyan)" />
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>System Overview</h2>
                </div>
                <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.8' }}>
                  {project.longDescription}
                </p>
              </div>

              {/* Problem Statement */}
              <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
                  <Lightbulb size={22} color="var(--accent-indigo)" />
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Problem Statement &amp; Objective</h2>
                </div>
                <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.8' }}>
                  {project.problem}
                </p>
              </div>

              {/* Key Features */}
              <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
                  <CheckCircle2 size={22} color="var(--accent-emerald)" />
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Core Features &amp; Capabilities</h2>
                </div>
                <div
                  style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}
                  className="features-grid"
                >
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.85rem',
                        padding: '1rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'rgba(9, 13, 22, 0.75)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(16, 185, 129, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#10b981',
                          flexShrink: 0,
                          marginTop: '0.1rem',
                        }}
                      >
                        <CheckCircle2 size={15} />
                      </div>
                      <span style={{ fontSize: '1rem', color: '#f8fafc', fontWeight: 500 }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dedicated Security Considerations (for Hostel MS) */}
              {project.securityConsiderations && (
                <div
                  className="glass-panel"
                  style={{
                    padding: '2.5rem',
                    border: '1px solid rgba(16, 185, 129, 0.35)',
                    boxShadow: '0 15px 35px -10px rgba(16, 185, 129, 0.15)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
                    <ShieldCheck size={24} color="#10b981" />
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>
                      {project.securityConsiderations.title}
                    </h2>
                  </div>
                  <p style={{ fontSize: '1.02rem', color: '#cbd5e1', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                    {project.securityConsiderations.summary}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    {project.securityConsiderations.points.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        style={{
                          padding: '1.25rem',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: 'rgba(9, 13, 22, 0.85)',
                          border: '1px solid rgba(16, 185, 129, 0.2)',
                        }}
                      >
                        <h4 style={{ fontSize: '1.1rem', color: '#10b981', marginBottom: '0.4rem' }}>
                          ✓ {point.heading}
                        </h4>
                        <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.65' }}>
                          {point.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Development Process */}
              <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
                  <Code2 size={22} color="var(--accent-cyan)" />
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Development &amp; Engineering Process</h2>
                </div>
                <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.8' }}>
                  {project.developmentProcess}
                </p>
              </div>

              {/* Challenges & Solutions */}
              <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
                  <AlertTriangle size={22} color="#f59e0b" />
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Engineering Challenges &amp; Solutions</h2>
                </div>
                <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.8' }}>
                  {project.challenges}
                </p>
              </div>

              {/* Future Roadmap */}
              <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
                  <Sparkles size={22} color="var(--accent-purple)" />
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Future Improvements &amp; Roadmap</h2>
                </div>
                <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.8' }}>
                  {project.futureImprovements}
                </p>
              </div>
            </div>

            {/* Right Sidebar: Tech Stack & Metadata */}
            <div>
              <div
                className="glass-panel"
                style={{
                  padding: '2rem',
                  position: 'sticky',
                  top: 'calc(var(--navbar-height) + 1.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.8rem',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    Technologies Used
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="badge badge-featured"
                        style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    Quick Project Links
                  </h3>
                  <ProjectLinks project={project} isDetail={false} />
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot Gallery Section */}
          <div style={{ marginBottom: '5rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span className="section-tag">Visual Artifacts</span>
              <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Project Screenshot Gallery
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Click on any screenshot to view full resolution details in the lightbox viewer.
              </p>
            </div>

            <ProjectGallery
              images={project.images}
              projectName={project.name}
              isMobile={project.isMobile}
            />
          </div>

          {/* Next / Previous Project Pagination Bar */}
          <div
            style={{
              paddingTop: '2.5rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            {prevProject ? (
              <Link
                to={`/project/${prevProject.slug}`}
                className="btn btn-secondary"
                style={{ borderRadius: 'var(--radius-pill)' }}
              >
                <ArrowLeft size={16} />
                <span>Previous: {prevProject.name}</span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/#projects"
              className="btn btn-outline"
              style={{ borderRadius: 'var(--radius-pill)' }}
            >
              All Projects
            </Link>

            {nextProject ? (
              <Link
                to={`/project/${nextProject.slug}`}
                className="btn btn-primary"
                style={{ borderRadius: 'var(--radius-pill)' }}
              >
                <span>Next: {nextProject.name}</span>
                <ArrowRight size={16} />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @media (min-width: 992px) {
          .project-deepdive-grid {
            grid-template-columns: 1fr 340px !important;
          }
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}