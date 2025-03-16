
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  delay: number;
}

const PricingTier: React.FC<PricingTierProps> = ({
  title,
  price,
  description,
  features,
  popular = false,
  buttonText,
  delay
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col p-6 bg-card rounded-xl border transition-all duration-300",
        "animate-fade-in opacity-0",
        popular 
          ? "border-accent shadow-lg scale-[1.02] z-10" 
          : "border-border/50 hover:border-border hover:shadow"
      )}
      style={{ animationDelay: `${150 + delay * 100}ms`, animationFillMode: 'forwards' }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-medium rounded-full">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl md:text-4xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="ml-1 text-muted-foreground">/month</span>}
        </div>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>

      <ul className="mb-8 space-y-3 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="mr-2 h-5 w-5 shrink-0 text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link to="/signup" className="mt-auto">
        <Button
          className={cn(
            "w-full",
            popular ? "" : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
          )}
          variant={popular ? "default" : "outline"}
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const tiers = [
    {
      title: "Starter",
      price: "$29",
      description: "Perfect for small teams or individual projects.",
      features: [
        "Up to 5 users",
        "5GB storage",
        "Basic analytics",
        "24/7 support"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      title: "Professional",
      price: "$79",
      description: "Ideal for growing businesses and teams.",
      features: [
        "Up to 20 users",
        "20GB storage",
        "Advanced analytics",
        "Priority support",
        "Custom integrations"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For organizations with advanced needs.",
      features: [
        "Unlimited users",
        "Unlimited storage",
        "Custom reporting",
        "Dedicated support",
        "Advanced security",
        "SLA agreement"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              popular={tier.popular}
              buttonText={tier.buttonText}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
