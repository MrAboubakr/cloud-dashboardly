
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-32">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <div className="flex flex-col space-y-8 max-w-xl animate-fade-in">
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                Introducing the Next Generation SaaS Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Simplicity Meets <span className="text-accent">Power</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-4">
                Streamline your workflow with our intuitive SaaS platform. Built for teams who value elegant design and powerful functionality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/signup">
                <Button size="lg" className="relative overflow-hidden group">
                  <span className="relative z-10">Get Started</span>
                  <span className="absolute inset-0 bg-accent group-hover:translate-x-full transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="relative h-[400px] md:h-[450px] lg:h-[500px] w-full">
            {/* Floating app UI mockup */}
            <div className={cn(
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
              "w-[90%] max-w-md h-auto aspect-[3/2]",
              "bg-card rounded-xl card-shadow animate-float",
              "overflow-hidden border border-border/40"
            )}>
              <div className="flex flex-col h-full">
                {/* Dashboard mockup header */}
                <div className="h-10 bg-muted/30 border-b border-border/40 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                  </div>
                </div>
                
                {/* Dashboard mockup content */}
                <div className="flex flex-1 p-4">
                  {/* Sidebar */}
                  <div className="w-16 bg-secondary rounded-md mr-3">
                    <div className="flex flex-col items-center pt-4 space-y-6">
                      <div className="w-8 h-1 bg-muted-foreground/40 rounded"></div>
                      <div className="w-6 h-6 rounded-full bg-accent/80"></div>
                      <div className="w-6 h-6 rounded-full bg-muted-foreground/30"></div>
                      <div className="w-6 h-6 rounded-full bg-muted-foreground/30"></div>
                    </div>
                  </div>
                  
                  {/* Main content */}
                  <div className="flex-1 flex flex-col space-y-3">
                    {/* Stats cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-16 bg-accent/10 rounded-md"></div>
                      <div className="h-16 bg-muted/30 rounded-md"></div>
                    </div>
                    
                    {/* Chart area */}
                    <div className="flex-1 bg-muted/20 rounded-md p-2">
                      <div className="h-4 w-1/3 bg-muted-foreground/20 rounded mb-3"></div>
                      <div className="flex items-end h-[60%] gap-1 pt-4">
                        <div className="h-[30%] w-[8%] bg-accent/40 rounded-t"></div>
                        <div className="h-[60%] w-[8%] bg-accent/60 rounded-t"></div>
                        <div className="h-[40%] w-[8%] bg-accent/50 rounded-t"></div>
                        <div className="h-[80%] w-[8%] bg-accent/70 rounded-t"></div>
                        <div className="h-[50%] w-[8%] bg-accent/60 rounded-t"></div>
                        <div className="h-[70%] w-[8%] bg-accent/65 rounded-t"></div>
                        <div className="h-[90%] w-[8%] bg-accent/80 rounded-t"></div>
                      </div>
                    </div>
                    
                    {/* Bottom section */}
                    <div className="h-20 bg-muted/30 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
