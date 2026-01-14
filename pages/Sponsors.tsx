import React, { useState } from 'react';
import { Section } from '../components/Section';
import { IMPACT_STATS } from '../constants';
import { Icon } from '../components/Icon';
import { NavLink } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { CircularStat } from '../components/CircularStat';

interface Donor {
  id: number;
  name: string;
  category: string;
  logoUrl: string;
}

// NOTE: Create a folder named 'images' inside your 'public' folder.
// Add your image files there with the filenames listed below (e.g., kgalema.png, agriseta.png).
const DONORS: Donor[] = [
  { 
    id: 1, 
    name: 'Eazi access', 
    category: 'Total Energies', 
    // Updated to use the reliable thumbnail link format
    logoUrl: 'https://drive.google.com/thumbnail?id=1QZnCeWFHs-BKA2RbqQay8mycE_tzvAJS&sz=w1000' 
  },
  { 
    id: 2, 
    name: 'Toatal energie', 
    category: '', 
    logoUrl: 'https://drive.google.com/thumbnail?id=1gWDu0X9HRJVEA8ERF4rjM1rWAQuVfCpo&sz=w1000' 
  },
  { 
    id: 3, 
    name: "National Development Agency", 
    category: '', 
    logoUrl: 'https://drive.google.com/thumbnail?id=1rioNnqkbbfFZCZa6wc23OaP_xCGxb_Dg&sz=w1000' 
  },
  { 
    id: 4, 
    name: 'Bidvest', 
    category: '', 
    logoUrl: 'https://drive.google.com/thumbnail?id=1kaY8Kew4n6Bl1TWNS489cJxtqGRebUey&sz=w1000' 
  },
  { 
    id: 5, 
    name: 'kgalema motlanthe foundation', 
    category: '', 
    logoUrl: 'https://drive.google.com/thumbnail?id=1HlMMkLjnsuFzgw1nqcWVwaDe2DFTnmmK&sz=w1000' 
  },
  { 
    id: 6, 
    name: 'KP', 
    category: '', 
    logoUrl: "https://drive.google.com/thumbnail?id=1xXH_of8kdSJpvrUBPuVeOc2knJnwROBX&sz=w1000" 
  },
  { 
    id: 7, 
    name: 'Nashua', 
    category: '', 
    logoUrl: 'https://drive.google.com/thumbnail?id=1hhnAsH7hboiTy-ZWsKkeXAjVT5nb4glq&sz=w1000' 
  },
  { 
    id: 8, 
    name: 'Agriseta', 
    category: '', 
    logoUrl: 'https://drive.google.com/thumbnail?id=1TYhM6kYi7P8YG0dr119ozOW1tHtvQGzX&sz=w1000'
  },
  { 
    id: 9, 
    name: 'NWK', 
    category: '', 
    logoUrl: 'https://drive.google.com/thumbnail?id=1UjOXl3HFLHZ-cCYY3mXdEaYighXnvDdb&sz=w1000' 
  },
  { 
    id: 10, 
    name: 'siyabonga africa', 
    category: '', 
    logoUrl: 'https://drive.google.com/thumbnail?id=1kusdEJz5SU1OkoUHy0G6JaMg998DImHS&sz=w1000' 
  },
  { 
    id: 11, 
    name: 'Konica Minolta', 
    category: '', 
    logoUrl: 'https://drive.google.com/thumbnail?id=1I9wwkcJle-eTlOrb15MNL__UbFtjCGrK&sz=w1000' 
  },
  
];

