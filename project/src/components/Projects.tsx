import React, { useState } from 'react';

interface ProjectsProps {
  language: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const contentPt = {
    title: 'Projetos',
    subtitle: 'Nossos Trabalhos',
    filterAll: 'Todos',
    filterPerformance: 'Performances',
    filterProduction: 'Produções',
    filterWorkshop: 'Workshops',
    viewDetails: 'Ver Detalhes'
  };

  const contentEn = {
    title: 'Projects',
    subtitle: 'Our Work',
    filterAll: 'All',
    filterPerformance: 'Performances',
    filterProduction: 'Productions',
    filterWorkshop: 'Workshops',
    viewDetails: 'View Details'
  };

  const content = language === 'pt' ? contentPt : contentEn;

  // Project data
  const projectsPt: Project[] = [
    {
      id: 1,
      title: 'Macbeth Reimaginado',
      category: 'performance',
      year: '2023',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Uma releitura contemporânea da clássica tragédia de Shakespeare, explorando temas de ambição e poder em um contexto brasileiro.'
    },
    {
      id: 2,
      title: 'Workshop de Técnica Meisner',
      category: 'workshop',
      year: '2023',
      image: 'https://images.pexels.com/photos/8107206/pexels-photo-8107206.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Intensivo de duas semanas sobre a técnica de atuação Meisner, focando na autenticidade e reações instintivas.'
    },
    {
      id: 3,
      title: 'O Jardim das Ilusões',
      category: 'production',
      year: '2022',
      image: 'https://images.pexels.com/photos/3696663/pexels-photo-3696663.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Produção original que combina teatro físico e narrativa visual para explorar a natureza dos sonhos e da memória.'
    },
    {
      id: 4,
      title: 'Vozes da Cidade',
      category: 'performance',
      year: '2022',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Performance site-specific que dá vida às histórias dos moradores de São Paulo através de monólogos e movimentos coreografados.'
    },
    {
      id: 5,
      title: 'Laboratório de Criação Coletiva',
      category: 'workshop',
      year: '2022',
      image: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Série de workshops focados em práticas de criação coletiva e desenvolvimento de novas obras teatrais.'
    },
    {
      id: 6,
      title: 'Além do Horizonte',
      category: 'production',
      year: '2021',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Produção multimídia que integra teatro, dança e projeções visuais para contar histórias de migração e pertencimento.'
    }
  ];

  const projectsEn: Project[] = [
    {
      id: 1,
      title: 'Reimagined Macbeth',
      category: 'performance',
      year: '2023',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A contemporary retelling of Shakespeare\'s classic tragedy, exploring themes of ambition and power in a Brazilian context.'
    },
    {
      id: 2,
      title: 'Meisner Technique Workshop',
      category: 'workshop',
      year: '2023',
      image: 'https://images.pexels.com/photos/8107206/pexels-photo-8107206.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Two-week intensive on the Meisner acting technique, focusing on authenticity and instinctive reactions.'
    },
    {
      id: 3,
      title: 'The Garden of Illusions',
      category: 'production',
      year: '2022',
      image: 'https://images.pexels.com/photos/3696663/pexels-photo-3696663.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Original production that combines physical theater and visual storytelling to explore the nature of dreams and memory.'
    },
    {
      id: 4,
      title: 'Voices of the City',
      category: 'performance',
      year: '2022',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Site-specific performance that brings to life the stories of São Paulo residents through monologues and choreographed movements.'
    },
    {
      id: 5,
      title: 'Collective Creation Laboratory',
      category: 'workshop',
      year: '2022',
      image: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Series of workshops focused on collective creation practices and development of new theatrical works.'
    },
    {
      id: 6,
      title: 'Beyond the Horizon',
      category: 'production',
      year: '2021',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multimedia production that integrates theater, dance, and visual projections to tell stories of migration and belonging.'
    }
  ];

  const projects = language === 'pt' ? projectsPt : projectsEn;

  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">{content.title}</h2>
          <p className="text-xl text-gray-400">{content.subtitle}</p>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-6"></div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'all' ? 'bg-burgundy-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {content.filterAll}
            </button>
            <button 
              onClick={() => setFilter('performance')} 
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'performance' ? 'bg-burgundy-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {content.filterPerformance}
            </button>
            <button 
              onClick={() => setFilter('production')} 
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'production' ? 'bg-burgundy-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {content.filterProduction}
            </button>
            <button 
              onClick={() => setFilter('workshop')} 
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'workshop' ? 'bg-burgundy-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {content.filterWorkshop}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <span className="text-gold-400 text-sm font-medium mb-1">{project.year} · {project.category === 'performance' ? (language === 'pt' ? 'Performance' : 'Performance') : project.category === 'production' ? (language === 'pt' ? 'Produção' : 'Production') : (language === 'pt' ? 'Workshop' : 'Workshop')}</span>
                <h3 className="text-xl font-serif font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2 mb-3">{project.description}</p>
                <button className="self-start px-4 py-2 bg-burgundy-600 hover:bg-burgundy-700 text-white text-sm rounded transition-colors inline-flex items-center">
                  {content.viewDetails}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;