import { useEffect, useRef } from 'react';
import { Skill } from '@/types';
import { cn } from '@/lib/utils';

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'JavaScript', level: 92, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'CSS/SCSS', level: 88, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'NestJS', level: 85, category: 'Backend' },
  { name: 'Express', level: 90, category: 'Backend' },
  { name: 'GraphQL', level: 80, category: 'Backend' },
  { name: 'REST APIs', level: 92, category: 'Backend' },
  
  // Database
  { name: 'PostgreSQL', level: 85, category: 'Database' },
  { name: 'MongoDB', level: 88, category: 'Database' },
  { name: 'Redis', level: 75, category: 'Database' },
  
  // DevOps
  { name: 'Docker', level: 80, category: 'DevOps' },
  { name: 'Git', level: 90, category: 'DevOps' },
  { name: 'CI/CD', level: 82, category: 'DevOps' },
  { name: 'AWS', level: 78, category: 'DevOps' },
  
  // Other
  { name: 'Testing', level: 85, category: 'Other' },
  { name: 'UI/UX Design', level: 80, category: 'Other' },
  { name: 'Agile/Scrum', level: 88, category: 'Other' },
];

const categories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Other'] as const;

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = document.querySelectorAll('.skill-progress-bar');
            bars.forEach((bar) => {
              bar.classList.add('animate-skill');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="section-padding"
    >
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary/70 uppercase tracking-wider">Expertise</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">Skills & Technologies</h2>
          <div className="mt-1 h-1 w-12 bg-primary/30 mx-auto rounded-full"></div>
        </div>
        
        <style jsx>{`
          .skill-progress-bar {
            width: 0;
            transition: width 1.5s ease-out;
          }
          
          .animate-skill {
            width: var(--skill-level);
          }
        `}</style>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <div key={category} className="opacity-0 animate-fade-in" style={{animationDelay: `${categories.indexOf(category) * 100}ms`}}>
                <h3 className="text-xl font-display font-semibold mb-6 flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                  {category}
                </h3>
                
                <div className="space-y-5">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary/80 rounded-full skill-progress-bar"
                          style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
