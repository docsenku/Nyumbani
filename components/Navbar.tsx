import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
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

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apartments', path: '/apartments' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Info', path: '/info' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const navClass = `fixed w-full z-50 transition-all duration-500 ease-in-out ${
    isScrolled || isOpen || location.pathname !== '/' 
      ? 'bg-stone-900 text-stone-50 py-4 shadow-xl' 
      : 'bg-transparent text-white py-6'
  }`;

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-serif text-3xl tracking-widest font-light uppercase z-50 relative">
          Nyumbani
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="uppercase text-xs tracking-[0.2em] hover:text-amber-500 transition-colors font-sans"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/shop" className="hover:text-amber-500 transition-colors">
            <ShoppingBag size={20} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Drawer */}
        <div className={`fixed inset-0 bg-stone-900 z-40 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center space-y-8`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="font-serif text-3xl text-stone-300 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
           <Link 
              to="/shop" 
              className="font-serif text-3xl text-stone-300 hover:text-white flex items-center gap-2"
            >
              Tiny Shop <ShoppingBag size={24} />
            </Link>
        </div>
      </div>
    </nav>
  );
};
