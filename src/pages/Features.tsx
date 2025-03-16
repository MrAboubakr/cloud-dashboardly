
import React from 'react';
import Navbar from '@/components/Navbar';
import FeaturesSection from '@/components/FeaturesSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Powerful Features for <span className="text-accent">Modern</span> Teams
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Discover the tools that will transform your workflow and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/signup">
                  <Button size="lg" className="min-w-[150px]">
                    Start Free Trial
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="min-w-[150px]">
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Grid */}
        <FeaturesSection />
        
        {/* Detailed Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Feature Detail 1 */}
              <div className="animate-fade-in opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  Intuitive Dashboard
                </div>
                <h2 className="mb-4 text-3xl font-bold">Everything at a Glance</h2>
                <p className="mb-6 text-muted-foreground text-lg">
                  Our dashboard provides a comprehensive overview of your most important metrics. Customizable widgets allow you to focus on what matters most to your business.
                </p>
                <ul className="space-y-3 mb-6">
                  <FeatureItem>Real-time data updates</FeatureItem>
                  <FeatureItem>Drag-and-drop widget customization</FeatureItem>
                  <FeatureItem>Interactive charts and graphs</FeatureItem>
                  <FeatureItem>Personalized insights and suggestions</FeatureItem>
                </ul>
              </div>
              
              {/* Dashboard mockup */}
              <div className="relative h-[400px] animate-fade-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <div className="absolute inset-0 bg-card rounded-xl overflow-hidden border border-border/50 shadow-lg">
                  <div className="h-12 bg-muted/30 border-b border-border/40 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                    </div>
                  </div>
                  
                  <div className="flex h-[calc(100%-3rem)]">
                    <div className="w-48 bg-muted/20 border-r border-border/40 p-4">
                      <div className="space-y-2">
                        <div className="h-8 bg-muted/40 rounded-md"></div>
                        <div className="h-8 bg-accent/20 rounded-md"></div>
                        <div className="h-8 bg-muted/40 rounded-md"></div>
                        <div className="h-8 bg-muted/40 rounded-md"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-4">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="h-24 bg-muted/30 rounded-md border border-border/30"></div>
                        <div className="h-24 bg-muted/30 rounded-md border border-border/30"></div>
                      </div>
                      <div className="h-48 bg-muted/20 rounded-md border border-border/30 mb-4"></div>
                      <div className="h-24 bg-muted/30 rounded-md border border-border/30"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Feature Detail 2 */}
              <div className="relative h-[400px] animate-fade-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                <div className="absolute inset-0 bg-card rounded-xl overflow-hidden border border-border/50 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Advanced Analytics" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="animate-fade-in opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  Advanced Analytics
                </div>
                <h2 className="mb-4 text-3xl font-bold">Data-Driven Decisions</h2>
                <p className="mb-6 text-muted-foreground text-lg">
                  Gain valuable insights with our powerful analytics tools. Visualize trends, identify opportunities, and make informed decisions based on accurate data.
                </p>
                <ul className="space-y-3 mb-6">
                  <FeatureItem>Comprehensive reporting tools</FeatureItem>
                  <FeatureItem>Customizable data visualizations</FeatureItem>
                  <FeatureItem>Export capabilities in multiple formats</FeatureItem>
                  <FeatureItem>Predictive analytics and forecasting</FeatureItem>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-accent/5">
          <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to experience these features?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Start your free trial today and see the difference for yourself.
              </p>
              <Link to="/signup">
                <Button size="lg" className="min-w-[200px]">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      {/* Simple Footer */}
      <footer className="border-t border-border/60 py-8 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} SaaS App. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// Helper component
const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <CheckCircle className="mr-2 h-5 w-5 text-accent shrink-0 mt-0.5" />
    <span>{children}</span>
  </li>
);

export default Features;
