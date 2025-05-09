import React from 'react';
import { Link } from './Link';

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const contentPt = {
    title: 'Instituto Internacional de Atuação',
    subtitle: 'Pesquisa · Técnica · Produção',
    description: 'Impulsionando vocações e expandindo as potencialidades de quem vive a arte da atuação como um chamado.',
    cta: 'Conheça Nosso Trabalho'
  };

  const contentEn = {
    title: 'International Institute of Acting',
    subtitle: 'Research · Technique · Production',
    description: 'Driving vocations and expanding the potential of those who live the art of acting as a calling.',
    cta: 'Discover Our Work'
  };

  const content = language === 'pt' ? contentPt : contentEn;

  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="/images/2025_IIA_KV_4(jpeg).jpeg" 
          alt="Teatro performance" 
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
            {content.title}
          </h1>
          <p className="text-gold-400 text-xl md:text-2xl tracking-wider mb-6 animate-fadeIn animation-delay-200">
            {content.subtitle}
          </p>
          <p className="text-gray-300 text-lg md:text-xl mb-8 animate-fadeIn animation-delay-400">
            {content.description}
          </p>
          <div className="animate-fadeIn animation-delay-600">
            <Link 
              href="#projects" 
              className="px-8 py-3 bg-burgundy-600 hover:bg-burgundy-700 text-white font-medium rounded-lg transition-colors duration-300 inline-block"
            >
              {content.cta}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <Link href="#about" aria-label="Scroll to About section">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;