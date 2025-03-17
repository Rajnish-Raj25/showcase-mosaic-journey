
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Calendar, Tag, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Learn how to structure your React applications for scalability and maintainability...",
    date: "May 15, 2023",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Best Practices"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    excerpt: "Explore advanced type patterns in TypeScript to make your code more robust...",
    date: "April 22, 2023",
    readTime: "12 min read",
    tags: ["TypeScript", "Advanced", "Patterns"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Optimizing Web Performance",
    excerpt: "Techniques and strategies to improve your website's loading speed and performance...",
    date: "March 10, 2023",
    readTime: "10 min read",
    tags: ["Performance", "Optimization", "Web"],
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Mastering CSS Grid Layout",
    excerpt: "A comprehensive guide to creating complex layouts with CSS Grid...",
    date: "February 28, 2023",
    readTime: "15 min read",
    tags: ["CSS", "Layout", "Frontend"],
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "RESTful API Design Principles",
    excerpt: "Best practices for designing clean, intuitive, and effective RESTful APIs...",
    date: "January 15, 2023",
    readTime: "7 min read",
    tags: ["API", "REST", "Backend"],
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Introduction to Web Accessibility",
    excerpt: "Learn how to make your web applications accessible to all users...",
    date: "December 5, 2022",
    readTime: "9 min read",
    tags: ["Accessibility", "a11y", "Web"],
    image: "/placeholder.svg"
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  // Filter posts based on search and tag selection
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <>
      <Navbar />
      <main>
        <section className="py-16 px-4 bg-secondary/30">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Blog & Articles</h1>
              <p className="text-muted-foreground text-lg">
                Thoughts, tutorials, and insights on web development
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <Button 
                variant={selectedTag === null ? "default" : "outline"} 
                size="sm"
                onClick={() => setSelectedTag(null)}
              >
                All
              </Button>
              {allTags.map(tag => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <Card key={post.id} className="opacity-0 animate-fade-in" style={{animationDelay: `${post.id * 100}ms`}}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-muted-foreground mt-4">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedTag(null);
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
