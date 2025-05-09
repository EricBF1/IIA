import React from 'react';

interface TeamProps {
  language: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const Team: React.FC<TeamProps> = ({ language }) => {
  const contentPt = {
    title: 'Nossa Equipe',
    subtitle: 'Os Artistas & Educadores',
    readBio: 'Ler Biografia'
  };

  const contentEn = {
    title: 'Our Team',
    subtitle: 'The Artists & Educators',
    readBio: 'Read Bio'
  };

  const content = language === 'pt' ? contentPt : contentEn;

  // Team member data
  const teamPt: TeamMember[] = [
    {
      id: 1,
      name: 'Carolina Mendes',
      role: 'Diretora Artística',
      bio: 'Formada pela Escola de Arte Dramática da USP, com especialização em direção teatral pela RADA (Londres). Dirigiu mais de 15 produções premiadas no Brasil e Portugal, e leciona técnicas de atuação há mais de 12 anos.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
      socialLinks: {
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Rafael Santos',
      role: 'Diretor Técnico',
      bio: 'Mestre em Artes Cênicas pela UNICAMP, com experiência internacional em teatros da Espanha e Argentina. Especialista em técnicas corporais e Shakespeare, desenvolveu metodologia própria de treinamento físico para atores.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800',
      socialLinks: {
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Letícia Oliveira',
      role: 'Professora de Voz',
      bio: 'Especialista em técnica vocal, formada pelo Conservatório de Música de São Paulo, com aperfeiçoamento no Roy Hart Theatre (França). Atua como preparadora vocal em produções teatrais e cinematográficas há mais de 8 anos.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
      socialLinks: {
        instagram: '#'
      }
    },
    {
      id: 4,
      name: 'Marcos Almeida',
      role: 'Professor de Interpretação',
      bio: 'Ator premiado com mais de 20 anos de experiência em teatro, cinema e televisão. Formado pela CAL do Rio de Janeiro, com especialização em Método Stanislavski e Técnica Meisner nos Estados Unidos.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
      socialLinks: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  const teamEn: TeamMember[] = [
    {
      id: 1,
      name: 'Carolina Mendes',
      role: 'Artistic Director',
      bio: 'Graduated from USP\'s School of Dramatic Arts, with specialization in theater direction from RADA (London). She has directed more than 15 award-winning productions in Brazil and Portugal, and has been teaching acting techniques for over 12 years.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
      socialLinks: {
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Rafael Santos',
      role: 'Technical Director',
      bio: 'Master\'s in Performing Arts from UNICAMP, with international experience in theaters in Spain and Argentina. Specialist in body techniques and Shakespeare, he developed his own physical training methodology for actors.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800',
      socialLinks: {
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Letícia Oliveira',
      role: 'Voice Professor',
      bio: 'Voice technique specialist, graduated from the São Paulo Conservatory of Music, with further training at Roy Hart Theatre (France). She has worked as a vocal coach in theatrical and film productions for over 8 years.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
      socialLinks: {
        instagram: '#'
      }
    },
    {
      id: 4,
      name: 'Marcos Almeida',
      role: 'Acting Professor',
      bio: 'Award-winning actor with over 20 years of experience in theater, film, and television. Graduated from CAL in Rio de Janeiro, with specialization in the Stanislavski Method and Meisner Technique in the United States.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
      socialLinks: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  const team = language === 'pt' ? teamPt : teamEn;

  return (
    <section id="team" className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">{content.title}</h2>
          <p className="text-xl text-gray-400">{content.subtitle}</p>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="group relative bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2 duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent opacity-70"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                <h3 className="text-xl font-serif font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gold-400 text-sm font-medium mb-3">{member.role}</p>
                
                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  
                  {member.socialLinks && (
                    <div className="flex space-x-4 mb-4">
                      {member.socialLinks.instagram && (
                        <a href={member.socialLinks.instagram} className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="18" 
                            height="18" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </a>
                      )}
                      {member.socialLinks.linkedin && (
                        <a href={member.socialLinks.linkedin} className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="18" 
                            height="18" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                      )}
                      {member.socialLinks.twitter && (
                        <a href={member.socialLinks.twitter} className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="18" 
                            height="18" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                  
                  <button className="text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors inline-flex items-center">
                    {content.readBio}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;