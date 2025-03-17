
import { Skill } from '@/types';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from './ui/button';

const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 95, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'CSS/Sass', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'HTML5', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Express.js', level: 85, category: 'Backend' },
  { name: 'NestJS', level: 80, category: 'Backend' },
  { name: 'MongoDB', level: 80, category: 'Database' },
  { name: 'PostgreSQL', level: 75, category: 'Database' },
  { name: 'GraphQL', level: 70, category: 'Backend' },
  { name: 'Docker', level: 70, category: 'DevOps' },
  { name: 'Git', level: 90, category: 'DevOps' },
  { name: 'AWS', level: 65, category: 'DevOps' },
  { name: 'CI/CD', level: 75, category: 'DevOps' },
  { name: 'Jest', level: 80, category: 'Other' },
  { name: 'Redux', level: 85, category: 'Frontend' },
  { name: 'Firebase', level: 75, category: 'Database' }
];

type CategoryType = 'All' | 'Frontend' | 'Backend' | 'DevOps' | 'Database' | 'Other';

export default function Skills() {
  const [category, setCategory] = useState<CategoryType>('All');
  
  const filteredSkills = category === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === category);

  return (
    <section id="skills" className="section-padding gradient-bg dark:bg-slate-900/30">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary/70 uppercase tracking-wider">My Expertise</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">Technical Skills</h2>
          <div className="mt-1 h-1 w-12 bg-primary/30 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['All', 'Frontend', 'Backend', 'DevOps', 'Database', 'Other'] as const).map((cat) => (
            <Button 
              key={cat}
              variant={category === cat ? "default" : "outline"} 
              size="sm"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full transition-all duration-300",
                category === cat ? "shadow-md" : "dark:border-white/10 dark:hover:bg-white/5"
              )}
            >
              {cat}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => (
            <div key={skill.name} 
              className="opacity-0 animate-fade-in card-shadow p-4 rounded-xl bg-white dark:bg-slate-900/50 dark:backdrop-blur-md dark:border dark:border-white/5"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2 dark:bg-slate-800" />
            </div>
          ))}
        </div>
        
        <style>
          {`
            @keyframes skillAnimation {
              0% { transform: translateX(-10px); opacity: 0; }
              100% { transform: translateX(0); opacity: 1; }
            }
          `}
        </style>
      </div>
    </section>
  );
}
