import { motion } from 'framer-motion';
import { journey } from '../../data/journey';
import { formatDate } from '../../lib/utils';

export function JourneySection() {
  const publishedJourney = journey.filter(item => item.published).sort((a, b) => a.order - b.order);

  return (
    <section
      id="journey"
      className="section"
      aria-labelledby="journey-heading"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2
            id="journey-heading"
            className="font-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4"
          >
            Always in Progress
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Active learning, experimentation, and building. A timeline of milestones.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <ol className="relative">
            <li className="relative" aria-hidden="true">
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-[var(--border-subtle)]" />
            </li>
            {publishedJourney.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.08 }}
                className="relative pb-12 md:pb-16 last:pb-0"
              >
                <div className="absolute left-4 md:left-6 top-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[var(--accent-lime)] border-4 border-[var(--bg-primary)] z-10 flex-shrink-0" />

                <div className="ml-12 md:ml-16">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <time
                      dateTime={item.date}
                      className="font-mono text-sm text-[var(--accent-lime)] font-medium whitespace-nowrap"
                    >
                      {formatDate(item.date + '-01')}
                    </time>
                    {item.projectLink && (
                      <a
                        href={item.projectLink}
                        className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-lime)] transition-colors font-mono"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}