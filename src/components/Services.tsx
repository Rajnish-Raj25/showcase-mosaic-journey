
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Layout, Database, Globe, Bot } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  pricing?: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Modern, responsive, and interactive user interfaces built with React and related frameworks.",
    icon: <Layout className="h-12 w-12 text-primary/70" />,
    features: [
      "Responsive web design",
      "Modern React applications",
      "UI/UX implementation",
      "Performance optimization"
    ],
    pricing: "From $50/hr"
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Robust and scalable API solutions using Node.js, NestJS, and other backend technologies.",
    icon: <Server className="h-12 w-12 text-primary/70" />,
    features: [
      "RESTful API development",
      "GraphQL integration",
      "Authentication systems",
      "Microservices architecture"
    ],
    pricing: "From $60/hr"
  },
  {
    id: 3,
    title: "Full Stack Solutions",
    description: "End-to-end web application development with seamless integration between frontend and backend.",
    icon: <Code className="h-12 w-12 text-primary/70" />,
    features: [
      "Complete web applications",
      "Custom CMS solutions",
      "E-commerce platforms",
      "SaaS products"
    ],
    pricing: "From $70/hr"
  },
  {
    id: 4,
    title: "Database Design",
    description: "Efficient database architecture, optimization, and management for your applications.",
    icon: <Database className="h-12 w-12 text-primary/70" />,
    features: [
      "Database modeling",
      "SQL & NoSQL solutions",
      "Data migration",
      "Performance tuning"
    ],
    pricing: "From $55/hr"
  },
  {
    id: 5,
    title: "Web Optimization",
    description: "Improve the performance, accessibility, and SEO of your existing web applications.",
    icon: <Globe className="h-12 w-12 text-primary/70" />,
    features: [
      "Performance audits",
      "SEO optimization",
      "Accessibility improvements",
      "Core Web Vitals enhancement"
    ],
    pricing: "From $45/hr"
  },
  {
    id: 6,
    title: "AI Integration",
    description: "Integrate AI and machine learning capabilities into your web applications.",
    icon: <Bot className="h-12 w-12 text-primary/70" />,
    features: [
      "Chatbots & virtual assistants",
      "Natural language processing",
      "Recommendation systems",
      "Predictive analytics"
    ],
    pricing: "From $80/hr"
  }
];


export default function Services() {
  const handleClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary/70 uppercase tracking-wider">Services</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold">Freelance Offerings</h2>
          <div className="mt-1 h-1 w-12 bg-primary/30 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-balance">
            I offer a range of development services tailored to meet your specific needs. 
            From front-end to back-end, I've got you covered with expert solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="opacity-0 animate-fade-in" style={{animationDelay: `${service.id * 100}ms`}}>
              <CardHeader className="space-y-1 flex items-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-secondary/50">{service.icon}</div>
                <CardTitle className="text-center">{service.title}</CardTitle>
                {service.pricing && (
                  <Badge variant="secondary" className="mx-auto mt-2">
                    {service.pricing}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center">{service.description}</CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="mr-2 mt-1 h-1 w-1 rounded-full bg-primary/50 inline-block"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={handleClick}>Request a Quote</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
