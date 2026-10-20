import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Eye, FolderOpen } from 'lucide-react';
import type { Project } from '../../types';
import { formatDate } from '../../lib/utils';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { SocialIcon } from '../ui/SocialIcons';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false);

  const statusColors: Record<Project['status'], string> = {
    completed: 'bg-green-500/20 text-green-400 border-green-500/30',
    prototype: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    research: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'in-progress': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  };

  const statusLabels: Record<Project['status'], string> = {
    completed: 'Completed',
    prototype: 'Prototype',
    research: 'Research',
    'in-progress': 'In Progress',
  };

  return (
    <>
      <article className="group">
        <Card className="h-full overflow-hidden">
          <div className="relative aspect-video overflow-hidden bg-[var(--bg-elevated)]">
            {project.thumbnail && (
              <motion.img
                src={project.thumbnail}
                alt={`${project.title} project thumbnail`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            )}
            {!project.thumbnail && (
              <div className="w-full h-full flex items-center justify-center text-[var(--text-muted)]">
                <FolderOpen className="h-12 w-12" />
              </div>
            )}
            <div className="absolute top-3 left-3 flex gap-2">
              <Badge variant="accent" className={statusColors[project.status]}>
                {statusLabels[project.status]}
              </Badge>
              {project.featured && (
                <Badge variant="accent">Featured</Badge>
              )}
            </div>
            <div className="absolute bottom-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.githubUrl && (
                <button
                  onClick={() => window.open(project.githubUrl!, '_blank', 'noopener,noreferrer')}
                  className="p-2 rounded bg-[var(--bg-primary)]/80 backdrop-blur text-[var(--text-secondary)] hover:text-[var(--accent-lime)] transition-colors"
                  aria-label="View on GitHub"
                >
                  <SocialIcon platform="github" className="h-4 w-4" />
                </button>
              )}
              {project.liveDemoUrl && (
                <button
                  onClick={() => window.open(project.liveDemoUrl!, '_blank', 'noopener,noreferrer')}
                  className="p-2 rounded bg-[var(--bg-primary)]/80 backdrop-blur text-[var(--text-secondary)] hover:text-[var(--accent-lime)] transition-colors"
                  aria-label="View live demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </button>
              )}
              <button
                onClick={() => setShowModal(true)}
                className="p-2 rounded bg-[var(--bg-primary)]/80 backdrop-blur text-[var(--text-secondary)] hover:text-[var(--accent-lime)] transition-colors"
                aria-label="View project details"
              >
                <Eye className="h-4 w-4" />
              </button>
            </div>
          </div>

          <CardContent className="p-5">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>

            <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-lime)] transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-[var(--text-secondary)] line-clamp-3 mb-4">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] font-mono">
              <span className="flex items-center gap-1">
                <Code className="h-3 w-3" />
                {project.category}
              </span>
              <span>{formatDate(project.updatedAt)}</span>
            </div>
          </CardContent>
        </Card>
      </article>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={project.title}
        size="lg"
        description={project.shortDescription}
      >
        <ProjectModalContent project={project} />
      </Modal>
    </>
  );
}

function ProjectModalContent({ project }: { project: Project }) {
  return (
    <div className="space-y-6">
      {project.thumbnail && (
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <img
            src={project.thumbnail}
            alt={`${project.title} project thumbnail`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="accent">{tech}</Badge>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)] font-mono">
          <Badge variant={project.status === 'completed' ? 'accent' : 'outline'} className={project.status === 'completed' ? '' : 'text-[var(--text-secondary)]'}>
            {project.status === 'completed' ? 'Completed' : project.status === 'prototype' ? 'Prototype' : project.status === 'research' ? 'Research' : 'In Progress'}
          </Badge>
          <span>{project.category}</span>
        </div>
      </div>

      {project.fullDescription && (
        <div className="prose prose-invert max-w-none">
          <p className="text-[var(--text-secondary)] leading-relaxed">{project.fullDescription}</p>
        </div>
      )}

      {(project.gallery && project.gallery.length > 0) && (
        <div>
          <h4 className="font-medium text-[var(--text-primary)] mb-3">Project Gallery</h4>
          <div className="grid grid-cols-2 gap-3">
            {project.gallery.map((image, i) => (
              <div key={i} className="aspect-video rounded-lg overflow-hidden">
                <img src={image} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      )}

      {project.videoPreview && (
        <div>
          <h4 className="font-medium text-[var(--text-primary)] mb-3">Video Preview</h4>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-[var(--bg-elevated)]">
            <video
              src={project.videoPreview}
              controls
              poster={project.thumbnail}
              className="w-full h-full"
              preload="metadata"
            />
          </div>
        </div>
      )}

      {project.caseStudy && (
        <div className="pt-4 border-t border-[var(--border-subtle)]">
          <h4 className="font-medium text-[var(--text-primary)] mb-3">Case Study</h4>
          <div className="prose prose-invert max-w-none text-[var(--text-secondary)]">
            <p>{project.caseStudy}</p>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--border-subtle)]">
        {project.githubUrl && (
          <Button variant="secondary" onClick={() => window.open(project.githubUrl!, '_blank', 'noopener,noreferrer')}>
            <SocialIcon platform="github" className="h-4 w-4" />
            View Code
          </Button>
        )}
        {project.liveDemoUrl && (
          <Button variant="primary" onClick={() => window.open(project.liveDemoUrl!, '_blank', 'noopener,noreferrer')}>
            <Eye className="h-4 w-4" />
            Live Demo
          </Button>
        )}
      </div>
    </div>
  );
}