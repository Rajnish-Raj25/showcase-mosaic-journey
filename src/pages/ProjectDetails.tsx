
import { useParams, useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Project } from '@/types';

// Sample project data (in a real app, this would come from an API)
const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes product management, shopping cart, payment processing, and order management functionalities.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/johndoe/ecommerce",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks and projects. Features include task creation, assignment, due dates, progress tracking, and team collaboration tools.",
    image: "/placeholder.svg",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    liveLink: "https://example.com/taskapp",
    githubLink: "https://github.com/johndoe/taskapp",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "An interactive weather dashboard that provides real-time weather information, forecasts, and historical data visualization for locations worldwide.",
    image: "/placeholder.svg",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
    githubLink: "https://github.com/johndoe/weather",
    featured: false
  }
];

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === Number(id));
  
  if (!project) {
    return (
      <>
        <Navbar />
        <main className="py-16 px-4">
          <div className="container-width">
            <Alert className="max-w-2xl mx-auto">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Project not found</AlertTitle>
              <AlertDescription>
                The project you're looking for doesn't exist or has been removed.
              </AlertDescription>
            </Alert>
            <div className="flex justify-center mt-8">
              <Button onClick={() => navigate('/')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="py-16 px-4">
          <div className="container-width">
            <Button 
              variant="ghost" 
              className="mb-8" 
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">{project.title}</h1>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                
                <div className="aspect-video overflow-hidden rounded-lg mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-2xl font-display font-semibold">Project Overview</h2>
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <h2 className="text-2xl font-display font-semibold">Technical Approach</h2>
                  <p className="text-muted-foreground">
                    This project was built using a combination of {project.technologies.join(', ')} to create 
                    a robust and scalable solution. The frontend was developed with a focus on user experience 
                    and responsive design, while the backend prioritized security and performance.
                  </p>
                  
                  <h2 className="text-2xl font-display font-semibold">Challenges & Solutions</h2>
                  <p className="text-muted-foreground">
                    One of the key challenges in this project was optimizing performance for large data sets. 
                    This was addressed through efficient data structures and lazy loading techniques. Additionally, 
                    ensuring cross-browser compatibility required careful testing and CSS fallbacks.
                  </p>
                </div>
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Project Links</h3>
                      <div className="space-y-2">
                        {project.liveLink && (
                          <Button variant="outline" className="w-full justify-start" asChild>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubLink && (
                          <Button variant="outline" className="w-full justify-start" asChild>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Source Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Interested in a similar project?</h3>
                      <Button className="w-full">Contact Me</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Related Projects</h3>
                    <div className="space-y-4">
                      {projects
                        .filter(p => p.id !== project.id)
                        .slice(0, 2)
                        .map(relatedProject => (
                          <div key={relatedProject.id} className="flex items-start gap-3">
                            <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded">
                              <img 
                                src={relatedProject.image} 
                                alt={relatedProject.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium leading-tight">{relatedProject.title}</h4>
                              <Button 
                                variant="link" 
                                className="h-auto p-0 text-sm" 
                                onClick={() => navigate(`/project/${relatedProject.id}`)}
                              >
                                View Project
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
