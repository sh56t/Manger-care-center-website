import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Section } from '../components/Section';
import { PROGRAMS, IMPACT_STATS, CORE_VALUES } from '../constants';
import { ProgramCard } from '../components/ProgramCard';
import { Icon } from '../components/Icon';

const STRATEGIC_OBJECTIVES = [
  {
    title: "Provide Secure and Dignified Shelter",
    description: "Deliver safe, stable, and dignified housing solutions for homeless, elderly, and vulnerable individuals, ensuring access to basic human rights and personal development opportunities."
  },
  {
    title: "Deliver Accredited Skills Development",
    description: "Facilitate nationally accredited training through AgriSETA and QCTO programmes, with a focus on agriculture, artisan trades, and enterprise development to promote employability and self-reliance."
  },
  {
    title: "Promote Reintegration through Employment and Incubation",
    description: "Enable reintegration into society by connecting beneficiaries to cooperatives, internships, and entrepreneurial incubation hubs that support long-term income generation and community inclusion."
  },
  {
    title: "Sustain Food Security and Agro-Enterprise",
    description: "Establish resilient food systems through internal crop and livestock production, partnerships with retailers, and agro-processing initiatives that combat hunger and drive economic empowerment."
  },
  {
    title: "Mobilize Diverse and Sustainable Funding",
    description: "Generate income through social enterprises, including a bakery, events, and product distribution, while attracting donor support and corporate social investment aligned with SDG and B-BBEE goals."
  },
  {
    title: "Empower Marginalized Groups for Economic Participation",
    description: "Prioritize the empowerment of youth, women, ex-offenders, and displaced individuals through targeted skills programmes, mentorship, and pathways to full economic inclusion."
  }
];

export const Home: React.FC = () => {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-brand-darkGreen overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Hero image from Google Drive */}
           <img 
             src="https://drive.google.com/thumbnail?id=1f7xQOWnxxn-8EWihIqqH3XRuCHLpxJav&sz=w1920" 
             alt="Manger Care Centre Community" 
             className="w-full h-full object-cover transition-opacity duration-700"
             onLoad={() => setIsHeroLoaded(true)}
             referrerPolicy="no-referrer"
             style={{ opacity: isHeroLoaded ? 1 : 0 }}
           />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col justify-center items-center text-center">
          <h1 
            className={`text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md uppercase ${isHeroLoaded ? 'animate-fadeIn' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            Stop! Help! You Make the Difference!
          </h1>
          <p 
            className={`text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm ${isHeroLoaded ? 'animate-fadeIn' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            We transform lives through holistic care, sustainable skills development, and community empowerment. Since 1986.
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 ${isHeroLoaded ? 'animate-fadeIn' : 'opacity-0'}`}
            style={{ animationDelay: '0.8s' }}
          >
            <NavLink to="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-darkGreen transition-colors px-8 py-4 rounded-full font-bold text-lg">
              Our Story
            </NavLink>
          </div>
        </div>
      </div>

      {/* Intro / Mission Brief */}
      <Section className="text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-brand-darkGreen mb-6">Our Purpose</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            At Manger Care Centre (MCC), we restore dignity, hope, and opportunity to those facing vulnerability and homelessness. Beyond providing food and shelter, we invest in holistic development—equipping individuals with skills, independence, and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
          <div className="bg-brand-sand p-8 rounded-2xl border-t-4 border-brand-blue shadow-sm hover:shadow-md transition-shadow">
             <h3 className="text-2xl font-serif font-bold text-brand-blue mb-4 flex items-center gap-3">
                <Icon name="Eye" size={28} /> Our Vision
             </h3>
             <p className="text-gray-700 text-lg leading-relaxed">
               Our vision is to create a caring and loving environment that enables positive upliftment and empowerment for people.
             </p>
          </div>
          <div className="bg-brand-sand p-8 rounded-2xl border-t-4 border-brand-green shadow-sm hover:shadow-md transition-shadow">
             <h3 className="text-2xl font-serif font-bold text-brand-green mb-4 flex items-center gap-3">
                <Icon name="Target" size={28} /> Our Mission
             </h3>
             <p className="text-gray-700 text-lg leading-relaxed">
               Our mission is to manage projects that provide food, clothing, skills development, employment opportunities, rehabilitation services, and housing for our beneficiaries. We also give access to psychosocial, health, and spiritual guidance counselling, training on life skills, encouraging on-the-job development, and training to empower the vulnerable to feel valuable as society members.
             </p>
          </div>
        </div>

        <div className="text-center">
           <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-wide text-sm">Guided by our Core Values</h3>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {CORE_VALUES.map((val, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 group">
                   <div className="w-12 h-12 rounded-full bg-emerald-50 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                      <Icon name={val.iconName} size={20} />
                   </div>
                   <span className="font-medium text-gray-800">{val.title}</span>
                </div>
              ))}
           </div>
        </div>
      </Section>

      {/* Focus Areas Preview */}
      <Section bg="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Strategic Focus Areas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From emergency shelter to sustainable enterprise, our programs cover the full spectrum of community restoration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.slice(0, 3).map(program => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
        <div className="text-center mt-12">
          <NavLink to="/programs" className="inline-block px-6 py-3 border border-brand-green text-brand-green font-medium rounded-lg hover:bg-brand-green hover:text-white transition">
            Explore All Projects
          </NavLink>
        </div>
      </Section>

      {/* Impact Highlights */}
      <Section bg="brand" className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-emerald-800/50">
          {IMPACT_STATS.map((stat, idx) => (
            <div key={idx} className="p-4">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-emerald-100 font-medium text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Strategic Objectives */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-brand-darkGreen mb-4">Our Strategic Objectives</h2>
          <div className="w-24 h-1 bg-brand-earth mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STRATEGIC_OBJECTIVES.map((obj, index) => (
            <div key={index} className="flex flex-col h-full bg-gray-50 p-6 rounded-xl border-l-4 border-brand-green hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-3">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-green text-white font-bold text-sm">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-gray-900 leading-tight pt-1">{obj.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-12">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="bg-brand-blue rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
          <div className="md:w-1/2 relative h-64 md:h-auto">
             <img 
               src="https://drive.google.com/thumbnail?id=1Jzj0vNA-qcl2dwThyWyRqpYpz7kl1UiO&sz=w1000" 
               alt="Zen Teitge speaking to investors" 
               className="absolute inset-0 w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white">
            <h2 className="text-3xl font-serif font-bold mb-4">Stop! Help! You Make the Difference!</h2>
            <p className="text-blue-100 mb-8 text-lg">
              MCC is actively seeking corporate social investment (CSI) partners. Partner with us to drive sustainable enterprise development and create lasting socio-economic impact.
            </p>
            <div className="flex gap-4">
              <NavLink to="/contact" className="bg-white text-brand-blue px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition">
                Partner With Us
              </NavLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};