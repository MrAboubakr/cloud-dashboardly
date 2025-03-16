
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4',
        isScrolled 
          ? 'bg-background/80 dark:bg-background/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-semibold"
          >
            <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center">
              <span className="text-white text-sm font-bold">S</span>
            </div>
            <span className="hidden sm:inline-block">SaaS App</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" isActive={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/features" isActive={location.pathname === '/features'}>Features</NavLink>
            <NavLink to="/pricing" isActive={location.pathname === '/pricing'}>Pricing</NavLink>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <Link to="/dashboard">
                    <Button variant="ghost">Dashboard</Button>
                  </Link>
                  <Button variant="secondary" onClick={logout}>Logout</Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost">Login</Button>
                  </Link>
                  <Link to="/signup">
                    <Button>Sign up</Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex items-center justify-center" 
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            'absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden md:hidden',
            mobileMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'
          )}
        >
          <div className="container px-4 pt-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink to="/" isActive={location.pathname === '/'}>Home</MobileNavLink>
              <MobileNavLink to="/features" isActive={location.pathname === '/features'}>Features</MobileNavLink>
              <MobileNavLink to="/pricing" isActive={location.pathname === '/pricing'}>Pricing</MobileNavLink>
            </nav>
            <div className="flex flex-col space-y-3 pt-2">
              {user ? (
                <>
                  <Link to="/dashboard" className="w-full">
                    <Button className="w-full" variant="outline">Dashboard</Button>
                  </Link>
                  <Button onClick={logout} className="w-full">Logout</Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="w-full">
                    <Button className="w-full" variant="outline">Login</Button>
                  </Link>
                  <Link to="/signup" className="w-full">
                    <Button className="w-full">Sign up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, isActive, children }) => (
  <Link 
    to={to} 
    className={cn(
      'relative text-sm font-medium py-1.5 transition-colors duration-300',
      isActive 
        ? 'text-foreground' 
        : 'text-muted-foreground hover:text-foreground'
    )}
  >
    {children}
    {isActive && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-all duration-300" />
    )}
  </Link>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ to, isActive, children }) => (
  <Link 
    to={to} 
    className={cn(
      'text-base p-3 rounded-md transition-colors duration-300',
      isActive 
        ? 'bg-accent/10 text-accent font-medium' 
        : 'text-foreground hover:bg-secondary'
    )}
  >
    {children}
  </Link>
);

export default Navbar;
