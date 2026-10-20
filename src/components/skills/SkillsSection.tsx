import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { Badge } from '../ui/Badge';

const categories = [
  { key: 'development', label: 'Development' },
  { key: 'ai-ml', label: 'AI & Machine Learning' },
  { key: 'creative', label: 'Creative' },
  { key: 'exploring', label: 'Exploring' },
] as const;

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section"
      aria-labelledby="skills-heading"
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
            id="skills-heading"
            className="font-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4"
          >
            Skills & Technologies
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Tools and technologies I work with, organized by domain.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, catIndex) => {
            const categorySkills = skills
              .filter(s => s.category === category.key)
              .sort((a, b) => a.order - b.order);

            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs text-[var(--accent-lime)] tracking-widest uppercase">
                    {category.label}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[var(--border-subtle)] to-transparent" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: catIndex * 0.1 + skillIndex * 0.03 }}
                    >
                      <Badge
                        variant={skill.category === 'exploring' ? 'accent' : skill.learning ? 'outline' : 'default'}
                        className={
                          skill.learning
                            ? 'border-[var(--accent-lime)]/50 text-[var(--accent-lime)]'
                            : skill.category !== 'exploring'
                            ? 'hover:border-[var(--accent-lime)]/50 hover:text-[var(--accent-lime)]'
                            : ''
                        }
                      >
                        {skill.name}
                        {skill.learning && (
                          <span className="ml-1.5 text-xs opacity-70">(learning)</span>
                        )}
                      </Badge>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}