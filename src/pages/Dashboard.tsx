
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import DashboardSidebar from '@/components/DashboardSidebar';
import SummaryCard from '@/components/SummaryCard';
import RevenueChart from '@/components/RevenueChart';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, CreditCard, Activity, LogOut } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  
  // Sample data for the dashboard
  const summaryData = [
    {
      title: "Total Page Views",
      metric: "1,234",
      icon: <Activity className="h-4 w-4 text-muted-foreground" />,
      change: "+12.3%",
      changeDirection: "up"
    },
    {
      title: "Total Revenue",
      metric: "$12,345",
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
      change: "+32.1%",
      changeDirection: "up"
    },
    {
      title: "Paying Users",
      metric: "123",
      icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
      change: "+2.3%",
      changeDirection: "up"
    },
    {
      title: "Total Signups",
      metric: "345",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
      change: "+18.4%",
      changeDirection: "up"
    }
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Header */}
        <header className="sticky top-0 z-10 border-b bg-card/80 backdrop-blur-sm">
          <div className="flex h-16 items-center justify-between px-6">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="relative">
                <Button variant="ghost" size="icon" onClick={logout} title="Sign out">
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <div className="font-medium">{user?.name || 'User'}</div>
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                  {user?.name?.[0] || 'U'}
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-6">
          {/* Welcome Card */}
          <Card className="mb-6 bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold">Welcome back, {user?.name || 'User'}!</h2>
              <p className="text-muted-foreground mt-1">
                Here's what's happening with your account today.
              </p>
            </CardContent>
          </Card>
          
          {/* Summary Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {summaryData.map((item, index) => (
              <SummaryCard 
                key={index}
                title={item.title}
                metric={item.metric}
                icon={item.icon}
                change={item.change}
                changeDirection={item.changeDirection as "up" | "down"}
              />
            ))}
          </div>
          
          {/* Revenue Chart */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <RevenueChart />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
