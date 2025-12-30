import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ease-in-out px-4 md:px-8 py-4 ${
        isScrolled 
          ? 'top-4' 
          : 'top-0'
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto rounded-[2rem] transition-all duration-500 ${
          isScrolled 
            ? 'glass shadow-2xl py-3 px-6' 
            : 'bg-transparent py-4 px-0'
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 mr-3 ${
              isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'
            }`}>
              <span className="font-serif font-black text-xl">I</span>
            </div>
            <span className={`text-2xl font-bold font-serif tracking-tight transition-colors duration-500 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              Infi<span className="text-brand-500">University</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold tracking-wide transition-all duration-300 relative group ${
                  isScrolled ? 'text-primary/70 hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border ${
              isScrolled 
                ? 'border-primary/10 text-primary hover:bg-gray-50' 
                : 'border-white/20 text-white hover:bg-white/10'
            }`}>
              Log In
            </button>
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-600/20">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-[-1] transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-primary/95 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)}></div>
        <div className={`absolute right-4 left-4 top-24 bg-white rounded-[2.5rem] p-8 shadow-2xl transition-all duration-500 transform ${
          mobileMenuOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'
        }`}>
          <div className="flex flex-col space-y-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-bold text-primary hover:text-brand-600 transition-colors px-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="h-px bg-gray-100 w-full"></div>
            <button className="w-full bg-brand-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-brand-600/20">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
