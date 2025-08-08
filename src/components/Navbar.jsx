import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', scroll: 'home' },
    { name: 'About', path: '/about', scroll: 'about' },
    { name: 'Features', path: '/features', scroll: 'features' },
    { name: 'Data Migration', path: '/data-migration', scroll: 'data-migration' },
    { name: 'How It Works', path: '/how-it-works', scroll: 'how-it-works' },
    { name: 'Use Cases', path: '/use-cases', scroll: 'use-cases' },
    { name: 'Pricing', path: '/pricing', scroll: 'pricing' },
    { name: 'Contact', path: '/contact', scroll: 'contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
                         <img 
               src="/assets/logo.jpg" 
               alt="DataMug Logo" 
               className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover"
             />
          </Link>

          {/* Desktop Navigation */}
                     <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {isHomePage ? (
                  <ScrollLink
                    to={item.scroll}
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer transition-colors duration-300 ${
                      isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                    }`}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <Link
                    to={item.path}
                    className={`transition-colors duration-300 ${
                      isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
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

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
                         className="lg:hidden bg-white shadow-lg rounded-lg mt-2 p-3 sm:p-4 mx-3 sm:mx-4"
          >
                         <div className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 