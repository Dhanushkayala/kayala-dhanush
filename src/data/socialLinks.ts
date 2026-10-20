import type { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  { id: '1', platform: 'github', label: 'GitHub', url: 'https://github.com/Dhanushkayala', icon: 'github', visible: true, order: 1 },
  { id: '2', platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/dhanush-kayala-6973a135b', icon: 'linkedin', visible: true, order: 2 },
  { id: '3', platform: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@frostfuel-w8g', icon: 'youtube', visible: true, order: 3 },
  { id: '4', platform: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/frostfuel_official/', icon: 'instagram', visible: true, order: 4 },
  { id: '5', platform: 'email', label: 'Email', url: 'mailto:hello@danushkayala.dev', icon: 'mail', visible: true, order: 5 },
  { id: '6', platform: 'twitter', label: 'Twitter/X', url: 'https://twitter.com/danushkayala', icon: 'twitter', visible: false, order: 6 },
];