import React from 'react';
import { Section } from '../components/Section';
import { Reveal } from '../components/Reveal';

export const Gallery: React.FC = () => {
  const images = [
    { url: 'https://drive.google.com/thumbnail?id=1nqJaq2cN-VClPkd-tMT527nhv_Kk6AMz&sz=w1000', caption: 'Community Support' },
    { url: 'https://drive.google.com/thumbnail?id=1_uh5djz4RnU4gWilpf-0tnMjpOX-z5Px&sz=w1000', caption: 'Skills Training' },
    { url: 'https://drive.google.com/thumbnail?id=1_yXl6vPdYFPyyc6cnm6YcQo6ylM_2UI5&sz=w1000', caption: 'Vocational Workshops' },
    { url: 'https://drive.google.com/thumbnail?id=1LhBN8XBmvgghn-gStxzsWnLKrXugJLtw&sz=w1000', caption: 'Youth Development' },
    { url: 'https://drive.google.com/thumbnail?id=1p71OMbnkjXHnzbKfWl3t0rE-xBwTNd_A&sz=w1000', caption: 'Agricultural Projects' },
    { url: 'https://drive.google.com/thumbnail?id=1btPr_KMFg2tLUwQFwODUceFrIEBMnAvZ&sz=w1000', caption: 'Team Building' },
    { url: 'https://drive.google.com/thumbnail?id=1cTWODvnZR3lXeOKTw1JYkndX35rgnUGh&sz=w1000', caption: 'Bakery Training' },
    { url: 'https://drive.google.com/thumbnail?id=1RDI8x_fAjieL0xc5COBD_18TxDVA-fJN&sz=w1000', caption: 'Support Groups' },
    { url: 'https://drive.google.com/thumbnail?id=1KwxYNPtT9puuSZxYi_7gEMJ8AGqwOnVl&sz=w1000', caption: 'Community Outreach' },
    { url: 'https://drive.google.com/thumbnail?id=1eKGRGXkdQ2uPJCykUlEwBoOoUsqHpTMY&sz=w1000', caption: 'Sustainable Farming' },
    { url: 'https://drive.google.com/thumbnail?id=1hpD8X3gdTsCteNyRcZcDlHCuwOcE2UxP&sz=w1000', caption: 'Education Initiatives' },
    { url: 'https://drive.google.com/thumbnail?id=1aoyPaT7809QQ4_gS_tHP6IUt66CCdOsf&sz=w1000', caption: 'Celebrations' },
    { url: 'https://drive.google.com/thumbnail?id=1NmobaCp91-qQTWpDwTym8ZRDQx6tmpps&sz=w1000', caption: 'Partnerships' },
    { url: 'https://drive.google.com/thumbnail?id=1kyqEqgchiquYPQbr4-5UrS_c3_slNrPw&sz=w1000', caption: 'Empowerment' },
    { url: 'https://drive.google.com/thumbnail?id=1UDuP4-LTD2lKBLPI9s-bh4WtpHceJCqC&sz=w1000', caption: 'Growth & Impact' },
  ];

  return (
    <>
      <div className="bg-brand-darkGreen py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="mx-auto">
            <h1 className="text-4xl font-serif font-bold mb-4">Gallery</h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Moments of joy, resilience, and community in action.
            </p>
          </Reveal>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => {
            // Check for images that need significant scaling due to source content size
            const isZoomedImage = img.caption === 'Sustainable Farming' || img.caption === 'Growth & Impact';
            
            return (
              <Reveal key={idx} delay={(idx % 3) * 0.1} direction="left" width="100%">
                <div className="group relative overflow-hidden rounded-xl h-72 md:h-80 w-full cursor-pointer shadow-sm hover:shadow-lg transition-all">
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isZoomedImage ? 'scale-[1.7] group-hover:scale-[1.8]' : 'group-hover:scale-110'
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.caption}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
};