export const Donors: React.FC = () => {
  const [showDonors, setShowDonors] = useState(false);

  return (
    <>
      <div className="bg-brand-darkGreen py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="mx-auto">
            <h1 className="text-4xl font-serif font-bold mb-4">Our Partners & Donors</h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Collaborating for sustainable community development.
            </p>
          </Reveal>
        </div>
      </div>

      <Section>
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">The Ecosystem of Care</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
              Impact is a team sport. We are honored to work with these strategic organizations who provide the resources, expertise, and support that make our work possible.
            </p>
          </Reveal>
          
          {/* Interaction Area: One Image -> Reveal All */}
          {!showDonors ? (
            <Reveal delay={0.2} width="100%">
              <div 
                onClick={() => setShowDonors(true)}
                className="cursor-pointer max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl group relative h-80 bg-gray-900"
              >
                 <img 
                   src="https://drive.google.com/thumbnail?id=1NmobaCp91-qQTWpDwTym8ZRDQx6tmpps&sz=w1000"
                   alt="Our Donors" 
                   className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                 />
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <div className="bg-brand-green/90 p-4 rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon name="Users" size={48} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold mb-2">View Our Corporate Donors</h3>
                    <p className="text-emerald-100 text-lg mb-6">Click to reveal our network of donors</p>
                    <button className="bg-white text-brand-darkGreen font-bold px-8 py-3 rounded-full hover:bg-emerald-50 transition">
                       Show Donors
                    </button>
                 </div>
              </div>
            </Reveal>
          ) : (
            <div className="animate-fadeIn">
                <div className="flex justify-between items-center max-w-6xl mx-auto mb-6 px-4">
                   <h3 className="text-xl font-bold text-gray-800">Our Donors</h3>
                   <button 
                     onClick={() => setShowDonors(false)}
                     className="text-gray-500 hover:text-brand-green flex items-center gap-2 text-sm font-medium transition-colors"
                   >
                     <Icon name="X" size={16} /> Close View
                   </button>
                </div>
                
                {/* Updated Grid: Clustered and Consolidated */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12 justify-items-center">
                  {DONORS.map((donor, index) => (
                    <Reveal key={donor.id} delay={index * 0.05} direction="up" className="w-full">
                      <div 
                        className="group w-full bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full border border-gray-100"
                      >
                        {/* Image Container - Compact height */}
                        <div className="w-full h-32 bg-gray-50 flex items-center justify-center p-3 relative">
                           <img 
                              src={donor.logoUrl} 
                              alt={donor.name} 
                              className="max-h-20 w-auto object-contain bg-white p-1 rounded transition-transform duration-300 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                // Fallback to placeholder if image is missing
                                e.currentTarget.src = `https://placehold.co/400x300/png?text=${encodeURIComponent(donor.name)}`;
                                e.currentTarget.onerror = null;
                              }}
                           />
                        </div>

                        {/* Content - Compact padding */}
                        <div className="p-3 text-center border-t border-gray-50 flex-grow flex flex-col justify-center items-center">
                            <h3 className="text-xs sm:text-sm font-bold text-gray-800 leading-tight mb-1">{donor.name}</h3>
                            {donor.category && (
                              <span className="inline-block px-2 py-0.5 bg-brand-sand text-brand-darkGreen text-[10px] font-bold uppercase tracking-wider rounded-full">
                                {donor.category}
                              </span>
                            )}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
                
                <div className="text-center">
                   <button 
                     onClick={() => setShowDonors(false)}
                     className="bg-gray-100 text-gray-600 hover:bg-gray-200 font-medium px-6 py-2 rounded-full transition"
                   >
                      Collapse List
                   </button>
                </div>
            </div>
          )}
        </div>
      </Section>

      <Section bg="light">
          <Reveal width="100%">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
              <p className="text-gray-600">Your contribution translates directly into measurable impact.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {IMPACT_STATS.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="flex justify-center">
                <CircularStat 
                  value={stat.value} 
                  label={stat.label} 
                  description={stat.description}
                  theme="dark"
                  delay={idx * 0.2}
                />
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Reveal direction="left">
              <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 items-start h-full">
                 <div className="w-20 h-20 rounded-full bg-brand-sand flex items-center justify-center flex-shrink-0 text-brand-green">
                    <Icon name="ShoppingBag" size={32} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">Thandi's Journey</h3>
                   <p className="text-gray-600 italic mb-4">"Manger Care Centre didn't just give me food; they gave me a skill. Today I run my own small sewing business and can support my three children."</p>
                   <span className="text-xs font-bold text-brand-green uppercase tracking-wide">Skill Development Beneficiary</span>
                 </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 items-start h-full">
                 <div className="w-20 h-20 rounded-full bg-brand-sand flex items-center justify-center flex-shrink-0 text-brand-blue">
                    <Icon name="GraduationCap" size={32} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">Michael's Fresh Start</h3>
                   <p className="text-gray-600 italic mb-4">"The after-school program kept me safe and helped me with homework. I am the first in my family to go to university."</p>
                   <span className="text-xs font-bold text-brand-green uppercase tracking-wide">Youth Program Alumni</span>
                 </div>
              </div>
            </Reveal>
          </div>
      </Section>

      <Section>
        <Reveal width="100%">
          <div className="bg-brand-darkGreen rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl">
              <h2 className="text-3xl font-serif font-bold mb-6">Become a Corporate Donor</h2>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <NavLink to="/contact" className="bg-white text-brand-darkGreen font-bold px-8 py-4 rounded-full hover:bg-emerald-50 transition shadow-lg">
                      Contact Us
                  </NavLink>
              </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
};