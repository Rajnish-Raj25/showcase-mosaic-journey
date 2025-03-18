
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollToTop from "@/components/ScrollToTop";
import ChatAssistant from "@/components/ChatAssistant"; 
import { useState, useEffect } from "react";

export default function Index() {
  const [mounted, setMounted] = useState(false);

  // This is to prevent hydration mismatch between server and client rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Navbar />
      {mounted && (
        <div className="fixed right-6 top-24 z-50 flex items-center justify-center">
          <ThemeToggle />
        </div>
      )}
      <main className="bg-background text-foreground transition-colors duration-300">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ChatAssistant />
    </>
  );
}
