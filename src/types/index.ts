export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  thumbnail: string;
  gallery?: string[];
  videoPreview?: string;
  technologies: string[];
  status: 'completed' | 'prototype' | 'research' | 'in-progress';
  publicationStatus: 'draft' | 'published' | 'archived';
  featured: boolean;
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudy?: string;
  createdAt: string;
  updatedAt: string;
  order: number;
}

export interface Skill {
  id: string;
  name: string;
  category: 'development' | 'ai-ml' | 'creative' | 'exploring';
  description?: string;
  learning: boolean;
  order: number;
}

export interface ExperienceEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  projectLink?: string;
  published: boolean;
  order: number;
}

export interface CreativeItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  poster?: string;
  published: boolean;
  order: number;
}

export interface SocialLink {
  id: string;
  platform: 'github' | 'linkedin' | 'youtube' | 'email' | 'twitter' | 'instagram' | 'dribbble' | 'behance' | 'other';
  label: string;
  url: string;
  icon: string;
  visible: boolean;
  order: number;
}

export interface SiteSettings {
  hero: {
    label: string;
    headline: string;
    supportingHeadline: string;
    supportingParagraph: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    availability: {
      enabled: boolean;
      text: string;
    };
    technicalStatus: {
      location: string;
      currentFocus: string;
      currentProject: string;
      preferredTechnologies: string[];
    };
  };
  about: {
    headline: string;
    supportingText: string;
    biography: string;
    background: string;
    interests: string;
    currentLearning: string;
    personalStatement: string;
    profileImage?: string;
  };
  appearance: {
    accentColor: string;
    backgroundTheme: 'dark' | 'light' | 'system';
    typography: 'default' | 'editorial' | 'technical';
    homepageFeaturedProject?: string;
    sectionVisibility: Record<string, boolean>;
    footerText: string;
  };
  seo: {
    pageTitle: string;
    metaDescription: string;
    ogImage: string;
    canonicalUrl: string;
    indexation: 'index' | 'noindex';
  };
  contact: {
    publicEmail: string;
    contactFormVisible: boolean;
    contactFormDestination: string;
    availabilityStatus: string;
    projectInquiryInfo: string;
  };
}

export interface AdminUser {
  id: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
}