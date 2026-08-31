import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { profile } from '../data/profile';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isHomePage) {
        const sections = navLinks.map((link) => link.href.replace('#', ''));
        const scrollPosition = window.scrollY + 120;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Handle navigation click (scroll if on home, or navigate to home + hash)
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    setMobileMenuOpen(false);

    if (isHomePage) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--navbar-height)',
        zIndex: 1000,
        transition: 'all var(--transition-smooth)',
        backgroundColor: isScrolled ? 'rgba(7, 10, 18, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <div
        className="container"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
          }}
          aria-label="Syed Muhammad Mujtaba Abbas Portfolio Home"
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(99, 102, 241, 0.25) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              color: 'var(--accent-cyan)',
              boxShadow: '0 0 15px rgba(56, 189, 248, 0.15)',
            }}
          >
            {profile.logoText}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
              {profile.shortName}
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Developer &amp; AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'rgba(15, 23, 42, 0.55)',
            padding: '0.35rem 0.5rem',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-subtle)',
            backdropFilter: 'blur(12px)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = isHomePage && activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  padding: '0.5rem 0.95rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  backgroundColor: isActive ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                  border: isActive ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
                  transition: 'all var(--transition-fast)',
                }}
                className="nav-link-item"
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action CTA: Let's Connect */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.8rem' }} className="desktop-actions">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-sm btn-primary"
            style={{ borderRadius: 'var(--radius-pill)' }}
          >
            Get In Touch
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(30, 41, 59, 0.6)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(7, 10, 18, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            zIndex: 999,
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = isHomePage && activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    padding: '0.85rem 1.2rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                    backgroundColor: isActive ? 'rgba(56, 189, 248, 0.1)' : 'rgba(30, 41, 59, 0.3)',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(56, 189, 248, 0.3)' : 'var(--border-subtle)',
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div style={{ marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Get In Touch
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}

      {/* Embedded Responsive Media Query Helper */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        .nav-link-item:hover {
          color: var(--text-primary) !important;
          background-color: rgba(255, 255, 255, 0.08) !important;
        }
      `}</style>
    </header>
  );
}
