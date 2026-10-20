import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';
import { useAdminEntry } from '../../hooks/useAdminEntry';
import { SocialIcon } from '../ui/SocialIcons';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Creative', href: '#creative' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const brandRef = useRef<HTMLButtonElement>(null);
  const { handleBrandClick } = useAdminEntry({
    onTrigger: () => {
      const event = new CustomEvent('admin:trigger');
      window.dispatchEvent(event);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'creative', 'journey', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleBrandClickWrapper = useCallback(() => {
    handleBrandClick({} as React.MouseEvent);
  }, [handleBrandClick]);

  const handleBrandKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleBrandClick({} as React.MouseEvent);
    }
  }, [handleBrandClick]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]' : ''}`}
      role="banner"
    >
      <nav className="container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            ref={brandRef}
            onClick={handleBrandClickWrapper}
            onKeyDown={handleBrandKeyDown}
            className="font-heading text-xl md:text-2xl font-semibold text-[var(--text-primary)] hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] rounded"
            tabIndex={0}
            role="button"
            aria-label="Danush Kayala - Home"
            title="Triple-click for admin access"
          >
            DANUSH KAYALA
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === item.href
                    ? 'text-[var(--accent-lime)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
                {activeSection === item.href && (
                  <span className="absolute bottom-[-6px] left-0 right-0 h-0.5 bg-[var(--accent-lime)]" />
                )}
              </a>
            ))}
            <a
              href="/admin/login"
              className="btn btn-ghost text-xs hidden sm:inline-flex"
            >
              Admin
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${mobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-[var(--border-subtle)]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-2 py-2 text-base font-medium rounded transition-colors ${
                  activeSection === item.href
                    ? 'text-[var(--accent-lime)] bg-[var(--accent-lime)]/10'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[var(--border-subtle)]" />
            <div className="flex flex-wrap gap-2">
              {socialLinks
                .filter(s => s.visible)
                .map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost text-xs"
                    aria-label={social.label}
                  >
                    <SocialIcon platform={social.platform} />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}