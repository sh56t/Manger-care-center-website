import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'light' | 'dark' | 'brand';
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, bg = 'white' }) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-brand-sand',
    dark: 'bg-brand-earth text-white',
    brand: 'bg-brand-darkGreen text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};