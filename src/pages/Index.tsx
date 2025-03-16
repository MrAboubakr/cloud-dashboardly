
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Twitter, Linkedin, Github } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Trusted by Industry Leaders
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
                See what our customers are saying about our platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Testimonial 1 */}
              <div className="relative p-6 bg-card rounded-xl border border-border/50 animate-fade-in opacity-0" 
                   style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                <div className="mb-4 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block mr-1">★</span>
                  ))}
                </div>
                <blockquote className="mb-3 text-muted-foreground">
                  "This platform has completely transformed our workflow. The intuitive design and powerful features have saved us countless hours."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                    <span className="text-accent font-semibold">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-sm text-muted-foreground">CEO, TechCorp</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="relative p-6 bg-card rounded-xl border border-border/50 animate-fade-in opacity-0"
                   style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <div className="mb-4 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block mr-1">★</span>
                  ))}
                </div>
                <blockquote className="mb-3 text-muted-foreground">
                  "The analytics capabilities alone are worth the investment. We've gained insights that have directly impacted our bottom line."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                    <span className="text-accent font-semibold">RS</span>
                  </div>
                  <div>
                    <p className="font-medium">Robert Smith</p>
                    <p className="text-sm text-muted-foreground">CTO, DataFlow</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="relative p-6 bg-card rounded-xl border border-border/50 animate-fade-in opacity-0"
                   style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                <div className="mb-4 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block mr-1">★</span>
                  ))}
                </div>
                <blockquote className="mb-3 text-muted-foreground">
                  "Customer support is exceptional. They've been responsive and helpful every step of the way. Highly recommended!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                    <span className="text-accent font-semibold">AL</span>
                  </div>
                  <div>
                    <p className="font-medium">Amy Lee</p>
                    <p className="text-sm text-muted-foreground">COO, GrowthX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <PricingSection />
        
        {/* CTA Section */}
        <section className="py-24 bg-accent/5">
          <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Join thousands of satisfied customers who trust our platform for their business needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/signup">
                  <Button size="lg" className="min-w-[150px]">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="min-w-[150px]">
                    Contact Sales
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 flex flex-col md:flex-row justify-center gap-6 text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-accent" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-accent" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-accent" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/60 py-12 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
                  <span className="text-white text-sm font-bold">S</span>
                </div>
                <span className="font-semibold text-lg">SaaS App</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Simplifying workflows for teams around the world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-border/40 text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} SaaS App. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
