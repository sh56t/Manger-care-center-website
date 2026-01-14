import React from 'react';
import { Program } from '../types';
import { Icon } from './Icon';

interface ProgramCardProps {
  program: Program;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      {program.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={program.imageUrl} 
            alt={program.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-brand-green shadow-sm">
            <Icon name={program.iconName} size={20} />
          </div>
        </div>
      )}
      
      <div className={`flex-grow p-6 ${program.imageUrl ? '' : 'pt-8 border-t-4 border-brand-green'}`}>
        {!program.imageUrl && (
           <div className="w-12 h-12 bg-brand-sand rounded-full flex items-center justify-center text-brand-green mb-4">
              <Icon name={program.iconName} size={28} />
           </div>
        )}
        
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{program.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{program.description}</p>
        
        <div className="mb-2">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wide">For: </span>
            <span className="text-xs text-gray-600">{program.beneficiaries}</span>
        </div>
      </div>
      <div className="bg-brand-sand px-6 py-3 border-t border-gray-100">
          <p className="text-xs text-brand-darkGreen italic">
             <span className="font-semibold">Impact:</span> {program.impact}
          </p>
      </div>
    </div>
  );
};