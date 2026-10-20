import type { SiteSettings } from '../types';

export const siteSettings: SiteSettings = {
  hero: {
    label: 'INDEPENDENTLY BUILDING · CREATIVELY THINKING',
    headline: "Hey, I'm Danush.",
    supportingHeadline: 'Creative Developer · AI/ML Enthusiast · Video Editor · Future Software Engineer',
    supportingParagraph: 'Building at the intersection of code, AI, and creativity. Currently exploring intelligent applications, cinematic storytelling, and modern web experiences.',
    primaryCtaLabel: 'Explore My Work',
    primaryCtaHref: '#projects',
    secondaryCtaLabel: "Let's Connect",
    secondaryCtaHref: '#contact',
    availability: {
      enabled: true,
      text: 'Open to meaningful projects and collaborations'
    },
    technicalStatus: {
      location: 'Based in India',
      currentFocus: 'AI/ML & Creative Development',
      currentProject: 'Portfolio v2 + RAG Systems',
      preferredTechnologies: ['React', 'TypeScript', 'Python', 'DaVinci Resolve', 'Tailwind CSS']
    }
  },
  about: {
    headline: 'Curious by default. Building by choice.',
    supportingText: "I'm Danush Kayala, a creative developer exploring the intersection of software development, artificial intelligence, and visual storytelling.\n\nMy journey started with web technologies and expanded into AI/ML research and cinematic video editing. I enjoy deconstructing complex problems, experimenting with emerging technologies, and turning ideas into tangible projects.\n\nCurrently focused on building intelligent applications, refining creative workflows, and developing the technical depth needed to ship products that are both useful and memorable.",
    biography: 'Creative Developer | AI/ML Enthusiast | Video Editor | Future Software Engineer',
    background: 'Self-taught developer who started with web technologies and expanded into AI/ML and creative tools. Building the FROSTFUEL creative studio brand.',
    interests: 'Intelligent applications, modern web experiences, cinematic video editing, generative AI, model optimization, RAG systems, creative coding.',
    currentLearning: 'Advanced RAG systems, model compression techniques, Three.js/WebGL, Rust, GSAP, Shader Programming.',
    personalStatement: 'I believe the best products come from deep technical understanding combined with creative intuition. Every project is an opportunity to learn something new and push boundaries.',
    profileImage: '/profile.jpg'
  },
  appearance: {
    accentColor: '#C6FF5F',
    backgroundTheme: 'dark',
    typography: 'default',
    homepageFeaturedProject: '1',
    sectionVisibility: {
      hero: true,
      projects: true,
      about: true,
      skills: true,
      creative: true,
      journey: true,
      contact: true
    },
    footerText: 'Made with curiosity, code, and creative obsession. © 2024 Danush Kayala'
  },
  seo: {
    pageTitle: 'Danush Kayala | Creative Developer & AI Enthusiast',
    metaDescription: 'Explore projects, AI experiments, software development work, and cinematic video edits of Danush Kayala. Creative Developer | AI/ML Enthusiast | Video Editor.',
    ogImage: '/og-image.jpg',
    canonicalUrl: 'https://danushkayala.dev',
    indexation: 'index'
  },
  contact: {
    publicEmail: 'hello@danushkayala.dev',
    contactFormVisible: true,
    contactFormDestination: 'mailto:hello@danushkayala.dev',
    availabilityStatus: 'Open to meaningful projects and collaborations',
    projectInquiryInfo: 'Tell me about your project, timeline, and what you\'re looking for. I\'ll get back to you within 48 hours.'
  }
};