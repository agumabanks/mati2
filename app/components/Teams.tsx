// components/Teams.tsx

import React from 'react';
import Image from 'next/image'

interface TeamCategory {
  title: string;
  roles: string[];
}

interface TeamMember {
  name: string;
  role: string;
}

const Teams: React.FC = () => {
  const teamCategories: TeamCategory[] = [
    {
      title: 'Research',
      roles: ['Company Technology', '4', '3', '2', 'X'],
    },
    {
      title: 'Policy',
      roles: ['Company Policy', '4', '3', '2', 'X'],
    },
    {
      title: 'Product',
      roles: ['Company Product', '4', '3', '2', 'X'],
    },
    {
      title: 'Operations',
      roles: ['Company Ops', '4', '3', '2', 'X'],
    },
  ];

  const teamMembers: TeamMember[] = [
    { name: 'Eragy Alpha', role: 'Hardware Specialist & Founder' },
    { name: 'Jane Bashonga', role: 'Policy Analyst' },
    { name: 'Alex Derrick', role: 'Product Manager' },
    { name: 'Emily Solidy', role: 'Software Specialist' },
    // Add more team members as needed
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">


      <div className='grid grid-cols-1 sm:grid-cols-3 my-12'>
            <h2 className="col-span-1 sm:col-span-1 text-3xl font-semibold mb-4">The Team</h2>
            
            <div className="col-span-1 sm:col-span-2">
       
       <div className='pb-10 mb-12'> 
          <div>
         
          <p className='text-lg text-black font-medium mb-10'>
            We’re a team of researchers, engineers, policy experts and operational leaders, with experience 
            spanning a variety of disciplines, all working together to build reliable and understandable AI systems.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2  gap-8'>
            <div>
                <div className="flex flex-col items-center hover:bg-white hover:shadow-md p-2 hover:p-5 rounded">
                            <img   src="picsfloder/whymatic/research.png" 
                            alt="Innovation Icon" 
                            className="w-full h-50 mb-4 rounded-md"  width={400}
                              height={120}
                                
                            />
                          
                          <div className='flex flex-col items-start py-5'>
                            <h3 className="text-xl font-semibold mb-2">Research </h3>
                            
                            < p className="text-gray-600 text-justify">
                                
                            We conduct frontier AI research across a variety of modalities, and explore novel and emerging safety 
                            research areas from interpretability to RL from human feedback to policy and societal impacts analysis.
                            </p>
                      </div>
                  </div>
            </div>

            <div>
                <div className="flex flex-col items-center hover:bg-white hover:shadow-md p-2 hover:p-5 rounded">
                            <img   src="picsfloder/whymatic/policy.png" 
                            alt="Innovation Icon" 
                            className="w-full h-50 mb-4 rounded-md"  width={400}
                              height={120}
                                
                            />
                          
                          <div className='flex flex-col items-start py-5'>
                            <h3 className="text-xl font-semibold mb-2">Policy </h3>
                            
                            < p className="text-gray-600 text-justify">
                                
                            We think about the impacts of our work and strive to communicate what we’re seeing at the 
                            frontier to policymakers and civil society in the US and 
                            abroad to help promote safe and reliable AI.

                          </p>
                      </div>
                  </div>
            </div>

            <div>
                <div className="flex flex-col items-center hover:bg-white hover:shadow-md p-2 hover:p-5 rounded">
                            <img   src="picsfloder/whymatic/product.png" 
                            alt="Innovation Icon" 
                            className="w-full h-50 mb-4 rounded-md"  width={400}
                              height={120}
                            />
                          
                          <div className='flex flex-col items-start py-5'>
                            <h3 className="text-xl font-semibold mb-2">Product </h3>
                            
                            < p className="text-gray-600 text-justify">
                                
                            We translate our research into tangible, practical tools like Continuum that benefit businesses, 
                            nonprofits and civil society groups and their clients and people around the globe.

                              </p>
                      </div>
                  </div>
            </div>


            <div>
                <div className="flex flex-col items-center hover:bg-white hover:shadow-md p-2 hover:p-5 rounded">
                            <img   src="picsfloder/whymatic/ops.png" 
                            alt="Innovation Icon" 
                            className="w-full h-50 mb-4 rounded-md"  width={400}
                              height={120} />
                          
                          <div className='flex flex-col items-start py-5'>
                            <h3 className="text-xl font-semibold mb-2"> Operations </h3>
                            
                            < p className="text-gray-600 text-justify">
                              Our people, finance, legal, and recruiting teams are the human engines that make Anthropic go. 
                              We’ve had previous careers at NASA, startups, and the armed forces and our diverse experiences help make 
                              Anthropic a great place to work (and we love plants!).
                            </p>
                      </div>
                  </div>
            </div>
          </div>
          </div>

       </div>

          {/* Team Members */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Team Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, memberIndex) => (
                <div key={memberIndex} className="bg-white p-6 rounded-md shadow-md">
                  <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
       </div>
              
      </div>



       
      </div>
    </div>
  );
};

export default Teams;
