
export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Database' | 'Other';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  pricing?: string;
}
