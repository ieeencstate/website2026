'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-md transition-all duration-1000 hover:scale-110 ${
        theme === 'dark' 
          ? 'bg-white/80 text-black hover:bg-white' 
          : 'bg-black/80 text-white hover:bg-black'
      }`}
      style={{ zIndex: 10000, pointerEvents: 'auto' }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 transition-all duration-1000" />
      ) : (
        <Sun className="h-5 w-5 transition-all duration-1000" />
      )}
    </button>
  );
}

