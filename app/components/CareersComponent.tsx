// components/CareersComponent.tsx

import React from 'react';

// Interface for Career Opportunity
interface CareerOpportunity {
  position: string;
  location: string;
  description: string;
}

// Sample data for Career Opportunities
const careerOpportunities: CareerOpportunity[] = [
  {
    position: 'Frontend Developer',
    location: 'Remote',
    description: 'Join our team as a frontend developer and contribute to building cutting-edge web applications.',
  },
  {
    position: 'UX/UI Designer',
    location: 'Kinshasa, KS',
    description: 'Shape the user experience and design visually stunning interfaces for our digital products.',
  },
  {
    position: 'Data Scientist',
    location: 'Kampala, KA',
    description: 'Work on complex data problems, analyze trends, and provide valuable insights for decision-making.',
  },
  // Add more career opportunities as needed
];

const CareersComponent: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid gap-8">
        {careerOpportunities.map((opportunity, index) => (
          <div key={index} className="bg-white  p-6 rounded-lg shadow-md">
            <h3 className="text-xl dark:text-black font-semibold mb-2">{opportunity.position}</h3>
            <p className="text-gray-600  mb-4">{opportunity.location}</p>
            <p className='dark:text-black'>{opportunity.description}</p>
            <div className="mt-4 flex justify-end">
              <a
                href="#apply-link" 
                className="text-blue-500 hover:underline"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersComponent;
