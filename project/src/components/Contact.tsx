import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface ContactProps {
  language: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const contentPt = {
    title: 'Contato',
    subtitle: 'Entre em Contato Conosco',
    addressTitle: 'Endereço',
    address: {
      street: 'Rua Augusta, 1500',
      district: 'Consolação',
      cityState: 'São Paulo - SP',
      zipCode: 'CEP 01304-001'
    },
    phoneTitle: 'Telefone',
    phone: '+55 11 3456-7890',
    emailTitle: 'Email',
    email: 'contato@institutointernacional.com.br',
    hoursTitle: 'Horário de Funcionamento',
    hours: {
      weekdays: 'Segunda à Sexta: 9h às 20h',
      saturday: 'Sábado: 10h às 16h',
      sunday: 'Domingo: Fechado'
    },
    form: {
      title: 'Envie-nos uma Mensagem',
      name: 'Nome Completo',
      email: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
      button: 'Enviar Mensagem',
      success: 'Mensagem enviada com sucesso!',
      error: 'Erro ao enviar mensagem. Tente novamente.'
    }
  };

  const contentEn = {
    title: 'Contact',
    subtitle: 'Get in Touch With Us',
    addressTitle: 'Address',
    address: {
      street: 'Rua Augusta, 1500',
      district: 'Consolação',
      cityState: 'São Paulo - SP',
      zipCode: 'ZIP 01304-001'
    },
    phoneTitle: 'Phone',
    phone: '+55 11 3456-7890',
    emailTitle: 'Email',
    email: 'contact@internationalinstitute.com.br',
    hoursTitle: 'Business Hours',
    hours: {
      weekdays: 'Monday to Friday: 9am to 8pm',
      saturday: 'Saturday: 10am to 4pm',
      sunday: 'Sunday: Closed'
    },
    form: {
      title: 'Send Us a Message',
      name: 'Full Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      button: 'Send Message',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.'
    }
  };

  const content = language === 'pt' ? contentPt : contentEn;

  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setIsSubmitting(false);
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
      
      // Clear success message after a few seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy-800 mb-3">{content.title}</h2>
          <p className="text-xl text-gray-600">{content.subtitle}</p>
          <div className="w-20 h-1 bg-gold-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
              <h3 className="text-2xl font-serif font-bold text-burgundy-700 mb-6">{content.form.title}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                    {content.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy-500 focus:border-burgundy-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                    {content.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy-500 focus:border-burgundy-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
                    {content.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy-500 focus:border-burgundy-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                    {content.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy-500 focus:border-burgundy-500 transition-colors"
                  ></textarea>
                </div>
                
                {formStatus === 'success' && (
                  <div className="px-4 py-3 bg-green-100 text-green-700 rounded-md">
                    {content.form.success}
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="px-4 py-3 bg-red-100 text-red-700 rounded-md">
                    {content.form.error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-burgundy-600 hover:bg-burgundy-700 text-white font-medium rounded-md transition-colors inline-flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {content.form.button}
                    </>
                  ) : (
                    <>
                      {content.form.button}
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-burgundy-100 text-burgundy-600">
                      <MapPin />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">{content.addressTitle}</h4>
                    <address className="not-italic text-gray-600">
                      <p>{content.address.street}</p>
                      <p>{content.address.district}</p>
                      <p>{content.address.cityState}</p>
                      <p>{content.address.zipCode}</p>
                    </address>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-burgundy-100 text-burgundy-600">
                      <Phone />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">{content.phoneTitle}</h4>
                    <p className="text-gray-600">{content.phone}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-burgundy-100 text-burgundy-600">
                      <Mail />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">{content.emailTitle}</h4>
                    <p className="text-gray-600">{content.email}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-burgundy-100 text-burgundy-600">
                      <Clock />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">{content.hoursTitle}</h4>
                    <div className="text-gray-600">
                      <p>{content.hours.weekdays}</p>
                      <p>{content.hours.saturday}</p>
                      <p>{content.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 overflow-hidden h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3307186188!2d-46.65873!3d-23.55368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1653913535493!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa do Instituto Internacional de Atuação"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;