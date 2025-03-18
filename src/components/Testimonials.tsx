
import { Testimonial } from "@/types";
import { cn } from "@/lib/utils";
import { QuoteIcon, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState, useRef } from "react";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechStart Inc.",
    content: "Rajnish's work on our platform was exceptional. He delivered a high-quality solution that exceeded our expectations, all while maintaining clear communication throughout the project.",
    image: "/placeholder.svg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "Working with Rajnish was a pleasure. His technical expertise and problem-solving abilities helped us overcome complex challenges and deliver our product on time.",
    image: "/placeholder.svg",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "WebSolutions",
    content: "I've worked with many developers, but Rajnish stands out for his attention to detail and commitment to quality. He's now our go-to developer for all frontend projects.",
    image: "/placeholder.svg",
    rating: 4
  },
  {
    id: 4,
    name: "David Kim",
    role: "Lead Developer",
    company: "AppFusion",
    content: "Rajnish's contributions to our team were invaluable. His code is clean, well-documented, and his ability to mentor junior developers really strengthened our team.",
    image: "/placeholder.svg",
    rating: 5
  }
];

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // This prevents hydration mismatch between server and client rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Set up event listener for slide changes
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    // Call once to set initial value
    onSelect();

    return () => {
      api?.off("select", onSelect);
    };
  }, [api]);

  // Handle auto-play functionality
  useEffect(() => {
    if (!api || !autoPlay) {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
      return;
    }

    // Set up auto-play interval
    autoPlayIntervalRef.current = setInterval(() => {
      if (currentSlide === testimonials.length - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
        autoPlayIntervalRef.current = null;
      }
    };
  }, [api, autoPlay, currentSlide]);

  // Handle slider change
  const handleSliderChange = (value: number[]) => {
    const slideIndex = value[0];
    api?.scrollTo(slideIndex);
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  return (
    <section id="testimonials" className="section-padding bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary/70 uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">What Clients Say</h2>
          <div className="mt-1 h-1 w-12 bg-primary/30 mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground">Hear what others have to say about working with Rajnish Raj</p>
        </div>
        
        {mounted && (
          <div 
            className="max-w-4xl mx-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Carousel 
              className="w-full" 
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/1 lg:basis-1/1 pl-4 pr-4 py-8">
                    <div className="p-1">
                      <Card className="border border-primary/10 dark:bg-slate-900/50 dark:backdrop-blur-md dark:border-white/5 shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden group">
                        <CardContent className="p-6 space-y-4 relative">
                          <div className="absolute top-0 right-0 opacity-5 text-primary">
                            <QuoteIcon className="h-24 w-24 group-hover:scale-110 transition-transform duration-500 rotate-6" />
                          </div>
                          
                          {/* Rating stars */}
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={cn(
                                  "h-4 w-4",
                                  i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300 dark:text-gray-600"
                                )}
                              />
                            ))}
                          </div>
                          
                          <div className="flex items-start">
                            <QuoteIcon className="h-8 w-8 text-primary/30 mr-4 flex-shrink-0" />
                            <p className="text-muted-foreground italic">{testimonial.content}</p>
                          </div>
                          
                          <div className="flex items-center pt-4 border-t border-primary/5">
                            <Avatar className="h-14 w-14 mr-4 ring-2 ring-primary/10 ring-offset-2 ring-offset-background animate-pulse-slow">
                              <AvatarImage src={testimonial.image} alt={testimonial.name} />
                              <AvatarFallback className="bg-primary/10 text-primary">{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-semibold">{testimonial.name}</h4>
                              <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Auto-play indicator */}
              <div className="flex items-center justify-center mt-6 gap-2">
                <div className="text-sm text-muted-foreground">Auto-play:</div>
                <div className={cn(
                  "h-2 w-2 rounded-full transition-colors duration-300",
                  autoPlay ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"
                )}></div>
              </div>
              
              {/* Slider for testimonial navigation */}
              <div className="mt-4 max-w-md mx-auto px-8">
                <Slider
                  defaultValue={[0]}
                  value={[currentSlide]}
                  max={testimonials.length - 1}
                  step={1}
                  onValueChange={handleSliderChange}
                  className="cursor-pointer"
                />
              </div>
              
              {/* Custom dot indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      currentSlide === index 
                        ? "bg-primary scale-125" 
                        : "bg-primary/30 hover:bg-primary/50"
                    )}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="relative static left-0 translate-y-0 dark:border-white/10 dark:hover:bg-white/5 hover:bg-primary/5 hover:text-primary" />
                <CarouselNext className="relative static right-0 translate-y-0 dark:border-white/10 dark:hover:bg-white/5 hover:bg-primary/5 hover:text-primary" />
              </div>
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
}
