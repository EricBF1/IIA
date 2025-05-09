import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [language, setLanguage] = useState<string>('pt'); // Default language: Portuguese

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  // Update document title based on language
  React.useEffect(() => {
    document.title = language === 'pt' 
      ? 'Instituto Internacional de Atuação' 
      : 'International Institute of Acting';
  }, [language]);

  return (
    <div className="min-h-screen">
      <Navbar currentLanguage={language} toggleLanguage={toggleLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Projects language={language} />
      <Activities language={language} />
      <Team language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;