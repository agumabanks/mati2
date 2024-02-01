// components/AutoScrollingLogos.tsx
import React from 'react';
import  './../globals.css';

interface AutoScrollingLogosProps {
  partnerLogos: React.ReactNode[];
}

const AutoScrollingLogos: React.FC<AutoScrollingLogosProps> = ({ partnerLogos }) => {
  return (
    <div className='flex  overflow-y-auto'>
      {partnerLogos.map((partner, index) => (
        <div key={index} className='h-12'>
          {partner}
        </div>
      ))}
    </div>
  );
};

export default AutoScrollingLogos;
