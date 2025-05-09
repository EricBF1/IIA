import React from 'react';

interface AboutProps {
  language: string;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const contentPt = {
    title: 'Sobre Nós',
    subtitle: 'Nossa História & Missão',
    history: {
      title: 'Nossa História',
      content: 'Fundado no fim de 2024, o Instituto Internacional de Atuação nasceu da paixão de um grupo de artistas comprometidos em elevar o nível da arte da cena como um todo. Nossa história está só no começo, mas nossos já se espalham por diversos lugares do Brasil e do mundo. Juntos, caminhamos a passos largos na realização de nossas primeiras atividades e produções.'
    },
    mission: {
      title: 'Nossa Missão',
      content: 'Desenvolvemos artistas completos através de técnicas internacionais de atuação, promovendo a excelência artística, a pesquisa teatral e audiovisual, e o impacto social positivo através das artes da cena.'
    },
    vision: {
      title: 'Nossa Visão',
      content: 'Ser reconhecido internacionalmente como um centro de excelência em formação artística, produção teatral inovadora e intercâmbio cultural, transformando vidas através da arte da atuação.'
    },
    values: {
      title: 'Nossos Valores',
      items: [
        'Excelência Artística',
        'Inovação Constante',
        'Inclusão e Diversidade',
        'Transformação Social',
        'Colaboração Internacional'
      ]
    }
  };

  const contentEn = {
    title: 'About Us',
    subtitle: 'Our History & Mission',
    history: {
      title: 'Our History',
      content: 'Founded in late 2024, the International Institute of Acting was born from the passion of a group of artists committed to elevating the level of performing arts as a whole. Our history is just beginning, but we are already spreading to various places in Brazil and around the world. Together, we are taking great strides in carrying out our first activities and productions.'
    },
    mission: {
      title: 'Our Mission',
      content: 'We develop complete artists through international acting techniques, promoting artistic excellence, theatrical and audiovisual research, and positive social impact through the performing arts.'
    },
    vision: {
      title: 'Our Vision',
      content: 'To be internationally recognized as a center of excellence in artistic training, innovative theatrical production, and cultural exchange, transforming lives through the art of acting.'
    },
    values: {
      title: 'Our Values',
      items: [
        'Artistic Excellence',
        'Constant Innovation',
        'Inclusion and Diversity',
        'Social Transformation',
        'International Collaboration'
      ]
    }
  };

  const content = language === 'pt' ? contentPt : contentEn;

  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy-800 mb-3">{content.title}</h2>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-burgundy-700 mb-4">{content.history.title}</h3>
            <p className="text-gray-700 leading-relaxed">{content.history.content}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-burgundy-700 mb-4">{content.mission.title}</h3>
            <p className="text-gray-700 leading-relaxed">{content.mission.content}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-burgundy-700 mb-4">{content.vision.title}</h3>
            <p className="text-gray-700 leading-relaxed">{content.vision.content}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-burgundy-700 mb-4">{content.values.title}</h3>
            <ul className="text-gray-700 space-y-2">
              {content.values.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gold-500 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;