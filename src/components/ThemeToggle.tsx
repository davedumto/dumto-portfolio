'use client';

import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 border border-black bg-white dark:bg-black dark:text-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors font-medium text-sm md:text-base"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}