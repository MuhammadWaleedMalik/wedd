import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX, FiChevronDown, FiGlobe } from 'react-icons/fi';

const colors = {
  primary: "#836F57",       // Main brown color
  secondary: "#F3E9D8",     // Light cream
  accent: "#FFFFFF",        // White
  background: "#aba7a7",    // Dark gray background
  textLight: "#F8F9FA"      // Very light text
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isAuthenticated =localStorage.getItem('token') !== null;
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const langDropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: t('english'), nativeName: t('english') },
    { code: 'es', name: t('spanish'), nativeName: t('español') },
    { code: 'ja', name: t('japanese'), nativeName: t('日本語') },
    { code: 'zh', name: t('chinese'), nativeName: t('中文') },
    { code: 'ru', name: t('russian'), nativeName: t('Русский') },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLanguageMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#5c5b5b]/90 backdrop-blur-md shadow-md' : 'bg-[#5c5b5b]'}`}
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img 
              src={"/images/logo.jpg"} 
              alt={t('logo')} 
              className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-105" 
            />
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center hover:opacity-90 transition-opacity duration-200"
            >
              <span 
                className="text-[32px] italic font-bold font-mono"
                style={{ color: colors.primary }}
              >
                {t('Wedding AI')}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink 
              to="/" 
              style={{ color: colors.textLight }} 
              className="nav-link px-3 py-2 rounded-md text-sm font-medium hover:bg-[#836F57] hover:text-[#F3E9D8] transition-colors duration-200"
            >
              {t('home')}
            </NavLink>
            <NavLink 
              to="/pricing" 
              style={{ color: colors.textLight }} 
              className="nav-link px-3 py-2 rounded-md text-sm font-medium hover:bg-[#836F57] hover:text-[#F3E9D8] transition-colors duration-200"
            >
              {t('pricing')}
            </NavLink>
            <NavLink 
              to="/services" 
              style={{ color: colors.textLight }} 
              className="nav-link px-3 py-2 rounded-md text-sm font-medium hover:bg-[#836F57] hover:text-[#F3E9D8] transition-colors duration-200"
            >
              {t('Services')}
            </NavLink>
          
          
            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                style={{ color: colors.textLight }}
                className="nav-link flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-[#836F57] hover:text-[#F3E9D8] transition-colors duration-200" 
                onClick={toggleLanguageMenu}
              >
                <FiGlobe className="text-white mr-1" /> {languages.find(lang => lang.code === i18n.language)?.name || t('English')}
              </button>

              {isLanguageMenuOpen && (
                <div 
                  className="absolute left-0 mt-2 w-56 rounded-md text-white shadow-lg z-50 overflow-hidden animate-fadeIn"
                  style={{ backgroundColor: colors.secondary }}
                >
                  {languages.map((language) => (
                    <button 
                      key={language.code} 
                      onClick={() => changeLanguage(language.code)} 
                      className="w-full text-left block px-4 py-2 text-sm hover:bg-[#836F57] hover:text-[#F3E9D8] transition-colors duration-150"
                      style={{ color: colors.primary }}
                    >
                      {language.nativeName} ({language.name})
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Authentication */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <button 
                onClick={() => {localStorage.removeItem('token'); window.location.reload();}} 
                className="px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
                style={{ 
                  backgroundColor: colors.primary,
                  color: colors.secondary,
                  hover: { backgroundColor: '#9A8468' }
                }}
              >
                {t('logout')}
              </button>
            ) : (
              <>
                <Link 
                  to="/login"
                  className="px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
                  style={{ 
                    color: colors.primary,
                    backgroundColor: 'transparent',
                    border: `1px solid ${colors.primary}`,
                    hover: { backgroundColor: colors.primary, color: colors.secondary }
                  }}
                >
                  {t('login')}
                </Link>
                <Link 
                  to="/signup" 
                  className="px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
                  style={{ 
                    backgroundColor: colors.primary,
                    color: colors.secondary,
                    hover: { backgroundColor: '#9A8468' }
                  }}
                >
                  {t('signup')}
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMenu} 
              className="text-3xl"
              style={{ color: colors.textLight }}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 flex flex-col items-center justify-center space-y-6 text-xl z-40 w-screen h-screen md:hidden animate-fadeIn"
            style={{ 
              backgroundColor: colors.background,
              color: colors.textLight
            }}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-3xl"
              style={{ color: colors.textLight }}
            >
              <FiX />
            </button>

            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-md text-lg font-medium hover:opacity-80 transition-opacity duration-200"
              style={{ color: colors.textLight }}
            >
              {t('home')}
            </NavLink>
            <NavLink
              to="/pricing"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-md text-lg font-medium hover:opacity-80 transition-opacity duration-200"
              style={{ color: colors.textLight }}
            >
              {t('pricing')}
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-md text-lg font-medium hover:opacity-80 transition-opacity duration-200"
              style={{ color: colors.textLight }}
            >
              {t('Services')}
            </NavLink>

            {/* Language Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button 
                className="px-4 py-2 rounded-md text-lg font-medium flex items-center hover:opacity-80 transition-opacity duration-200"
                style={{ color: colors.textLight }}
                onClick={toggleLanguageMenu}
              >
                <FiGlobe className="mr-1" /> {languages.find(lang => lang.code === i18n.language)?.name || t('english')}
              </button>

              {isLanguageMenuOpen && (
                <div 
                  className="absolute mt-2 w-56 rounded-md shadow-lg z-50 overflow-hidden animate-fadeIn"
                  style={{ backgroundColor: colors.secondary }}
                >
                  {languages.map((language) => (
                    <button 
                      key={language.code} 
                      onClick={() => changeLanguage(language.code)} 
                      className="w-full text-left block px-4 py-2 text-sm hover:bg-[#836F57] hover:text-[#F3E9D8] transition-colors duration-150"
                      style={{ color: colors.primary }}
                    >
                      {language.nativeName} ({language.name})
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Authentication */}
            {isAuthenticated ? (
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.reload();
                  setIsMenuOpen(false);
                }}
                className="px-6 py-3 rounded text-lg font-medium transition-colors duration-200"
                style={{ 
                  backgroundColor: colors.primary,
                  color: colors.secondary
                }}
              >
                {t('logout')}
              </button>
            ) : (
              <div className="flex flex-col space-y-4 items-center">
                <Link
                  to="/login"
                  className="px-6 py-3 rounded text-lg font-medium transition-colors duration-200 text-center w-40"
                  style={{ 
                    color: colors.primary,
                    backgroundColor: 'transparent',
                    border: `1px solid ${colors.primary}`
                  }}
                  onClick={() => setIsMenuOpen(false)}          
                >
                  {t('login')}
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-3 rounded text-lg font-medium transition-colors duration-200 text-center w-40"
                  style={{ 
                    backgroundColor: colors.primary,
                    color: colors.secondary
                  }}
                >
                  {t('signup')}
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;