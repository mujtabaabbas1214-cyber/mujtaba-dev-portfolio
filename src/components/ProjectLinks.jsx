import React from 'react';
import { ExternalLink, Play, Smartphone, Code } from 'lucide-react';
import { GithubIcon, FigmaIcon } from './Icons';

export default function ProjectLinks({ project, isDetail = false }) {
  const {
    githubLink,
    liveDemoLink,
    figmaLink,
    colabLink,
    videoLink,
    apkLink
  } = project;

  const btnClass = isDetail ? 'btn btn-primary' : 'btn btn-sm btn-primary';
  const secBtnClass = isDetail ? 'btn btn-secondary' : 'btn btn-sm btn-secondary';

  const hasAnyLink = githubLink || liveDemoLink || figmaLink || colabLink || videoLink || apkLink;

  if (!hasAnyLink) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        alignItems: 'center',
      }}
    >
      {/* Live Demo Link */}
      {liveDemoLink && (
        <a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          title="Open Live Application"
        >
          <span>Live Demo</span>
          <ExternalLink size={isDetail ? 16 : 14} />
        </a>
      )}

      {/* GitHub Repository Link */}
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={secBtnClass}
          title="View Source Code on GitHub"
        >
          <GithubIcon size={isDetail ? 16 : 14} />
          <span>GitHub</span>
        </a>
      )}

      {/* Figma Design Link */}
      {figmaLink && (
        <a
          href={figmaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          style={{ background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)' }}
          title="Open Figma Prototype"
        >
          <FigmaIcon size={isDetail ? 16 : 14} />
          <span>Figma Prototype</span>
        </a>
      )}

      {/* Google Colab Link */}
      {colabLink && (
        <a
          href={colabLink}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          style={{ background: 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)', color: '#0f172a' }}
          title="Open Google Colab Notebook"
        >
          <Code size={isDetail ? 16 : 14} />
          <span>Google Colab</span>
        </a>
      )}

      {/* Android APK Download */}
      {apkLink && (
        <a
          href={apkLink}
          target="_blank"
          rel="noopener noreferrer"
          className={secBtnClass}
          title="Download Android APK"
        >
          <Smartphone size={isDetail ? 16 : 14} />
          <span>Download APK</span>
        </a>
      )}

      {/* Demo Video Link */}
      {videoLink && (
        <a
          href={videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={secBtnClass}
          title="Watch Video Demonstration"
        >
          <Play size={isDetail ? 16 : 14} />
          <span>Watch Demo</span>
        </a>
      )}
    </div>
  );
}
