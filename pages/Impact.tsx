import React from 'react';
import { Section } from '../components/Section';
import { IMPACT_STATS } from '../constants';

export const Impact: React.FC = () => {
  return (
    <>
      <div className="bg-brand-darkGreen py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Our Impact</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Measuring the change we make in real lives, every single day.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {IMPACT_STATS.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-brand-green text-center">
              <div className="text-4xl font-bold text-brand-green mb-2">{stat.value}</div>
              <div className="text-lg font-bold text-gray-800 mb-2">{stat.label}</div>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="light">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-serif font-bold text-gray-900">Success Stories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Story 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 items-start">
             <img src="https://picsum.photos/100/100?woman" alt="Thandi" className="w-20 h-20 rounded-full object-cover flex-shrink-0 bg-gray-200" />
             <div>
               <h3 className="text-xl font-bold text-gray-900 mb-2">Thandi's Journey</h3>
               <p className="text-gray-600 italic mb-4">"Manger Care Centre didn't just give me food; they gave me a skill. Today I run my own small sewing business and can support my three children."</p>
               <span className="text-sm font-bold text-brand-green uppercase">Skill Development Beneficiary</span>
             </div>
          </div>
          {/* Story 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 items-start">
             <img src="https://picsum.photos/100/100?boy" alt="Michael" className="w-20 h-20 rounded-full object-cover flex-shrink-0 bg-gray-200" />
             <div>
               <h3 className="text-xl font-bold text-gray-900 mb-2">Michael's Fresh Start</h3>
               <p className="text-gray-600 italic mb-4">"The after-school program kept me safe and helped me with homework. I am the first in my family to go to university."</p>
               <span className="text-sm font-bold text-brand-green uppercase">Youth Program Alumni</span>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};