
import { Button } from '@/components/ui/button';
import { Experience } from '@/types';
import { cn } from '@/lib/utils';
import { Code, Github, Linkedin, Twitter } from 'lucide-react';

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Tech Innovations Inc.',
    position: 'Senior Software Engineer',
    period: '2021 - Present',
    description: [
      'Leading the development of the company\'s flagship product using React and NestJS',
      'Implementing complex features while ensuring code quality and performance',
      'Mentoring junior developers and conducting code reviews'
    ]
  },
  {
    id: 2,
    company: 'Digital Solutions Ltd.',
    position: 'Full Stack Developer',
    period: '2019 - 2021',
    description: [
      'Developed and maintained multiple web applications using JavaScript frameworks',
      'Collaborated with design team to implement responsive UI/UX',
      'Participated in daily stand-ups and sprint planning'
    ]
  },
  {
    id: 3,
    company: 'CreativeTech',
    position: 'Frontend Developer',
    period: '2017 - 2019',
    description: [
      'Built responsive web interfaces using HTML, CSS, and JavaScript',
      'Worked with React to develop interactive user interfaces',
      'Integrated RESTful APIs and optimized web performance'
    ]
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary/70 uppercase tracking-wider">About Me</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">The journey so far</h2>
          <div className="mt-1 h-1 w-12 bg-primary/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 opacity-0 animate-fade-in" style={{animationDelay: '100ms'}}>
            <h3 className="text-2xl font-display font-semibold">Hello, I'm <span className="text-primary">John Doe</span></h3>
            
            <p className="text-muted-foreground text-balance">
              I'm a passionate software engineer with over 5 years of experience in building web applications. 
              My expertise lies in creating intuitive, efficient, and scalable solutions that solve real-world problems.
            </p>
            
            <p className="text-muted-foreground text-balance">
              I specialize in modern JavaScript frameworks like React for frontend and Node.js/NestJS for backend development. 
              My approach combines technical expertise with creative problem-solving to deliver exceptional digital experiences.
            </p>
            
            <p className="text-muted-foreground text-balance">
              Besides coding, I enjoy contributing to open-source projects, writing technical articles, and exploring new technologies. 
              I'm also passionate about poetry and ghazals in my free time.
            </p>
            
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Code className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{animationDelay: '300ms'}}>
            <h3 className="text-xl font-display font-semibold mb-6">Experience</h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={cn(
                    "relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-primary/20",
                    index === experiences.length - 1 ? "" : "pb-8"
                  )}
                >
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[5px]"></div>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-x-2">
                      <h4 className="text-lg font-semibold">{exp.position}</h4>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    
                    <p className="text-muted-foreground/90 font-medium">{exp.company}</p>
                    
                    <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1 w-1 rounded-full bg-primary/50 inline-block"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
