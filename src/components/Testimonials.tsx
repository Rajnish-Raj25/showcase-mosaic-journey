
import { Testimonial } from "@/types";
import { cn } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechStart Inc.",
    content: "John's work on our platform was exceptional. He delivered a high-quality solution that exceeded our expectations, all while maintaining clear communication throughout the project.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "Working with John was a pleasure. His technical expertise and problem-solving abilities helped us overcome complex challenges and deliver our product on time.",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "WebSolutions",
    content: "I've worked with many developers, but John stands out for his attention to detail and commitment to quality. He's now our go-to developer for all frontend projects.",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Lead Developer",
    company: "AppFusion",
    content: "John's contributions to our team were invaluable. His code is clean, well-documented, and his ability to mentor junior developers really strengthened our team.",
    image: "/placeholder.svg"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary/70 uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">What Clients Say</h2>
          <div className="mt-1 h-1 w-12 bg-primary/30 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={cn(
                "opacity-0", 
                index % 2 === 0 ? "animate-slide-in" : "animate-slide-in-right"
              )}
              style={{animationDelay: `${index * 200}ms`}}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start">
                  <QuoteIcon className="h-8 w-8 text-primary/30 mr-4 flex-shrink-0" />
                  <p className="text-muted-foreground italic">{testimonial.content}</p>
                </div>
                
                <div className="flex items-center pt-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
