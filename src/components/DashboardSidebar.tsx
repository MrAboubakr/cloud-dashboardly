
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  Calendar, 
  BarChart4, 
  FileText,
  PanelLeft,
  PanelRight,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isActive: boolean;
  isCollapsed: boolean;
  isSubmenuOpen?: boolean;
  hasSubmenu?: boolean;
  onClick?: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  to,
  icon,
  children,
  isActive,
  isCollapsed,
  isSubmenuOpen,
  hasSubmenu,
  onClick
}) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200",
        isActive 
          ? "bg-accent/10 text-accent" 
          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
      )}
      onClick={onClick}
    >
      <div className="w-6 h-6 flex items-center justify-center text-current">
        {icon}
      </div>
      
      {!isCollapsed && (
        <div className="flex-1 flex items-center justify-between">
          <span className="text-sm font-medium">{children}</span>
          {hasSubmenu && (
            <ChevronRight 
              className={cn(
                "h-4 w-4 transition-transform", 
                isSubmenuOpen ? "transform rotate-90" : ""
              )} 
            />
          )}
        </div>
      )}
    </Link>
  );
};

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isComponentsOpen, setIsComponentsOpen] = useState(true);
  
  const toggleCollapsed = () => {
    setIsCollapsed(prev => !prev);
  };

  const toggleComponents = () => {
    setIsComponentsOpen(prev => !prev);
  };

  // Hide sidebar on mobile if not explicitly shown
  if (isMobile) {
    return null;
  }

  return (
    <div 
      className={cn(
        "h-screen flex flex-col sticky top-0 border-r border-border/60 transition-all duration-300 bg-card",
        isCollapsed ? "w-[70px]" : "w-[240px]"
      )}
    >
      {/* Sidebar Header */}
      <div className={cn(
        "h-16 flex items-center px-4 border-b border-border/60",
        isCollapsed ? "justify-center" : "justify-between"
      )}>
        {!isCollapsed && (
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
              <span className="text-white text-sm font-bold">S</span>
            </div>
            <span className="font-semibold text-lg">SaaS App</span>
          </Link>
        )}
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleCollapsed} 
          className="text-muted-foreground hover:text-foreground"
        >
          {isCollapsed ? <PanelRight size={18} /> : <PanelLeft size={18} />}
        </Button>
      </div>
      
      {/* Sidebar Content */}
      <div className="flex-1 overflow-auto py-4 px-2 space-y-2">
        <SidebarLink 
          to="/dashboard" 
          icon={<LayoutDashboard size={isCollapsed ? 20 : 18} />} 
          isActive={location.pathname === '/dashboard'} 
          isCollapsed={isCollapsed}
        >
          Dashboard
        </SidebarLink>
        
        <SidebarLink 
          to="/dashboard/users" 
          icon={<Users size={isCollapsed ? 20 : 18} />} 
          isActive={location.pathname === '/dashboard/users'} 
          isCollapsed={isCollapsed}
        >
          Users
        </SidebarLink>
        
        {/* Components Submenu */}
        <div className="space-y-1">
          <SidebarLink 
            to="#" 
            icon={<BarChart4 size={isCollapsed ? 20 : 18} />} 
            isActive={location.pathname.includes('/dashboard/components')} 
            isCollapsed={isCollapsed}
            hasSubmenu={true}
            isSubmenuOpen={isComponentsOpen}
            onClick={isCollapsed ? undefined : toggleComponents}
          >
            Components
          </SidebarLink>
          
          {/* Submenu Items */}
          {!isCollapsed && isComponentsOpen && (
            <div className="ml-8 space-y-1 mt-1">
              <Link 
                to="/dashboard/components/charts" 
                className={cn(
                  "block px-3 py-1.5 text-sm rounded transition-colors",
                  location.pathname === '/dashboard/components/charts' 
                    ? "text-accent" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                Charts
              </Link>
              <Link 
                to="/dashboard/components/forms" 
                className={cn(
                  "block px-3 py-1.5 text-sm rounded transition-colors",
                  location.pathname === '/dashboard/components/forms' 
                    ? "text-accent" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                Forms
              </Link>
              <Link 
                to="/dashboard/components/calendar" 
                className={cn(
                  "block px-3 py-1.5 text-sm rounded transition-colors",
                  location.pathname === '/dashboard/components/calendar' 
                    ? "text-accent" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                Calendar
              </Link>
              <Link 
                to="/dashboard/components/ui-elements" 
                className={cn(
                  "block px-3 py-1.5 text-sm rounded transition-colors",
                  location.pathname === '/dashboard/components/ui-elements' 
                    ? "text-accent" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                UI Elements
              </Link>
            </div>
          )}
        </div>
        
        <SidebarLink 
          to="/dashboard/calendar" 
          icon={<Calendar size={isCollapsed ? 20 : 18} />} 
          isActive={location.pathname === '/dashboard/calendar'} 
          isCollapsed={isCollapsed}
        >
          Calendar
        </SidebarLink>
        
        <SidebarLink 
          to="/dashboard/reports" 
          icon={<FileText size={isCollapsed ? 20 : 18} />} 
          isActive={location.pathname === '/dashboard/reports'} 
          isCollapsed={isCollapsed}
        >
          Reports
        </SidebarLink>
      </div>
      
      {/* Sidebar Footer */}
      <div className="mt-auto border-t border-border/60 p-2">
        <SidebarLink 
          to="/dashboard/settings" 
          icon={<Settings size={isCollapsed ? 20 : 18} />} 
          isActive={location.pathname === '/dashboard/settings'} 
          isCollapsed={isCollapsed}
        >
          Settings
        </SidebarLink>
      </div>
    </div>
  );
};

export default DashboardSidebar;
