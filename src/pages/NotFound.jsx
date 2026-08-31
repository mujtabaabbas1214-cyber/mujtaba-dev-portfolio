import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
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
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '20px',
            backgroundColor: 'rgba(56, 189, 248, 0.15)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cyan)',
            marginBottom: '1.5rem',
          }}
        >
          <Compass size={36} />
        </div>

        <h1
          style={{
            fontSize: 'clamp(3rem, 7vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: '1rem',
          }}
          className="gradient-text"
        >
          404
        </h1>

        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Page Not Found
        </h2>

        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
          }}
        >
          The page or resource you are searching for does not exist or may have been moved.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            Return Home
          </Link>
          <Link to="/#projects" className="btn btn-secondary">
            <ArrowLeft size={18} />
            View Projects
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
