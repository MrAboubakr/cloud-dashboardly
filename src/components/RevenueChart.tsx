
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/context/ThemeContext';

const generateMockData = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return days.map((day, index) => ({
    name: day,
    revenue: 2000 + Math.random() * 4000,
    profit: 1000 + Math.random() * 2000,
  }));
};

const RevenueChart: React.FC = () => {
  const [data] = React.useState(generateMockData());
  const { theme } = useTheme();
  
  // Colors based on theme
  const colors = {
    revenue: theme === 'dark' ? '#60a5fa' : '#3b82f6', // Blue
    profit: theme === 'dark' ? '#10b981' : '#059669',  // Green
    grid: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    text: theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className="animate-fade-in opacity-0" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Revenue & Profit</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colors.revenue} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={colors.revenue} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={colors.profit} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={colors.profit} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fill: colors.text }} 
                tickLine={{ stroke: colors.grid }}
                axisLine={{ stroke: colors.grid }}
              />
              <YAxis 
                tickFormatter={formatCurrency} 
                tick={{ fill: colors.text }} 
                tickLine={{ stroke: colors.grid }}
                axisLine={{ stroke: colors.grid }}
              />
              <Tooltip 
                formatter={(value) => [formatCurrency(value as number)]} 
                contentStyle={{ 
                  backgroundColor: theme === 'dark' ? '#1f2937' : '#fff', 
                  borderColor: colors.grid,
                  borderRadius: '0.375rem',
                }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke={colors.revenue} 
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
                activeDot={{ r: 6 }}
                name="Revenue" 
              />
              <Area 
                type="monotone" 
                dataKey="profit" 
                stroke={colors.profit} 
                fillOpacity={1} 
                fill="url(#colorProfit)"
                name="Profit"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
