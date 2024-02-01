// components/WhyChooseMatic.tsx

import React from 'react';
import Image from 'next/image';

const WhyChooseMatic: React.FC = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-semibold mb-8">Why Choose Matic Enterprises?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
            <img   src="/images/innovation_icon.png" alt="Innovation Icon" className="w-16 h-16 mb-4"  width={400}
              height={32}
                
            />
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              < p className="text-gray-600">
                We are committed to continuous innovation, integrating the latest technologies into our products to 
                provide cutting-edge solutions.

                    We are a forward-thinking tech company at the forefront of the African technology revolution. 
                Our diverse team, headquartered in Kinshasa (DRC), brings together experts from various fields, 
                including Hardware assembly, machine learning, Software Development, and Digital business Solutions.
                As a cohesive unit, we collectively envision and assess the impact and feasibility 
                of groundbreaking research ideas, driving the mission to elevate African technology to new heights.        
          
              </p>
        </div>
        <div className="flex flex-col items-center">
            <img   src="/images/quality_icon.png" alt="Quality Icon" className="w-16 h-16 mb-4"  width={400}
              height={32}
               
            />

          <h3 className="text-xl font-semibold mb-2">Quality</h3>
          <p className="text-gray-600">
            Our products undergo rigorous testing to ensure durability, performance, and utmost satisfaction for our customers.
          </p>
        </div>
        <div className="flex flex-col items-center">
            <img   src="/images/local_impact_icon.png" alt="Local Impact Icon" className="w-16 h-16 mb-4"  width={400}
          height={32}
            />
          <h3 className="text-xl font-semibold mb-2">Local Impact</h3>
          <p className="text-gray-600">
            We are dedicated to supporting local innovation, aiming to advance social mobility and strengthen business ecosystems within Africa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMatic;
