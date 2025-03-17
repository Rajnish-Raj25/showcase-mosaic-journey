
import { ArrowDown, Download, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import TypeWriter from '@/components/TypeWriter';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center section-padding pt-24 md:pt-32 overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[20%] left-[25%] w-40 h-40 bg-primary/5 rounded-full filter blur-3xl opacity-50 animate-floating"></div>
        <div className="absolute top-[60%] right-[20%] w-60 h-60 bg-blue-500/5 rounded-full filter blur-3xl opacity-40 animate-floating animate-delay-200"></div>
        <div className="absolute bottom-[10%] left-[10%] w-32 h-32 bg-violet-500/5 rounded-full filter blur-3xl opacity-30 animate-floating animate-delay-500"></div>
      </div>

      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6 md:space-y-8 animate-fade-in">
            <div className="bg-primary/5 dark:bg-primary/10 text-primary/90 dark:text-primary/90 px-4 py-1.5 rounded-full text-sm font-medium inline-block">
              <TypeWriter 
                words={[
                  "Software Engineer",
                  "UI/UX Designer",
                  "Full-Stack Developer",
                  "React Specialist"
                ]}
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight md:leading-tight lg:leading-tight text-balance">
              <span className="block">Building digital</span>
              <span className="block">experiences that</span>
              <span className="block text-gradient">matter.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance">
              Full-Stack Developer specializing in React, NestJS, and crafting exceptional digital experiences that bring value to users.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                size="lg" 
                className="rounded-full transition-all duration-300 ease-in-out bg-primary text-white hover:bg-primary/90 hover:scale-105 dark:bg-primary dark:text-primary-foreground btn-3d"
              >
                <Send className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full border-primary/20 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 dark:border-primary/20 dark:hover:bg-primary/10"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-5 animate-fade-in animate-delay-300">
            <div className="relative animate-floating">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 blur opacity-50 dark:from-primary/40 dark:to-blue-500/30"></div>
              <div className="relative glass dark:dark-glass rounded-2xl overflow-hidden aspect-square">
                <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl"></div>
                <div className="absolute -left-16 -top-16 w-32 h-32 bg-blue-500/10 rounded-full filter blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Professional profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full animate-pulse-slow hidden md:block"></div>
            </div>
          </div>
        </div>
        
        <a 
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground hover:text-primary/80 transition-colors duration-300 animate-fade-in animate-delay-600"
        >
          <span className="mb-2">Scroll down</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
