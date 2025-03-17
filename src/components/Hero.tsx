
import { ArrowDown, Download, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center section-padding pt-24 md:pt-32 overflow-hidden"
    >
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6 md:space-y-8 animate-fade-in">
            <span className="bg-primary/5 text-primary/90 px-4 py-1.5 rounded-full text-sm font-medium inline-block">
              Software Engineer
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight md:leading-tight lg:leading-tight text-balance">
              <span className="block">Building digital</span>
              <span className="block">experiences that</span>
              <span className="block">matter.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance">
              Full-Stack Developer specializing in React, NestJS, and crafting exceptional digital experiences that bring value to users.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="rounded-full transition-all duration-300 ease-in-out bg-primary text-white hover:bg-primary/90 hover:scale-105">
                <Send className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
              
              <Button size="lg" variant="outline" className="rounded-full border-primary/20 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-5 animate-fade-in animate-delay-300">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 blur opacity-50"></div>
              <div className="relative glass rounded-2xl overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Professional profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>
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
