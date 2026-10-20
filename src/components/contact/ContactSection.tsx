import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2, Mail } from 'lucide-react';
import { siteSettings } from '../../data/siteSettings';
import { socialLinks } from '../../data/socialLinks';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card, CardContent } from '../ui/Card';
import { SocialIcon } from '../ui/SocialIcons';

export function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { contact } = siteSettings;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormState('submitting');

    try {
      if (contact.contactFormDestination.startsWith('mailto:')) {
        const mailtoUrl = `mailto:${contact.publicEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        window.location.href = mailtoUrl;
        setFormState('success');
      } else {
        const response = await fetch(contact.contactFormDestination, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Submission failed');
        setFormState('success');
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setFormState('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:pr-12"
          >
            <span className="inline-block font-mono text-xs text-[var(--accent-lime)] tracking-widest uppercase mb-4">
              Get in Touch
            </span>
            <h2
              id="contact-heading"
              className="font-heading text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-6 leading-[1.1]"
            >
              {contact.publicEmail ? 'Have idea worth building?' : 'Let\'s Connect'}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              {contact.availabilityStatus || "I'm interested in meaningful projects, creative collaborations, and opportunities to learn by building."}
            </p>

            <div className="space-y-6">
              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <h3 className="font-medium text-[var(--text-primary)] mb-4">Direct Contact</h3>
                <a
                  href={`mailto:${contact.publicEmail}`}
                  className="flex items-center gap-3 text-lg font-medium text-[var(--text-primary)] hover:text-[var(--accent-lime)] transition-colors group"
                >
                  <Mail className="h-6 w-6 text-[var(--accent-lime)] group-hover:scale-110 transition-transform" />
                  {contact.publicEmail}
                </a>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{contact.projectInquiryInfo}</p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <h3 className="font-medium text-[var(--text-primary)] mb-4">Social</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.filter(s => s.visible).map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent-lime)] hover:border-[var(--accent-lime)]/50 transition-all"
                      aria-label={social.label}
                    >
                      <SocialIcon platform={social.platform} />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-6">
                  Send a Message
                </h3>

                {formState === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm opacity-80">I'll get back to you within 48 hours.</p>
                    </div>
                  </motion.div>
                )}

                {formState === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400"
                  >
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Failed to send message</p>
                      <p className="text-sm opacity-80">Please try again or email me directly.</p>
                    </div>
                  </motion.div>
                )}

                {formState !== 'success' && (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <Input
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      placeholder="Your name"
                      required
                      disabled={formState === 'submitting'}
                    />

                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      placeholder="your@email.com"
                      required
                      disabled={formState === 'submitting'}
                    />

                    <Input
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      error={errors.subject}
                      placeholder="Project inquiry, collaboration, etc."
                      required
                      disabled={formState === 'submitting'}
                    />

                    <div className="relative">
                      <label htmlFor="message" className="label">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`input min-h-[140px] resize-y ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/15' : ''}`}
                        placeholder="Tell me about your project, timeline, and what you're looking for..."
                        required
                        disabled={formState === 'submitting'}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      loading={formState === 'submitting'}
                    >
                      <Send className="h-4 w-4" />
                      {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}