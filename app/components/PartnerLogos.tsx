// components/PartnerLogosGrid.tsx

import React from 'react';
import Image from 'next/image';

// Interface for a partner logo
interface PartnerLogo {
  index: number;
  imagePath: string;
  companyName: string;
}

// Interface for the props of the PartnerLogosGrid component
interface PartnerLogosGridProps {
  logos: PartnerLogo[];
}

const PartnerLogosGrid: React.FC<PartnerLogosGridProps> = ({ logos }) => {
  return (
    <div className='max-w-7xl'>
      <h2 className="text-2xl font-semibold mb-4">Our Partnering Companies</h2>
      <div className="flex justify-center items-center">
        {logos.map(( logos) => (
            <div  key={logos.index}
            className="flex size-1/2  hover:bg-red-100 p-10 hover:p-2 shadow-lg  rounded m-1 p-2"> 

            <img
            src={logos.imagePath}
            alt={`Logo of ${logos.companyName}`}
            className="w-24 h-24 hover:w-30 hover:h-30 object-contain mx-4"
            width={100}
            height={12}
             
          />
          </div>
          
        ))}
      </div>
    </div>
  );
};

// Sample logo data  \picsfloder\ https://github.com/agumabanks/ment/blob/main/public/picsfloder/partnerLogos/soko.png
const sampleLogos: PartnerLogo[] = [
  { index: 1, imagePath: '/picsfloder/partnerLogos/protea.png', companyName: 'Protea Hotel' },
  { index: 2, imagePath: '/picsfloder/partnerLogos/Stripe_logo.png', companyName: 'Soko ug' },
  { index: 2, imagePath: '/picsfloder/partnerLogos/mofped-logo.png', companyName: 'Soko ug' },
  { index: 2, imagePath: '/picsfloder/partnerLogos/edu.png', companyName: 'education' },
  { index: 2, imagePath: '/picsfloder/partnerLogos/soko.png', companyName: 'Soko ug' },
  { index: 2, imagePath: '/picsfloder/partnerLogos/intel.png', companyName: 'Intel' },
  { index: 2, imagePath: '/picsfloder/partnerLogos/vodafone-logo.png', companyName: 'Soko ug' },
  { index: 3, imagePath: '/picsfloder/partnerLogos/amazon.png', companyName: 'Company C' },
];

const PartnerLogosGridExample: React.FC = () => {
  return (
    <div className="flex items-center justify-center mx-auto max-w-7xl m-2 py-2 px-2 lg:px-4">
          <PartnerLogosGrid logos={sampleLogos} />
    </div>
  )
};

export default PartnerLogosGridExample;
