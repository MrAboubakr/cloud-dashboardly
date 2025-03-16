
import React from 'react';
import Navbar from '@/components/Navbar';
import PricingSection from '@/components/PricingSection';
import { Button } from '@/components/ui/button';
import { CheckCircle, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Simple, Transparent <span className="text-accent">Pricing</span>
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Choose the plan that fits your needs. All plans include a 14-day free trial.
              </p>
            </div>
          </div>
        </section>
        
        {/* Pricing Tables */}
        <PricingSection />
        
        {/* Feature Comparison */}
        <section className="py-24 bg-muted/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Compare Features</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-4 font-medium text-muted-foreground">Feature</th>
                      <th className="p-4 font-medium text-muted-foreground">Starter</th>
                      <th className="p-4 font-medium text-accent border-x border-border/50">Professional</th>
                      <th className="p-4 font-medium text-muted-foreground">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <TableRow feature="Users" starter="Up to 5" professional="Up to 20" enterprise="Unlimited" />
                    <TableRow feature="Storage" starter="5GB" professional="20GB" enterprise="Unlimited" />
                    <TableRow feature="Projects" starter="3" professional="15" enterprise="Unlimited" />
                    <TableRow feature="API Access" starter="✓" professional="✓" enterprise="✓" />
                    <TableRow feature="Basic Analytics" starter="✓" professional="✓" enterprise="✓" />
                    <TableRow feature="Advanced Analytics" starter="✕" professional="✓" enterprise="✓" />
                    <TableRow feature="Custom Reporting" starter="✕" professional="Limited" enterprise="✓" />
                    <TableRow feature="Team Collaboration" starter="✕" professional="✓" enterprise="✓" />
                    <TableRow feature="Priority Support" starter="✕" professional="✓" enterprise="✓" />
                    <TableRow feature="Dedicated Account Manager" starter="✕" professional="✕" enterprise="✓" />
                    <TableRow feature="SLA Agreement" starter="✕" professional="✕" enterprise="✓" />
                    <TableRow feature="Custom Integrations" starter="✕" professional="Limited" enterprise="✓" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
              <p className="text-center text-muted-foreground mb-12">
                Find answers to common questions about our pricing and plans.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Can I switch plans later?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you'll be charged the prorated difference. When you downgrade, the new price will take effect at the start of your next billing cycle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does the 14-day trial work?</AccordionTrigger>
                  <AccordionContent>
                    You'll get full access to all features of your selected plan for 14 days, with no credit card required. At the end of the trial, you can choose to subscribe or your account will automatically switch to the limited free version.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept major credit cards (Visa, MasterCard, American Express) and PayPal. For Enterprise plans, we also offer invoicing options.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you offer discounts for nonprofits or educational institutions?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer special pricing for qualified nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What happens to my data if I cancel?</AccordionTrigger>
                  <AccordionContent>
                    Your data remains stored in our system for 30 days after cancellation, giving you time to export anything you need. After 30 days, your data will be permanently deleted.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I get a refund if I'm not satisfied?</AccordionTrigger>
                  <AccordionContent>
                    We offer a 30-day money-back guarantee for all plans. If you're not satisfied with our service within the first 30 days, contact our support team for a full refund.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">
                  Still have questions?
                </p>
                <Button variant="outline" className="gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Contact Support
                </Button>
              </div>
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

// Helper component for pricing table rows
interface TableRowProps {
  feature: string;
  starter: string;
  professional: string;
  enterprise: string;
}

const TableRow: React.FC<TableRowProps> = ({ feature, starter, professional, enterprise }) => (
  <tr className="bg-card hover:bg-muted/10 transition-colors">
    <td className="p-4">{feature}</td>
    <td className="p-4 text-center">
      {starter === "✓" ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
       starter === "✕" ? <span className="text-muted-foreground">—</span> : starter}
    </td>
    <td className="p-4 text-center border-x border-border/50 bg-accent/5">
      {professional === "✓" ? <CheckCircle className="h-5 w-5 text-accent mx-auto" /> : 
       professional === "✕" ? <span className="text-muted-foreground">—</span> : professional}
    </td>
    <td className="p-4 text-center">
      {enterprise === "✓" ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
       enterprise === "✕" ? <span className="text-muted-foreground">—</span> : enterprise}
    </td>
  </tr>
);

export default Pricing;
