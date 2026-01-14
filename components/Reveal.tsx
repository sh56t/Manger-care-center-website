import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number; // seconds
  duration?: number; // seconds
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = 'fit-content',
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Animate only once
      }
    }, { threshold: 0.15 }); // Trigger when 15% visible

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0';
    
    // Increased translation values (20 = 5rem = 80px) for a more noticeable slide-in effect
    switch (direction) {
      case 'up': return 'translate-y-20';
      case 'down': return '-translate-y-20';
      case 'left': return '-translate-x-20';
      case 'right': return 'translate-x-20';
      default: return 'translate-y-20';
    }
  };

  return (
    <div 
      ref={ref} 
      style={{ width }}
      className={`${className} relative overflow-hidden`}
    >
      <div
        style={{
          transitionDuration: `${duration}s`,
          transitionDelay: `${delay}s`,
        }}
        className={`transform transition-all ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${getTransform()}`}
      >
        {children}
      </div>
    </div>
  );
};