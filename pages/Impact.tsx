import React, { useState } from 'react';
import { Section } from '../components/Section';
import { IMPACT_STATS } from '../constants';
import { Reveal } from '../components/Reveal';
import { CircularStat } from '../components/CircularStat';

// Images for the slider (16 images)
const SLIDER_IMAGES = [
  'https://drive.google.com/thumbnail?id=1nqJaq2cN-VClPkd-tMT527nhv_Kk6AMz&sz=w1000',
  'https://drive.google.com/thumbnail?id=1_uh5djz4RnU4gWilpf-0tnMjpOX-z5Px&sz=w1000',
  'https://drive.google.com/thumbnail?id=1_yXl6vPdYFPyyc6cnm6YcQo6ylM_2UI5&sz=w1000',
  'https://drive.google.com/thumbnail?id=1LhBN8XBmvgghn-gStxzsWnLKrXugJLtw&sz=w1000',
  'https://drive.google.com/thumbnail?id=1p71OMbnkjXHnzbKfWl3t0rE-xBwTNd_A&sz=w1000',
  'https://drive.google.com/thumbnail?id=1btPr_KMFg2tLUwQFwODUceFrIEBMnAvZ&sz=w1000',
  'https://drive.google.com/thumbnail?id=1cTWODvnZR3lXeOKTw1JYkndX35rgnUGh&sz=w1000',
  'https://drive.google.com/thumbnail?id=1RDI8x_fAjieL0xc5COBD_18TxDVA-fJN&sz=w1000',
  // Row 2
  'https://drive.google.com/thumbnail?id=1KwxYNPtT9puuSZxYi_7gEMJ8AGqwOnVl&sz=w1000',
  'https://drive.google.com/thumbnail?id=1eKGRGXkdQ2uPJCykUlEwBoOoUsqHpTMY&sz=w1000',
  'https://drive.google.com/thumbnail?id=1hpD8X3gdTsCteNyRcZcDlHCuwOcE2UxP&sz=w1000',
  'https://drive.google.com/thumbnail?id=1aoyPaT7809QQ4_gS_tHP6IUt66CCdOsf&sz=w1000',
  'https://drive.google.com/thumbnail?id=1NmobaCp91-qQTWpDwTym8ZRDQx6tmpps&sz=w1000',
  'https://drive.google.com/thumbnail?id=1kyqEqgchiquYPQbr4-5UrS_c3_slNrPw&sz=w1000',
  'https://drive.google.com/thumbnail?id=1UDuP4-LTD2lKBLPI9s-bh4WtpHceJCqC&sz=w1000',
  'https://drive.google.com/thumbnail?id=1f7xQOWnxxn-8EWihIqqH3XRuCHLpxJav&sz=w1000',
];

const ROW_1 = SLIDER_IMAGES.slice(0, 8);
const ROW_2 = SLIDER_IMAGES.slice(8, 16);

interface MarqueeRowProps {
  images: string[];
  direction?: 'normal' | 'reverse';
  speed?: number; // Duration in seconds
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ images, direction = 'normal', speed = 40 }) => {
  const [isPaused, setIsPaused] = useState(false);
  
  // Triple the images to ensure smooth loop on wide screens
  const displayImages = [...images, ...images, ...images];

  return (
    <div 
      className="flex overflow-hidden relative w-full py-4 select-none"
      onMouseDown={() => setIsPaused(true)}
      onMouseUp={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      role="region"
      aria-label="Image slider, click and hold to pause"
    >
      <div 
        className={`flex gap-6 min-w-full ${direction === 'reverse' ? 'animate-scrollReverse' : 'animate-scroll'}`}
        style={{ 
          animationPlayState: isPaused ? 'paused' : 'running',
          animationDuration: `${speed}s`,
          width: 'fit-content'
        }}
      >
        {displayImages.map((src, idx) => (
           <div key={idx} className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
              <img 
                src={src} 
                className="w-full h-full object-cover" 
                alt="Impact Moment" 
                draggable="false"
              />
           </div>
        ))}
      </div>
    </div>
  );
};

export const Impact: React.FC = () => {
  return (
    <>
      <div className="bg-brand-darkGreen py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="mx-auto">
            <h1 className="text-4xl font-serif font-bold mb-4">Our Impact</h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Measuring the change we make in real lives, every single day.
            </p>
          </Reveal>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {IMPACT_STATS.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.15} direction="up" width="100%" className="flex justify-center h-full">
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
      </Section>

      {/* New Slider Section */}
      <div className="bg-brand-sand py-12 overflow-hidden border-y border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900">Impact in Motion</h2>
          <p className="text-sm text-gray-500 mt-2">Click and hold to pause the gallery</p>
        </div>
        
        {/* Row 1: Left Scroll */}
        <MarqueeRow images={ROW_1} direction="normal" speed={35} />
        
        {/* Row 2: Right Scroll */}
        <MarqueeRow images={ROW_2} direction="reverse" speed={40} />
      </div>
    </>
  );
};