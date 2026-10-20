import type { Skill } from '../types';

export const skills: Skill[] = [
  // Development
  { id: 'dev-1', name: 'React', category: 'development', learning: false, order: 1 },
  { id: 'dev-2', name: 'JavaScript', category: 'development', learning: false, order: 2 },
  { id: 'dev-3', name: 'TypeScript', category: 'development', learning: false, order: 3 },
  { id: 'dev-4', name: 'Tailwind CSS', category: 'development', learning: false, order: 4 },
  { id: 'dev-5', name: 'Node.js', category: 'development', learning: false, order: 5 },
  { id: 'dev-6', name: 'Python', category: 'development', learning: false, order: 6 },
  { id: 'dev-7', name: 'HTML/CSS', category: 'development', learning: false, order: 7 },
  { id: 'dev-8', name: 'Git & GitHub', category: 'development', learning: false, order: 8 },
  { id: 'dev-9', name: 'Vite', category: 'development', learning: false, order: 9 },
  { id: 'dev-10', name: 'REST APIs', category: 'development', learning: false, order: 10 },

  // AI and Machine Learning
  { id: 'aiml-1', name: 'Large Language Models', category: 'ai-ml', learning: false, order: 1 },
  { id: 'aiml-2', name: 'Retrieval-Augmented Generation', category: 'ai-ml', learning: false, order: 2 },
  { id: 'aiml-3', name: 'Embeddings & Vector Databases', category: 'ai-ml', learning: false, order: 3 },
  { id: 'aiml-4', name: 'Model Quantization', category: 'ai-ml', learning: false, order: 4 },
  { id: 'aiml-5', name: 'Knowledge Distillation', category: 'ai-ml', learning: false, order: 5 },
  { id: 'aiml-6', name: 'AI Application Development', category: 'ai-ml', learning: false, order: 6 },
  { id: 'aiml-7', name: 'LangChain', category: 'ai-ml', learning: false, order: 7 },
  { id: 'aiml-8', name: 'PyTorch', category: 'ai-ml', learning: false, order: 8 },

  // Creative
  { id: 'cre-1', name: 'DaVinci Resolve', category: 'creative', learning: false, order: 1 },
  { id: 'cre-2', name: 'Video Editing', category: 'creative', learning: false, order: 2 },
  { id: 'cre-3', name: 'Color Grading', category: 'creative', learning: false, order: 3 },
  { id: 'cre-4', name: 'Motion Design', category: 'creative', learning: false, order: 4 },
  { id: 'cre-5', name: 'Visual Storytelling', category: 'creative', learning: false, order: 5 },
  { id: 'cre-6', name: 'Adobe After Effects', category: 'creative', learning: false, order: 6 },
  { id: 'cre-7', name: 'Premiere Pro', category: 'creative', learning: false, order: 7 },
  { id: 'cre-8', name: 'Cinema 4D', category: 'creative', learning: false, order: 8 },
  { id: 'cre-9', name: 'Figma', category: 'creative', learning: false, order: 9 },

  // Exploring
  { id: 'exp-1', name: 'Three.js / WebGL', category: 'exploring', learning: true, order: 1 },
  { id: 'exp-2', name: 'Rust', category: 'exploring', learning: true, order: 2 },
  { id: 'exp-3', name: 'Electron / Tauri', category: 'exploring', learning: true, order: 3 },
  { id: 'exp-4', name: 'PostgreSQL / Supabase', category: 'exploring', learning: true, order: 4 },
  { id: 'exp-5', name: 'GSAP', category: 'exploring', learning: true, order: 5 },
  { id: 'exp-6', name: 'Shader Programming', category: 'exploring', learning: true, order: 6 },
];