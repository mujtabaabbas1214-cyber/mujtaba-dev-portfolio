import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Sparkles, Terminal, Code2, Cpu, CheckCircle2, Copy, Check } from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('developer');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    developer: `// Syed Muhammad Mujtaba Abbas
const developer = {
  name: "Syed Muhammad Mujtaba Abbas",
  role: "Front-End Developer & AI Enthusiast",
  education: "BS Computer Science @ PAF-KIET",
  coreStack: ["React.js", "JavaScript", "Python", "FastAPI"],
  passions: [
    "Modern Web Interfaces",
    "Autonomous AI Agents",
    "HCI & UI/UX Systems"
  ],
  status: "Open for High-Impact Roles & Collaborations"
};`,
    aiAgent: `// Autonomous Agent Pipeline
async function orchestrateAgent(query) {
  const intent = await parseIntent(query);
  const reasoning = await LLMEngine.reason(intent);
  
  if (reasoning.requiresMath) {
    return PythonWorker.calculate(reasoning.matrix);
  }
  
  return { status: 200, output: reasoning.response };
}`,
    architecture: `// 3-Tier Enterprise Security
class DatabaseGateway {
  public function executeQuery($sql, $params) {
    // Prepared statement to neutralize SQLi
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute($params);
    return $stmt->fetchAll();
  }
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      style={{
        paddingTop: 'calc(var(--navbar-height) + 3.5rem)',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Intro & Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Status Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.4rem 1rem',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(56, 189, 248, 0.08)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  fontSize: '0.85rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 10px #10b981',
                    animation: 'pulseSlow 2s infinite',
                  }}
                />
                Available for Projects &amp; Internships
              </div>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <span
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}
              >
                Hi, I'm
              </span>
              <h1
                style={{
                  lineHeight: 1.15,
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.03em',
                }}
              >
                <span className="gradient-text">{profile.name}</span>
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.05rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: 500,
                }}
              >
                {profile.title}
              </p>
            </div>

            {/* Headline & Description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <h2
                style={{
                  fontSize: 'clamp(1.3rem, 2.8vw, 1.85rem)',
                  fontWeight: 700,
                  color: '#e2e8f0',
                  lineHeight: 1.35,
                }}
              >
                {profile.heroHeadline}
              </h2>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '580px',
                  lineHeight: 1.7,
                }}
              >
                {profile.heroDescription}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginTop: '0.5rem',
              }}
            >
              <a href="#projects" className="btn btn-primary btn-lg">
                View My Projects
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary btn-lg">
                <Mail size={18} />
                Contact Me
              </a>

              <a
                href={profile.cvLink}
                download="Syed_Muhammad_Mujtaba_Abbas_CV.pdf"
                className="btn btn-outline btn-lg"
                title="Download CV"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* Mini Trust Highlights */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                marginTop: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="var(--accent-cyan)" />
                <span>Modern React &amp; Vite</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="var(--accent-indigo)" />
                <span>AI &amp; Full-Stack Systems</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="var(--accent-emerald)" />
                <span>UI/UX &amp; HCI Focused</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Terminal / Developer Visual */}
          <div style={{ position: 'relative' }}>
            {/* Ambient Background Blur for Visual */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(99, 102, 241, 0.1) 60%, transparent 80%)',
                filter: 'blur(50px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            {/* Terminal Window Card */}
            <div
              className="glass-panel"
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(56, 189, 248, 0.12)',
                overflow: 'hidden',
                backgroundColor: 'rgba(9, 13, 22, 0.92)',
              }}
            >
              {/* Terminal Title Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1.2rem',
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  <span
                    style={{
                      marginLeft: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    smma-terminal ~ bash
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: copied ? 'var(--accent-emerald)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                  title="Copy code"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Terminal Tabs */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.4rem 0.8rem',
                  backgroundColor: 'rgba(11, 17, 32, 0.6)',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <button
                  onClick={() => setActiveTab('developer')}
                  style={{
                    background: activeTab === 'developer' ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                    border: '1px solid',
                    borderColor: activeTab === 'developer' ? 'rgba(56, 189, 248, 0.3)' : 'transparent',
                    color: activeTab === 'developer' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Code2 size={13} />
                  developer.js
                </button>

                <button
                  onClick={() => setActiveTab('aiAgent')}
                  style={{
                    background: activeTab === 'aiAgent' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                    border: '1px solid',
                    borderColor: activeTab === 'aiAgent' ? 'rgba(99, 102, 241, 0.3)' : 'transparent',
                    color: activeTab === 'aiAgent' ? '#a5b4fc' : 'var(--text-secondary)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Cpu size={13} />
                  agentPipeline.js
                </button>

                <button
                  onClick={() => setActiveTab('architecture')}
                  style={{
                    background: activeTab === 'architecture' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                    border: '1px solid',
                    borderColor: activeTab === 'architecture' ? 'rgba(16, 185, 129, 0.3)' : 'transparent',
                    color: activeTab === 'architecture' ? '#6ee7b7' : 'var(--text-secondary)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Terminal size={13} />
                  security.php
                </button>
              </div>

              {/* Code Editor Body */}
              <div
                style={{
                  padding: '1.25rem',
                  fontSize: '0.85rem',
                  overflowX: 'auto',
                  fontFamily: 'var(--font-mono)',
                  color: '#cbd5e1',
                  minHeight: '260px',
                }}
              >
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Telemetry */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.65rem 1.2rem',
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
                  UTF-8
                </span>
                <span>PAF-KIET • Karachi</span>
                <span style={{ color: 'var(--accent-emerald)' }}>⚡ Ready to Deploy</span>
              </div>
            </div>

            {/* Floating Highlight Card: Fast Vite & React */}
            <div
              className="glass-panel floating-anim"
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-15px',
                padding: '0.75rem 1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <Sparkles size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  React 18 + Vite
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  High Performance UI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
