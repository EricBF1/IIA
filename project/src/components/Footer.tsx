import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Link } from './Link';

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const contentPt = {
    navigation: 'Navegação',
    address: 'Endereço',
    addressText: 'Rua Augusta, 1500, Consolação, São Paulo - SP, 01304-001',
    contact: 'Contato',
    phone: 'Telefone: +55 11 3456-7890',
    email: 'Email: contato@institutointernacional.com.br',
    subscribe: 'Inscreva-se',
    subscribeText: 'Assine nossa newsletter para receber novidades sobre cursos, workshops e eventos.',
    emailPlaceholder: 'Seu email',
    subscribeButton: 'Inscrever',
    followUs: 'Siga-nos',
    copyright: '© 2025 Instituto Internacional de Atuação. Todos os direitos reservados.',
    privacyPolicy: 'Política de Privacidade',
    termsOfService: 'Termos de Serviço'
  };

  const contentEn = {
    navigation: 'Navigation',
    address: 'Address',
    addressText: 'Rua Augusta, 1500, Consolação, São Paulo - SP, 01304-001',
    contact: 'Contact',
    phone: 'Phone: +55 11 3456-7890',
    email: 'Email: contact@internationalinstitute.com.br',
    subscribe: 'Subscribe',
    subscribeText: 'Subscribe to our newsletter to receive news about courses, workshops, and events.',
    emailPlaceholder: 'Your email',
    subscribeButton: 'Subscribe',
    followUs: 'Follow Us',
    copyright: '© 2025 International Institute of Acting. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service'
  };

  const content = language === 'pt' ? contentPt : contentEn;

  const navLinks = [
    { name: language === 'pt' ? 'Início' : 'Home', href: '#home' },
    { name: language === 'pt' ? 'Sobre' : 'About', href: '#about' },
    { name: language === 'pt' ? 'Projetos' : 'Projects', href: '#projects' },
    { name: language === 'pt' ? 'Atividades' : 'Activities', href: '#activities' },
    { name: language === 'pt' ? 'Equipe' : 'Team', href: '#team' },
    { name: language === 'pt' ? 'Contato' : 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="#home" className="font-serif text-2xl font-bold text-white hover:text-gold-400 transition-colors">
              IIA
            </Link>
            <p className="mt-6 text-gray-400 text-sm leading-relaxed">
              {language === 'pt' 
                ? 'O Instituto Internacional de Atuação é dedicado à formação de artistas completos através de técnicas inovadoras e intercâmbio cultural.' 
                : 'The International Institute of Acting is dedicated to training complete artists through innovative techniques and cultural exchange.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{content.navigation}</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{content.contact}</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <p className="font-medium text-white mb-2">{content.address}</p>
                <p className="leading-relaxed">{content.addressText}</p>
              </div>
              <div>
                <p>{content.phone}</p>
                <p>{content.email}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{content.subscribe}</h3>
            <p className="text-gray-400 text-sm mb-4">{content.subscribeText}</p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder={content.emailPlaceholder}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-colors text-white text-sm"
                  required
                />
              </div>
              <button 
                type="submit"
                className="px-4 py-2 bg-burgundy-600 hover:bg-burgundy-700 text-white font-medium rounded-md transition-colors text-sm"
              >
                {content.subscribeButton}
              </button>
            </form>
            
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4">{content.followUs}</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">{content.copyright}</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">{content.privacyPolicy}</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">{content.termsOfService}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;