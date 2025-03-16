
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SummaryCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositiveChange?: boolean;
  icon: React.ReactNode;
  delay?: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  change,
  isPositiveChange = true,
  icon,
  delay = 0
}) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden animate-fade-in opacity-0 border border-border/50 hover:border-border/80 transition-all duration-300",
        "hover:shadow-sm"
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <div className="flex items-baseline">
              <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
              {change && (
                <span className={cn(
                  "ml-2 text-sm font-medium",
                  isPositiveChange ? "text-green-500" : "text-red-500"
                )}>
                  {isPositiveChange ? '+' : ''}{change}
                </span>
              )}
            </div>
          </div>
          <div className="p-2 rounded-md bg-accent/10 text-accent">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
