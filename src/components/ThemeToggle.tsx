
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden rounded-full"
      aria-label="Toggle theme"
    >
      <div className="relative h-[1.2rem] w-[1.2rem] transition-all duration-500 rotate-0 scale-100">
        {theme === 'dark' ? (
          <div className="absolute inset-0 flex items-center justify-center transition-opacity">
            <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-300 transition-all duration-500" />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center transition-opacity">
            <Moon className="h-[1.2rem] w-[1.2rem] transition-all duration-500" />
          </div>
        )}
      </div>
    </Button>
  );
};

export default ThemeToggle;
