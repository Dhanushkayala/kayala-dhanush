import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { creativeItems } from '../../data/creative';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';

export function CreativeSection() {
  const [selectedItem, setSelectedItem] = useState<typeof creativeItems[0] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const publishedItems = creativeItems.filter(item => item.published);

  const openLightbox = (item: typeof creativeItems[0], index: number) => {
    setSelectedItem(item);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const navigateLightbox = (direction: number) => {
    setLightboxIndex(prev => (prev + direction + publishedItems.length) % publishedItems.length);
  };

  return (
    <section
      id="creative"
      className="section"
      aria-labelledby="creative-heading"
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
            id="creative-heading"
            className="font-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-4"
          >
            Beyond the Code
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Code builds experience. Creativity gives it feeling.
          </p>
        </motion.div>

        {publishedItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: index * 0.1 }}
              >
                <CreativeCard item={item} onClick={() => openLightbox(item, index)} />
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[var(--text-muted)]">No creative work published yet.</p>
          </motion.div>
        )}

        <Modal
          isOpen={!!selectedItem}
          onClose={closeLightbox}
          size="full"
          showClose={true}
          closeOnOverlayClick={true}
        >
          {selectedItem && (
            <CreativeLightbox
              item={selectedItem}
              index={lightboxIndex}
              total={publishedItems.length}
              onClose={closeLightbox}
              onNavigate={navigateLightbox}
            />
          )}
        </Modal>
      </div>
    </section>
  );
}

function CreativeCard({ item, onClick }: { item: typeof creativeItems[0]; onClick: () => void }) {
  return (
    <Card className="h-full overflow-hidden cursor-pointer group" onClick={onClick}>
      <div className="relative aspect-video overflow-hidden bg-[var(--bg-elevated)]">
        {item.thumbnail && (
          <img
            src={item.thumbnail}
            alt={`${item.title} thumbnail`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
        {!item.thumbnail && (
          <div className="w-full h-full flex items-center justify-center text-[var(--text-muted)]">
            <svg viewBox="0 0 24 24" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="primary" size="lg" className="scale-95 group-hover:scale-100 transition-transform">
            <Play className="h-5 w-5 mr-2" />
            View Project
          </Button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-medium bg-black/60 backdrop-blur rounded text-white">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-lime)] transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
          {item.description}
        </p>
      </div>
    </Card>
  );
}

function CreativeLightbox({
  item,
  index,
  total,
  onClose,
  onNavigate
}: {
  item: typeof creativeItems[0];
  index: number;
  total: number;
  onClose: () => void;
  onNavigate: (direction: number) => void;
}) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') onNavigate(-1);
    if (e.key === 'ArrowRight') onNavigate(1);
    if (e.key === 'Escape') onClose();
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0} className="relative h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-2xl font-semibold text-[var(--text-primary)]">{item.title}</h2>
        <span className="text-sm text-[var(--text-muted)] font-mono">{index + 1} / {total}</span>
      </div>

      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        <button
          onClick={() => onNavigate(-1)}
          className="absolute left-4 p-2 rounded-full bg-[var(--bg-primary)]/80 backdrop-blur text-[var(--text-secondary)] hover:text-[var(--accent-lime)] transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {item.videoUrl ? (
          <video
            src={item.videoUrl}
            poster={item.poster || item.thumbnail}
            controls
            className="max-w-full max-h-[70vh] rounded-lg"
            preload="metadata"
          />
        ) : (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="max-w-full max-h-[70vh] rounded-lg object-contain"
          />
        )}

        <button
          onClick={() => onNavigate(1)}
          className="absolute right-4 p-2 rounded-full bg-[var(--bg-primary)]/80 backdrop-blur text-[var(--text-secondary)] hover:text-[var(--accent-lime)] transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-6 prose prose-invert max-w-3xl">
        <p className="text-[var(--text-secondary)]">{item.description}</p>
        <p className="text-sm text-[var(--text-muted)] mt-4">Category: {item.category}</p>
      </div>
    </div>
  );
}