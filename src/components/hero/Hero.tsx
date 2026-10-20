import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, MousePointer2 } from 'lucide-react';
import { siteSettings } from '../../data/siteSettings';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { hero } = siteSettings;

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-headline"
    >
      <div className="absolute inset-0 bg-[var(--bg-primary)]" />

      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--accent-lime)/5_0%,transparent_50%),radial-gradient(ellipse_at_center,var(--accent-lime)/3_0%,transparent_70%)]" />
        <GridPattern />
      </div>

      <div className="relative container z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="pt-20 lg:pt-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={hero.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)] tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-lime)] animate-pulse" />
                  {hero.label}
                </span>
              </motion.div>
            </AnimatePresence>

            <motion.h1
              id="hero-headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-[var(--text-primary)] text-balance"
            >
              {hero.headline.split(' ').map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed"
            >
              {hero.supportingHeadline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: 0.3 }}
              className="mt-6 text-base md:text-lg text-[var(--text-muted)] max-w-xl leading-relaxed"
            >
              {hero.supportingParagraph}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="btn btn-primary"
                aria-label={hero.primaryCtaLabel}
              >
                {hero.primaryCtaLabel}
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary"
                aria-label={hero.secondaryCtaLabel}
              >
                {hero.secondaryCtaLabel}
              </button>
            </motion.div>

            {(hero.availability.enabled || hero.technicalStatus.location) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: 0.5 }}
                className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-6 text-sm"
              >
                {hero.availability.enabled && (
                  <div className="flex items-center gap-2 text-[var(--accent-lime)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)] animate-pulse" />
                    <span>{hero.availability.text}</span>
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-4 text-[var(--text-muted)] font-mono text-xs">
                  {hero.technicalStatus.location && (
                    <span className="flex items-center gap-1">{hero.technicalStatus.location}</span>
                  )}
                  {hero.technicalStatus.currentFocus && (
                    <span className="flex items-center gap-1">
                      <span className="text-[var(--accent-lime)]">focus:</span>
                      {hero.technicalStatus.currentFocus}
                    </span>
                  )}
                  {hero.technicalStatus.currentProject && (
                    <span className="flex items-center gap-1">
                      <span className="text-[var(--accent-lime)]">project:</span>
                      {hero.technicalStatus.currentProject}
                    </span>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          <div className="relative lg:pl-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1], delay: 0.3 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <HeroVisual />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: 0.7 }}
              className="mt-8 flex items-center justify-center gap-2 text-[var(--text-muted)] font-mono text-xs"
            >
              <MousePointer2 className="h-4 w-4" />
              <span>Scroll to explore</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </motion.div>
          </div>
        </div>
      </div>

      <ScrollIndicator onClick={scrollToProjects} />
    </section>
  );
}

function GridPattern() {
  return (
    <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full h-full" aria-hidden="true">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full text-[var(--border-subtle)]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-lime)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--accent-lime)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="url(#accentGradient)"
          strokeWidth="1"
          className="animate-rotate-slow"
        />

        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="8,8"
          className="animate-rotate-reverse"
        />

        <circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="animate-pulse-slow"
        />

        <g className="animate-float">
          {[0, 90, 180, 270].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 200 200)`}>
              <circle cx="200" cy="60" r="8" fill="var(--accent-lime)" opacity="0.6" />
              <circle cx="200" cy="60" r="12" fill="none" stroke="var(--accent-lime)" strokeWidth="1" opacity="0.3" />
            </g>
          ))}
        </g>

        <rect x="190" y="190" width="20" height="20" fill="var(--bg-primary)" stroke="var(--accent-lime)" strokeWidth="1.5" rx="2" />
        <rect x="196" y="196" width="8" height="8" fill="var(--accent-lime)" rx="1" />
      </svg>

      <style>{`
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.05); opacity: 0.3; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .animate-rotate-slow { animation: rotate-slow 60s linear infinite; }
        .animate-rotate-reverse { animation: rotate-reverse 40s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-rotate-slow, .animate-rotate-reverse, .animate-pulse-slow, .animate-float {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function ScrollIndicator({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)] font-mono text-xs animate-bounce-hover"
      aria-label="Scroll to projects"
    >
      <span>SCROLL</span>
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </button>
  );
}