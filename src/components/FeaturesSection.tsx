
import React from 'react';
import { 
  LayoutDashboard, 
  LineChart, 
  Users, 
  Lock, 
  Zap, 
  BarChart, 
  Layers, 
  Code
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, delay }) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl p-6 bg-card border border-border/50",
        "transition-all duration-300 hover:shadow-md hover:border-accent/20",
        "animate-fade-in opacity-0"
      )}
      style={{ animationDelay: `${100 + delay * 100}ms`, animationFillMode: 'forwards' }}
    >
      <div className="absolute top-0 left-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-700 ease-out" />
      
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent/10 p-2 text-accent">
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Intuitive Dashboard",
      description: "Access all your important metrics at a glance with our beautifully designed dashboard interface.",
      icon: LayoutDashboard
    },
    {
      title: "Advanced Analytics",
      description: "Gain deeper insights with comprehensive data visualization and reporting tools.",
      icon: LineChart
    },
    {
      title: "User Management",
      description: "Easily manage team members, roles, and permissions with our streamlined controls.",
      icon: Users
    },
    {
      title: "Enterprise Security",
      description: "Rest easy with industry-leading security practices and data protection measures.",
      icon: Lock
    },
    {
      title: "Lightning Fast",
      description: "Experience exceptional performance with our optimized cloud infrastructure.",
      icon: Zap
    },
    {
      title: "Powerful Reports",
      description: "Generate detailed reports and export data in multiple formats with ease.",
      icon: BarChart
    },
    {
      title: "Seamless Integration",
      description: "Connect with your favorite tools and services through our extensive API.",
      icon: Code
    },
    {
      title: "Customizable Workflow",
      description: "Tailor the platform to your unique requirements with flexible workflow options.",
      icon: Layers
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Powerful Features
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            Everything you need to manage your business efficiently, all in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
