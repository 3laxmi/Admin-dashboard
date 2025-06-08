import React from 'react';
import { useTheme } from './ThemeContext'; 

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
