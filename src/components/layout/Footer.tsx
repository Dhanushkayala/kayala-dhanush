import { socialLinks } from '../../data/socialLinks';
import { siteSettings } from '../../data/siteSettings';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const visibleSocials = socialLinks.filter(s => s.visible);

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]" role="contentinfo">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <p className="font-heading text-xl md:text-2xl font-semibold text-[var(--text-primary)]">
              DANUSH KAYALA
            </p>
            <p className="mt-4 text-[var(--text-secondary)] max-w-xs">
              {siteSettings.appearance.footerText}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-medium text-[var(--text-primary)] mb-4">Navigate</h3>
            <ul className="space-y-2">
              {['hero', 'about', 'projects', 'skills', 'creative', 'journey', 'contact'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-lime)] transition-colors"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-medium text-[var(--text-primary)] mb-4">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {visibleSocials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-xs"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            &copy; {currentYear} Danush Kayala. All rights reserved.
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            Built with React, TypeScript, and curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
}