
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll reveal animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-fade-in');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = (
          rect.top <= (window.innerHeight * 0.85) && 
          rect.bottom >= 0
        );
        
        if (isVisible) {
          element.classList.add('opacity-100');
        }
      });
    };
    
    // Initial check
    animateOnScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
