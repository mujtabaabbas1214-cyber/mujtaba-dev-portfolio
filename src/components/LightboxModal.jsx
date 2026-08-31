import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function LightboxModal({ images, activeIndex, onClose, onPrev, onNext }) {
  if (activeIndex === null || !images || images.length === 0) return null;

  const currentImage = images[activeIndex];

  // Handle keyboard events (ESC, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 8, 16, 0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      {/* Top Bar with Title & Close Button */}
      <div
        style={{
          position: 'absolute',
          top: '1.5rem',
          left: '1.5rem',
          right: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#ffffff',
          zIndex: 10,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              padding: '0.3rem 0.8rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(56, 189, 248, 0.2)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              color: 'var(--accent-cyan)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: 600,
            }}
          >
            {activeIndex + 1} / {images.length}
          </span>
          <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0' }}>
            {currentImage.caption || currentImage.alt}
          </span>
        </div>

        <button
          onClick={onClose}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid var(--border-subtle)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
          }}
          aria-label="Close Lightbox"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        style={{
          maxWidth: '1100px',
          maxHeight: '78vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt || `Screenshot ${activeIndex + 1}`}
          style={{
            maxWidth: '100%',
            maxHeight: '75vh',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          style={{
            position: 'absolute',
            left: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
            backdropFilter: 'blur(8px)',
          }}
          aria-label="Previous Image"
        >
          <ChevronLeft size={26} />
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          style={{
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
            backdropFilter: 'blur(8px)',
          }}
          aria-label="Next Image"
        >
          <ChevronRight size={26} />
        </button>
      )}

      {/* Bottom Thumbnail Strip */}
      {images.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            display: 'flex',
            gap: '0.6rem',
            padding: '0.4rem 0.8rem',
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-subtle)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => {
                const diff = idx - activeIndex;
                if (diff > 0) {
                  for (let i = 0; i < diff; i++) onNext();
                } else if (diff < 0) {
                  for (let i = 0; i < Math.abs(diff); i++) onPrev();
                }
              }}
              style={{
                width: '40px',
                height: '26px',
                borderRadius: '4px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: idx === activeIndex ? '2px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.2)',
                opacity: idx === activeIndex ? 1 : 0.5,
                transition: 'all var(--transition-fast)',
              }}
            >
              <img src={img.src} alt="thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
