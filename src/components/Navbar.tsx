import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/chief-sinner-logo.png" 
                alt="CHIEF SINNER Logo" 
                className="w-14 md:w-16 h-auto drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]"
              />
              <img src="/chief-sinner-logo.png" alt="CHIEF SINNER Logo" className="h-8 w-8 mr-2" />
<span className="text-white font-extrabold text-xl tracking-wider">CHIEF SINNER</span>

            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className={`font-medium tracking-wider ${
                  location.pathname === '/' 
                    ? 'text-red-600' 
                    : 'text-white hover:text-red-500'
                } transition-colors duration-200`}
              >
                HOME
              </Link>
              <Link
                to="/shop"
                className={`font-medium tracking-wider ${
                  location.pathname.includes('/shop') 
                    ? 'text-red-600' 
                    : 'text-white hover:text-red-500'
                } transition-colors duration-200`}
              >
                SHOP
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/' 
                  ? 'text-red-600' 
                  : 'text-white hover:text-red-500'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/shop"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname.includes('/shop') 
                  ? 'text-red-600' 
                  : 'text-white hover:text-red-500'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              SHOP
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
