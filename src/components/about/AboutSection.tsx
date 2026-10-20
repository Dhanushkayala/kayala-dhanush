import { motion } from 'framer-motion';
import { siteSettings } from '../../data/siteSettings';

export function AboutSection() {
  const { about } = siteSettings;

  return (
    <section
      id="about"
      className="section"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:pr-12"
          >
            <span className="inline-block font-mono text-xs text-[var(--accent-lime)] tracking-widest uppercase mb-4">
              About Me
            </span>
            <h2
              id="about-heading"
              className="font-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-6 leading-[1.1]"
            >
              {about.headline}
            </h2>
            <div className="prose prose-invert max-w-none text-[var(--text-secondary)] leading-relaxed">
              {about.supportingText.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: 0.1 }}
            className="space-y-10"
          >
            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <h3 className="font-medium text-[var(--text-primary)] mb-4">Background</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{about.background}</p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <h3 className="font-medium text-[var(--text-primary)] mb-4">Interests</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{about.interests}</p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <h3 className="font-medium text-[var(--text-primary)] mb-4">Currently Learning</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{about.currentLearning}</p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <h3 className="font-medium text-[var(--text-primary)] mb-4">Personal Statement</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed font-medium">{about.personalStatement}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}