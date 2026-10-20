import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  const publishedProjects = projects.filter(p => p.publicationStatus === 'published');

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
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
            id="projects-heading"
            className="font-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4"
          >
            Selected Work
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            collection of things I've built, explored, and brought to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {publishedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {publishedProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[var(--text-muted)]">No projects published yet.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}