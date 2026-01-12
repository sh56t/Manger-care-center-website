import React from 'react';
import { Section } from '../components/Section';
import { Icon } from '../components/Icon';

export const ReferralGuidelines: React.FC = () => {
  return (
    <>
      <div className="bg-brand-darkGreen py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Guidelines to Refer Individuals to MCC</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Understanding our intake process to ensure the best care for those in need.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Video Placeholder */}
          <div className="bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video relative flex items-center justify-center group border-4 border-white/10">
             {/* Background Image Placeholder */}
             <div className="absolute inset-0 opacity-40 bg-[url('https://drive.google.com/thumbnail?id=1f7xQOWnxxn-8EWihIqqH3XRuCHLpxJav&sz=w1920')] bg-cover bg-center"></div>
             
             {/* Play Button / Overlay */}
             <div className="relative z-10 text-center text-white p-6">
                <div className="w-20 h-20 bg-brand-green/90 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                   <Icon name="Play" size={32} className="ml-1 fill-white" /> 
                </div>
                <h2 className="text-2xl font-bold mb-2">Video Guide Coming Soon</h2>
                <p className="text-emerald-100 font-medium">We are preparing a detailed video walkthrough of our referral process.</p>
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};