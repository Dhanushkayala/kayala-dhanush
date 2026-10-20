import type { ExperienceEntry } from '../types';

export const journey: ExperienceEntry[] = [
  {
    id: '1',
    date: '2024-10',
    title: 'Portfolio v2 Development',
    description: 'Building a premium personal portfolio with React 19, TypeScript, Tailwind CSS v4, and Framer Motion. Includes hidden admin dashboard with Supabase integration for content management.',
    projectLink: '#projects',
    published: true,
    order: 1
  },
  {
    id: '2',
    date: '2024-09',
    title: 'NXTLEARN Browser Extension',
    description: 'Developed a learning companion browser extension using React 19, TypeScript, Vite, and Chrome Extension Manifest V3. Features course analysis, topic summaries, and structured study planning.',
    projectLink: '#projects',
    published: true,
    order: 2
  },
  {
    id: '3',
    date: '2024-08',
    title: 'AI Knowledge Assistant (RAG System)',
    description: 'Built a Retrieval-Augmented Generation system with Python, LangChain, Pinecone, and FastAPI. Processes documents, creates embeddings, and generates grounded responses with citations.',
    projectLink: '#projects',
    published: true,
    order: 3
  },
  {
    id: '4',
    date: '2024-06',
    title: 'Creative Coding Experiments',
    description: 'Ongoing exploration of Three.js, WebGL shaders, GSAP animations, and Canvas API. Building interactive visual experiments and generative art pieces.',
    projectLink: '#projects',
    published: true,
    order: 4
  },
  {
    id: '5',
    date: '2024-03',
    title: 'FROSTFUEL Creative Studio Launch',
    description: 'Launched FROSTFUEL creative studio brand with complete identity system: logo animation, color palette, typography scale (Space Grotesk/Inter/JetBrains Mono), and motion guidelines.',
    projectLink: '#creative',
    published: true,
    order: 5
  },
  {
    id: '6',
    date: '2024-03',
    title: 'Short-Form Content Series Started',
    description: 'Began weekly short-form video series on YouTube Shorts/Reels/TikTok covering creative workflows, tool tutorials, and behind-the-scenes process. High-retention editing style.',
    projectLink: '#creative',
    published: true,
    order: 6
  },
  {
    id: '7',
    date: '2024-01',
    title: 'Started Computer Science Degree',
    description: 'Enrolled in Computer Science program focusing on software engineering, algorithms, and machine learning foundations.',
    published: true,
    order: 7
  },
  {
    id: '8',
    date: '2023-12',
    title: 'First Freelance Video Project',
    description: 'Delivered first paid video editing project - a cinematic brand film for a local business. Sparked interest in combining technical skills with creative storytelling.',
    projectLink: '#creative',
    published: true,
    order: 8
  },
  {
    id: '9',
    date: '2023-08',
    title: 'Discovered Web Development',
    description: 'Started learning HTML, CSS, JavaScript through online resources. Built first static websites and fell in love with creating interactive web experiences.',
    published: true,
    order: 9
  }
];