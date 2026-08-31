import React, { useState } from 'react';
import { Maximize2, Image as ImageIcon } from 'lucide-react';
import LightboxModal from './LightboxModal';

export default function ProjectGallery({ images, projectName, isMobile = false }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!images || images.length === 0) {
    return (
      <div
        className="glass-panel"
        style={{
          padding: '3rem',
          textAlign: 'center',
          color: 'var(--text-muted)',
        }}
      >
        <ImageIcon size={36} style={{ marginBottom: '0.75rem', opacity: 0.5 }} />
        <p>Screenshots will appear here once added.</p>
      </div>
    );
  }

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? 'repeat(auto-fit, minmax(240px, 1fr))'
            : 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setLightboxIndex(idx)}
            className="glass-panel gallery-item-card"
            style={{
              borderRadius: isMobile ? 'var(--radius-lg)' : 'var(--radius-md)',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(9, 13, 22, 0.9)',
              border: '1px solid var(--border-subtle)',
              transition: 'all var(--transition-smooth)',
            }}
          >
            {/* Image Preview Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: isMobile ? '160%' : '58%', // Portrait 9:16 for Mobile, 16:9 for Web/Figma
                overflow: 'hidden',
                backgroundColor: '#050811',
                background: 'radial-gradient(circle at center, #0f172a 0%, #050811 100%)',
              }}
            >
              <img
                src={img.src}
                alt={img.alt || `${projectName} screenshot ${idx + 1}`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: isMobile ? 'contain' : 'cover',
                  objectPosition: isMobile ? 'center' : 'center top',
                  padding: isMobile ? '0.75rem' : '0',
                  transition: 'transform 0.4s ease',
                }}
                className="gallery-thumb-img"
              />

              {/* Hover Zoom Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(7, 10, 18, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity var(--transition-fast)',
                }}
                className="gallery-zoom-overlay"
              >
                <div
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(56, 189, 248, 0.9)',
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 0 15px rgba(56, 189, 248, 0.5)',
                  }}
                >
                  <Maximize2 size={14} />
                  <span>Enlarge Preview</span>
                </div>
              </div>
            </div>

            {/* Caption Strip */}
            <div
              style={{
                padding: '0.85rem 1.1rem',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {img.caption || `Screenshot ${idx + 1}`}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent-cyan)',
                  opacity: 0.8,
                }}
              >
                0{idx + 1}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal Instance */}
      <LightboxModal
        images={images}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <style>{`
        .gallery-item-card:hover {
          transform: translateY(-4px);
          border-color: rgba(56, 189, 248, 0.4) !important;
          box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.5) !important;
        }
        .gallery-item-card:hover .gallery-thumb-img {
          transform: scale(1.03);
        }
        .gallery-item-card:hover .gallery-zoom-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
