import React, { useState } from 'react';
import { Section } from '../components/Section';
import { PROGRAMS } from '../constants';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';

type Category = 'social' | 'skills' | 'enterprise';

export const Programs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('social');

  const categories: { id: Category; label: string; icon: string }[] = [
    { id: 'social', label: 'Social Support & Shelter', icon: 'Heart' },
    { id: 'skills', label: 'Skills Development', icon: 'GraduationCap' },
    { id: 'enterprise', label: 'Economic Empowerment', icon: 'Zap' },
  ];

  const activePrograms = PROGRAMS.filter(p => p.category === activeTab);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-brand-darkGreen py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="mx-auto">
            <h1 className="text-4xl font-serif font-bold mb-4">Our Programs</h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              From immediate relief to sustainable economic independence.
            </p>
          </Reveal>
        </div>
      </div>

      <Section>
        {/* Tab Navigation */}
        <Reveal width="100%">
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 font-bold text-lg shadow-sm ${
                  activeTab === cat.id
                    ? 'bg-brand-green text-white shadow-md scale-105 ring-2 ring-offset-2 ring-brand-green'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-brand-green'
                }`}
              >
                <Icon name={cat.icon} size={20} className={activeTab === cat.id ? 'text-white' : 'text-gray-400'} />
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Content Area */}
        <div className="max-w-5xl mx-auto min-h-[400px]">
          <div className="space-y-6">
            {activePrograms.map((program, index) => (
              <Reveal key={program.id} delay={index * 0.15} direction="up" width="100%">
                <div 
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group"
                >
                  {/* Decorative background stripe */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-green group-hover:bg-brand-darkGreen transition-colors"></div>

                  {/* Icon Column */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand-sand rounded-full flex items-center justify-center text-brand-green">
                      <Icon name={program.iconName} size={32} />
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-4 md:mb-0">
                      {program.description}
                    </p>
                  </div>

                  {/* Details Column */}
                  <div className="md:w-1/3 flex-shrink-0 flex flex-col justify-center bg-gray-50 rounded-xl p-5 border border-gray-100">
                     <div className="mb-4">
                        <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block mb-1">Beneficiaries</span>
                        <span className="text-gray-800 font-medium">{program.beneficiaries}</span>
                     </div>
                     <div>
                        <span className="text-xs font-bold text-brand-darkGreen uppercase tracking-wider block mb-1">Key Impact</span>
                        <span className="text-gray-800 italic text-sm">"{program.impact}"</span>
                     </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Approach Section */}
      <Section bg="light">
        <Reveal width="100%">
          <div className="max-w-4xl mx-auto text-center">
             <div className="inline-block p-3 bg-brand-sand rounded-full text-brand-earth mb-4">
               <Icon name="Brain" size={32} />
             </div>
             <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Approach</h2>
             <p className="text-gray-600 text-lg leading-relaxed">
               We believe in a "Whole Person" approach. It is not enough to simply feed a hungry child; we must also ensure they are safe, educated, and emotionally supported. Our programs are interconnected to ensure that families receive comprehensive support that leads to long-term self-reliance.
             </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
};