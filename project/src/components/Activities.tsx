import React from 'react';

interface ActivitiesProps {
  language: string;
}

interface Activity {
  id: number;
  title: string;
  date: string;
  type: string;
  image: string;
  description: string;
  location: string;
  isFeatured?: boolean;
}

const Activities: React.FC<ActivitiesProps> = ({ language }) => {
  const contentPt = {
    title: 'Atividades',
    subtitle: 'Próximos Eventos & Workshops',
    upcoming: 'Próximos',
    featured: 'Destaque',
    registerNow: 'Inscrever-se',
    learnMore: 'Saiba Mais',
    location: 'Local:',
    date: 'Data:'
  };

  const contentEn = {
    title: 'Activities',
    subtitle: 'Upcoming Events & Workshops',
    upcoming: 'Upcoming',
    featured: 'Featured',
    registerNow: 'Register Now',
    learnMore: 'Learn More',
    location: 'Location:',
    date: 'Date:'
  };

  const content = language === 'pt' ? contentPt : contentEn;

  // Activities data
  const activitiesPt: Activity[] = [
    {
      id: 1,
      title: 'Workshop: Corpo e Voz para o Palco',
      date: '15-16 Jun, 2025',
      type: 'workshop',
      image: 'https://images.pexels.com/photos/3355366/pexels-photo-3355366.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Um workshop intensivo de dois dias focado no desenvolvimento de técnicas vocais e corporais para atores de teatro.',
      location: 'Estúdio Principal, São Paulo',
      isFeatured: true
    },
    {
      id: 2,
      title: 'Mostra de Cenas: Novos Diretores',
      date: '22 Mai, 2025',
      type: 'performance',
      image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Apresentação de cenas curtas dirigidas por nova geração de diretores formados pelo nosso instituto.',
      location: 'Teatro Casa Nova, São Paulo'
    },
    {
      id: 3,
      title: 'Palestra: Teatro Contemporâneo Brasileiro',
      date: '5 Mai, 2025',
      type: 'lecture',
      image: 'https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Discussão sobre as tendências atuais e desafios do teatro contemporâneo no Brasil com diretores convidados.',
      location: 'Auditório IIA, São Paulo'
    },
    {
      id: 4,
      title: 'Audições: Novo Projeto Colaborativo',
      date: '10-11 Abr, 2025',
      type: 'audition',
      image: 'https://images.pexels.com/photos/8106573/pexels-photo-8106573.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Estamos buscando atores para nosso próximo projeto colaborativo que explorará narrativas urbanas brasileiras.',
      location: 'Estúdio 2, São Paulo'
    }
  ];

  const activitiesEn: Activity[] = [
    {
      id: 1,
      title: 'Workshop: Body and Voice for Stage',
      date: 'Jun 15-16, 2025',
      type: 'workshop',
      image: 'https://images.pexels.com/photos/3355366/pexels-photo-3355366.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'An intensive two-day workshop focused on developing vocal and physical techniques for theater actors.',
      location: 'Main Studio, São Paulo',
      isFeatured: true
    },
    {
      id: 2,
      title: 'Scene Showcase: New Directors',
      date: 'May 22, 2025',
      type: 'performance',
      image: 'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Presentation of short scenes directed by a new generation of directors trained by our institute.',
      location: 'Teatro Casa Nova, São Paulo'
    },
    {
      id: 3,
      title: 'Lecture: Contemporary Brazilian Theater',
      date: 'May 5, 2025',
      type: 'lecture',
      image: 'https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Discussion on current trends and challenges in contemporary theater in Brazil with guest directors.',
      location: 'IIA Auditorium, São Paulo'
    },
    {
      id: 4,
      title: 'Auditions: New Collaborative Project',
      date: 'Apr 10-11, 2025',
      type: 'audition',
      image: 'https://images.pexels.com/photos/8106573/pexels-photo-8106573.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'We are looking for actors for our next collaborative project that will explore Brazilian urban narratives.',
      location: 'Studio 2, São Paulo'
    }
  ];

  const activities = language === 'pt' ? activitiesPt : activitiesEn;
  const featuredActivity = activities.find(activity => activity.isFeatured);
  const regularActivities = activities.filter(activity => !activity.isFeatured);

  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-neutral-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy-800 mb-3">{content.title}</h2>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-6"></div>
        </div>

        {featuredActivity && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-burgundy-700">{content.featured}</h3>
              <div className="ml-4 h-px bg-gray-300 flex-grow"></div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredActivity.image} 
                    alt={featuredActivity.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-700 text-sm font-medium mb-4">
                      {featuredActivity.type === 'workshop' ? (language === 'pt' ? 'Workshop' : 'Workshop') : 
                       featuredActivity.type === 'performance' ? (language === 'pt' ? 'Performance' : 'Performance') : 
                       featuredActivity.type === 'lecture' ? (language === 'pt' ? 'Palestra' : 'Lecture') : 
                       (language === 'pt' ? 'Audição' : 'Audition')}
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-gray-800 mb-3">{featuredActivity.title}</h4>
                    <p className="text-gray-600 mb-4">{featuredActivity.description}</p>
                    <div className="space-y-2 mb-6">
                      <p className="flex items-center text-gray-600">
                        <span className="font-medium mr-2">{content.date}</span> {featuredActivity.date}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <span className="font-medium mr-2">{content.location}</span> {featuredActivity.location}
                      </p>
                    </div>
                  </div>
                  <button className="self-start px-5 py-2.5 bg-burgundy-600 hover:bg-burgundy-700 text-white font-medium rounded-lg transition-colors">
                    {content.registerNow}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div>
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-serif font-bold text-burgundy-700">{content.upcoming}</h3>
            <div className="ml-4 h-px bg-gray-300 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularActivities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-700 text-sm font-medium">
                      {activity.type === 'workshop' ? (language === 'pt' ? 'Workshop' : 'Workshop') : 
                       activity.type === 'performance' ? (language === 'pt' ? 'Performance' : 'Performance') : 
                       activity.type === 'lecture' ? (language === 'pt' ? 'Palestra' : 'Lecture') : 
                       (language === 'pt' ? 'Audição' : 'Audition')}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-serif font-bold text-gray-800 mb-2">{activity.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{activity.description}</p>
                  <div className="space-y-1.5 mb-4">
                    <p className="flex items-center text-gray-600 text-sm">
                      <span className="font-medium mr-2">{content.date}</span> {activity.date}
                    </p>
                    <p className="flex items-center text-gray-600 text-sm">
                      <span className="font-medium mr-2">{content.location}</span> {activity.location}
                    </p>
                  </div>
                  <button className="text-burgundy-600 hover:text-burgundy-700 font-medium transition-colors flex items-center">
                    {content.learnMore}
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
      </div>
    </section>
  );
};

export default Activities;