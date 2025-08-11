import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative p-3 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group"
      aria-label={isDarkMode ? 'تفعيل الوضع النهاري' : 'تفعيل الوضع المظلم'}
    >
      <div className="relative w-6 h-6">
        <Sun className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-500 ${
          isDarkMode ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`} />
        <Moon className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-500 ${
          isDarkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`} />
      </div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
        isDarkMode 
          ? 'shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30' 
          : 'shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/30'
      }`}></div>
    </button>
  );
};

export default ThemeToggle;