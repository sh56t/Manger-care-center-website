import React, { useEffect, useRef, useState } from 'react';

interface CircularStatProps {
  value: string;
  label: string;
  description?: string;
  delay?: number;
  theme?: 'light' | 'dark';
}

export const CircularStat: React.FC<CircularStatProps> = ({ 
  value, 
  label, 
  description, 
  delay = 0,
  theme = 'dark'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Radius optimized for 160x160 box
  // Center (80) - Stroke(10)/2 = 75 max radius. Using 65 for comfortable padding.
  const radius = 65; 
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = isVisible ? 0 : circumference;

  const trackClass = theme === 'light' ? 'text-white/20' : 'text-gray-200';
  const progressColor = theme === 'light' ? '#FFFFFF' : '#10B981';
  const valueClass = theme === 'light' ? 'text-white' : 'text-brand-darkGreen';
  const labelClass = theme === 'light' ? 'text-emerald-50' : 'text-gray-800';
  const descClass = theme === 'light' ? 'text-emerald-200' : 'text-gray-500';

  return (
    <div ref={ref} className="flex flex-col items-center justify-center text-center p-2">
      {/* Container Size: w-40 (160px) */}
      <div className="relative w-40 h-40 mb-4 flex items-center justify-center">
        {/* SVG Container with explicit viewBox for perfect centering */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
          {/* Track Circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="currentColor"
            strokeWidth="10"
            fill="transparent"
            className={trackClass}
          />
          {/* Progress Circle (Animated) */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke={progressColor}
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-[2000ms] ease-out"
            style={{ transitionDelay: `${delay}s` }}
          />
        </svg>
        
        {/* Value Text - Centered absolutely */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className={`text-3xl font-bold ${valueClass} leading-none whitespace-nowrap`}>
            {value}
          </span>
        </div>
      </div>

      {/* Labels */}
      <h3 className={`text-lg font-bold mb-2 ${labelClass}`}>{label}</h3>
      {description && (
        <p className={`text-xs max-w-[220px] mx-auto leading-relaxed ${descClass}`}>
          {description}
        </p>
      )}
    </div>
  );
};