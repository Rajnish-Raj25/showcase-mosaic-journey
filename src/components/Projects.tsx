
import { useState } from 'react';
import { Project } from '@/types';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and secure checkout process.',
    image: 'https://images.unsplash.com/photo-1593642702909-dec73df255d7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity tool for organizing tasks with features like drag-and-drop, priority levels, and team collaboration.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'TypeScript', 'Firebase', 'Redux'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    featured: true
  },
  {
    id: 3,
    title: 'Finance Dashboard',
    description: 'An analytics dashboard for financial data visualization with real-time updates and interactive charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'Tailwind CSS', 'Chart.js', 'API Integration'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    featured: true
  },
  {
    id: 4,
    title: 'Social Media Platform',
    description: 'A community platform with user profiles, content sharing, and real-time notifications.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    featured: false
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'A weather application providing current conditions and forecasts with a clean, intuitive interface.',
    image: 'https://images.unsplash.com/photo-1562155847-c5340f38d7cb?q=80&w=2108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['JavaScript', 'CSS', 'Weather API', 'Geolocation'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    featured: false
  },
  {
    id: 6,
    title: 'Portfolio Generator',
    description: 'A tool for developers to create professional portfolios with customizable templates and sections.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com',
    featured: false
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary/70 uppercase tracking-wider">Showcase</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">Recent Projects</h2>
          <div className="mt-1 h-1 w-12 bg-primary/30 mx-auto rounded-full"></div>
          
          <div className="mt-8 flex justify-center gap-3">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              className={cn(
                "rounded-full transition-all duration-300",
                filter === 'all' ? 'bg-primary text-white' : 'border-primary/20 hover:border-primary/50 hover:bg-primary/5'
              )}
              onClick={() => setFilter('all')}
            >
              All Projects
            </Button>
            <Button
              variant={filter === 'featured' ? 'default' : 'outline'}
              size="sm"
              className={cn(
                "rounded-full transition-all duration-300",
                filter === 'featured' ? 'bg-primary text-white' : 'border-primary/20 hover:border-primary/50 hover:bg-primary/5'
              )}
              onClick={() => setFilter('featured')}
            >
              Featured
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="opacity-0 animate-fade-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden h-full flex flex-col transition-transform duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="project-image-wrapper h-48 md:h-52">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs font-medium bg-secondary/50 px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs font-medium bg-secondary/50 px-2.5 py-1 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                  
                  <div className="flex gap-3 mt-auto">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 text-sm"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    )}
                    
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-full border-primary/20 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
