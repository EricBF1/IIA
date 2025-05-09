import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from './Link';

interface NavbarProps {
  currentLanguage: string;
  toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLanguage, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: currentLanguage === 'pt' ? 'Início' : 'Home', href: '#home' },
    { name: currentLanguage === 'pt' ? 'Sobre' : 'About', href: '#about' },
    { name: currentLanguage === 'pt' ? 'Projetos' : 'Projects', href: '#projects' },
    { name: currentLanguage === 'pt' ? 'Atividades' : 'Activities', href: '#activities' },
    { name: currentLanguage === 'pt' ? 'Equipe' : 'Team', href: '#team' },
    { name: currentLanguage === 'pt' ? 'Contato' : 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="#home" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Instituto Internacional de Atuação" 
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-white hover:text-gold-400 transition-colors text-sm uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={toggleLanguage} 
            className="flex items-center text-white hover:text-gold-400 transition-colors"
            aria-label={currentLanguage === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          >
            <Globe size={18} className="mr-1" />
            <span className="text-sm">{currentLanguage.toUpperCase()}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-gold-400 transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm absolute w-full">
          <div className="container mx-auto px-4 py-5 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-white hover:text-gold-400 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }} 
              className="flex items-center text-white hover:text-gold-400 transition-colors"
              aria-label={currentLanguage === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              <Globe size={18} className="mr-1" />
              <span>{currentLanguage === 'pt' ? 'English' : 'Português'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;