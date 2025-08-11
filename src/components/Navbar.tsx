import React from 'react';
import { Sprout, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { t, isRTL } = useLanguage();

  const navItems = [
    { id: 'contact', label: t.navbar.contact },
    { id: 'about', label: t.navbar.about },
    { id: 'services', label: t.navbar.services },
    { id: 'products', label: t.navbar.products },
    { id: 'home', label: t.navbar.home },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-colors duration-300" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-500 dark:to-green-600 p-2 rounded-xl shadow-lg">
                <Sprout className="w-8 h-8 text-white" />
              </div>
              <div className={isRTL ? "text-right" : "text-left"}>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">{t.navbar.company.name}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">{t.navbar.company.subtitle}</p>
              </div>
            </button>
            
            {/* Desktop Menu */}
            <div className={`hidden lg:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className={`lg:hidden ${isRTL ? 'order-first' : 'order-last'}`}>
              <button 
                onClick={toggleMobileMenu}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Desktop Controls */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Mobile Menu */}
          <div className="absolute top-20 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-2xl transition-colors duration-300" dir={isRTL ? 'rtl' : 'ltr'}>
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex flex-col gap-4 mb-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`${isRTL ? 'text-right' : 'text-left'} px-4 py-3 font-medium transition-all duration-300 rounded-lg ${
                      currentPage === item.id
                        ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              {/* Mobile Controls */}
              <div className="flex justify-center gap-4">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;