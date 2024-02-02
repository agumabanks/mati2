/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import WhyChooseMatic from '../components/WhyChooseMatic'
import OurValues from '../components/OurValues';
import CompanyNews from '../components/CompanyNews';
import Teams from '../components/Teams';
import { ImageApp } from '../components/animatedImage';
import ScrollButton from '../components/scrollbutton';
import App33 from '../components/horizontalSlide';


const AboutMatic: React.FC = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-4xl font-extrabold mb-8">About Matic Enterprises</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
            <img   src="picsfloder/whymatic/a1.png" 
            alt="About Matic Image" 
            className="w-full h-auto rounded-md shadow-lg" 
            height={32}
            width={32}/>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-gray-700 text-lg mb-6">
            Matic Enterprises, established in 2013, stands at the forefront of technological innovation. We are dedicated to designing and developing cutting-edge computer products that redefine user experiences.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Our mission is to empower Africa through innovative technology, offering high-performance solutions tailored to the diverse needs of our customers and development partners.
          </p>
          <p className="text-gray-700 text-lg">
            At Matic, we are driven by a passion for innovation, a commitment to quality, and a focus on creating a positive impact within the local communities we serve.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-3xl font-bold mb-6"> Our Mission and Vision </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
            <p className="text-gray-700">
              Empower Africa through innovative technology, providing high-performance solutions that meet the diverse needs of our customers and development partners.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Vision</h4>
            <p className="text-gray-700">
              To be the forefront technology firm, leading the industry with groundbreaking products and contributing to the advancement of our society.
            </p>
          </div>
        </div>
      </div>

      {/* Add other sections (Core Values, Company History, etc.) with similar styling improvements */}

    </div>
  );
};





// const AboutMatic2: React.FC = () => {
//   return (
  
//   );
// };





const CompanyHistory: React.FC = () => {
  const milestones = [
    { year: '2013', event: 'Company Founded', description: 'Matic Enterprises was founded with a vision to revolutionize the tech industry in Africa.' },
    { year: '2015', event: 'Expansion and Growth', description: 'Matic expanded its product line and experienced significant growth in the African market.' },
    { year: '2018', event: 'Innovative Product Launch', description: 'Introduced the Continuum All In One PC, setting new standards in computing experience.' },
    { year: '2020', event: 'Global Recognition', description: 'Received international recognition for excellence in technology innovation.' },
    { year: '2022', event: 'Community Impact Initiative', description: 'Launched a community-focused initiative to support local innovation and social mobility.' },
    { year: '2023', event: 'Future Expansion Plans', description: 'Outlined ambitious plans for further expansion and groundbreaking product launches.' },
    // Add more historical milestones as needed
  ];

  return (
    <div className="py-16 m-12 min-h-screen border-b border-gray-500 mb-20 ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Company History</h2>

        <div className="relative">
          <div className="absolute h-full w-px bg-gray-300 left-1/2 transform -translate-x-1/2"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative mb-8 md:mb-0">
                <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer">
                  <div className="flex items-center mb-4">
                    <p className="text-lg font-semibold dark:text-gray-500">{milestone.year}</p>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 dark:text-gray-700">{milestone.event}</h4>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
                {index !== milestones.length - 1 && (
                  <div className="absolute h-full w-2 bg-gray-300 left-1/2 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export  default function About(){
    return (
       
      <div className="min-h-full max-w-full">
        <div className='w-full'>

        <div className='min-h-screen  bg-stone-100 dark:text-black -mt-5'>
            
            <div className='flex  min-h-screen flex-col items-center justify-center'>
              <div className=" text-5xl font-bold px-10 pb-5">
                  <div className="flex flex-col items-center justify-between">
                    <div className="-ml-5 text-7xl font-extrabold  text-center mb-4 md:mb-0 tracking-wide">The rise of</div>
                    <div className="-ml-5 font-extrabold italic   text-center md:mt-4 md:ml-2 tracking-wide">African Technology</div>
                  </div>
              </div>

              <div className='flex flex-col items-center justify-center '>
                  <div className='flex flex-col items-center justify-center text-center text-lg font-medium	tracking-wide'>
                    <div>                       
                        A tech pioneer in the African revolution, our diverse Kinshasa-based team
                    </div>

                    <div>                       
                         envisions groundbreaking ideas for elevating
                    </div>

                    <div>                       
                         African technology.       
                    </div>

                   </div>

                    <div className='mt-5 '>
                      <button className='my-3 bg-black text-white hover:bg-red-500 hover:text-white rounded py-3 px-7 '>Join Us </button>
                      </div>
              </div>
             
            </div>

          </div>
        
        
        <div className="container mx-auto mt-20 w-full p-4 ">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
              <div>
                  <img   src="picsfloder/whymatic/a1.png" 
                  alt="About Matic Image" 
                  className="w-full h-300 rounded-md shadow-lg" width={300} height={300}/>
              </div>

              <div className="flex flex-col justify-center dark:text-white text-justify">
              <h2 className="text-4xl font-extrabold mb-8">About Matic Enterprises</h2>

                <p className="flex flex-col text-gray-700 dark:text-gray-400 text-lg mb-6">
                      Matic Enterprises, established in 2013, stands at the forefront of technological innovation. 
                      We are dedicated to designing and developing cutting-edge computer products that redefine user experiences.

                      We are a forward-thinking tech company at the forefront of the African technology revolution. 
                      Our diverse team, headquartered in Kinshasa (DRC), brings together experts from various fields, 
                      including Hardware assembly, machine learning, Software Development, and Digital business Solutions.
                      As a cohesive unit, we collectively envision and assess the impact and feasibility 
                      of groundbreaking research ideas, driving the mission to elevate African technology to new heights.

                     <span className='font-bold pt-3 text-black'> Safer System:</span>
                      We are dedicated to making a positive impact on society, promoting a future where technology serves as a force for good. Together with our customers, partners, and communities, we strive to create a world where safety, innovation, and human-centric design converge seamlessly for the benefit of all.

                       <span className='font-bold pt-3 text-black'>Innovation:</span>
                      Our relentless pursuit of innovation is not just a goal; it's a mindset that permeates everything we do. We believe in the power of innovation to transform the African digital landscape, offering the most advanced and efficient products and services.

                       <span className='font-bold pt-3 text-black'>Quality:</span>
                      Quality is not just a standard; it's a foundation. We take pride in delivering a robust and reliable platform that meets and exceeds industry standards. Our commitment to quality ensures the highest standards of quality, providing you with a secure and seamless experience in the decentralized ecosystem.

                       <span className='font-bold pt-3 text-black'>Local Impact:</span>
                      We understand the importance of community and recognize the role of technology in empowering local economies. Matic's commitment to local impact extends beyond technology, creating a positive ripple effect that enhances communities and economies at the grassroots level.
        
                
                </p>
                
              </div>
            </div>

            <div className="flex items-center justify-center mt-12 p-12 min-h-screen border-b border-gray-500 mb-20 dark:text-white">

                <div className='grid grid-cols-1 sm:grid-cols-3 my-12'>
                      <h2 className="col-span-1 sm:col-span-1 text-3xl font-semibold mb-4">Our Mission and Vision</h2>
                      
                      <div className="col-span-1 sm:col-span-2">
                          
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
                          <p className="text-gray-700 dark:text-gray-400">
                            Empower Africa through innovative technology, providing high-performance solutions that meet the diverse needs of our customers and development partners.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-4">Our Vision</h4>
                          <p className="text-gray-700 dark:text-gray-400">
                            To be the forefront technology firm, leading the industry with groundbreaking products and contributing to the advancement of our society.
                          </p>
                        </div>
                      </div>


                      </div>
                        
                </div>
              
            </div>

            




            {/* Why Matic  */}
            <div className="flex flex-col  mx-auto min-h-screen border-b border-gray-500 mb-20">

                <div className='grid grid-cols-1 sm:grid-cols-3   border-b border-gray-500 mb-10'>
                      <h2 className="col-span-1 sm:col-span-1 text-3xl font-semibold mb-4">Why Matic Enterprises?</h2>
                      
                      <div className="col-span-1 sm:col-span-2  mb-20">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div className="flex flex-col items-center">
                          <img   src="picsfloder/whymatic/light.png" alt="Innovation Icon" className="w-16 h-16 mb-4"  width={400}
                            height={32}
                            priority 
                          />
                        <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                            < p className="text-gray-600 dark:text-gray-400">
                              We are committed to continuous innovation, integrating the latest technologies into our products to 
                              provide cutting-edge solutions.

                                  
                            </p>
                      </div>
                  <div className="flex flex-col items-center">
                      <img   src="picsfloder/whymatic/magn.png" alt="Quality Icon" className="w-16 h-16 mb-4"  width={400}
                        height={32}
                         
                      />

                    <h3 className="text-xl font-semibold mb-2">Quality</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Our products undergo rigorous testing to ensure durability, performance, and utmost satisfaction for our customers.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                      <img   src="picsfloder/whymatic/local.png" alt="Local Impact Icon" className="w-16 h-16 mb-4"  width={400}
                    height={32}
                     />
                    <h3 className="text-xl font-semibold mb-2">Local Impact</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We are dedicated to supporting local innovation, aiming to advance social mobility and strengthen business ecosystems within Africa.
                    </p>
                  </div>
                </div>
                      </div>
                        
                </div>

                <div className="flex  mx-auto ">



            {/* Our Purpose  public\picsfloder\whymatic\policy.png*/}

            <div className='grid grid-cols-1 sm:grid-cols-3 my-12'>
                    <h2 className="col-span-1 sm:col-span-1 text-3xl font-semibold mb-4">Our Purpose</h2>
                    
                    <div className="col-span-1 sm:col-span-2">
                      
                      <p className='text-lg text-black font-medium mb-10 dark:text-gray-400'>
                        We believe AI and technology will have a vast impact on the African Continent and the world. 
                        Matic is dedicated to building systems and computers that people can rely on and generating research 
                        about the opportunities and risks of AI and Computers.
                      </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                          <div className="flex flex-col items-center hover:bg-white dark:hover:bg-gray-700 hover:shadow-md p-2 hover:p-5 rounded">
                              <img   src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                              alt="Innovation Icon" 
                              className="w-full h-40 mb-4 rounded-md"  width={400}
                                height={120}
                                 
                              />
                            
                            <div className='flex flex-col items-start py-5'>
                              <h3 className="text-xl font-semibold mb-2">We Build Safer Systems</h3>
                              
                              < p className="text-gray-600 dark:text-gray-400 text-justify">
                                  
                                  We aim to build frontier Smart Systems that are reliable, interpretable, and steerable. 
                                  We conduct frontier research, develop and apply a variety of safety techniques, and deploy 
                                  the resulting systems via a set of partnerships and products.

                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col items-center hover:bg-white hover:shadow-md dark:hover:bg-gray-700 p-2 hover:p-5 rounded">
                              <img   src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                              alt="Innovation Icon" 
                              className="w-full h-40 mb-4 rounded-md"  width={400}
                                height={120}
                                 
                              />
                            
                            <div className='flex flex-col items-start py-5'>
                              <h3 className="text-xl font-semibold mb-2">Interdisciplinary</h3>
                              
                              < p className="text-gray-600 text-justify dark:text-gray-400">
                                  
                              Anthropic is a collaborative team of researchers, engineers, policy experts, business leaders and operators, 
                            who bring our experience from many different domains to our work.

                              </p>
                            </div>
                          </div>


                          <div className="flex flex-col items-center hover:bg-white hover:shadow-md dark:hover:bg-gray-700 p-2 hover:p-5 rounded">
                              <img   src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                              alt="Innovation Icon" 
                              className="w-full h-40 mb-4 rounded-md"  width={400}
                                height={120}
                                // priority 
                              />
                            
                            <div className='flex flex-col items-start py-5'>
                              <h3 className="text-xl font-semibold mb-2">Matic is One Piece of a Big Puzzle</h3>
                              
                              < p className="text-gray-600 text-justify dark:text-gray-400">
                                  
                              AI has the potential to fundamentally change how the world works. We view ourselves as just one piece of this evolving puzzle.
                              We collaborate with civil society, government, academia, nonprofits and industry to promote safety industry-wide.

                              </p>
                            </div>
                          </div>



                          
                        
                    </div>

                  </div>
                      
              </div>
              </div>
            </div>

            </div> 

            <CompanyHistory />

            <Teams />
     
     <div className='p-4'>
       <CompanyNews />
     </div>
         
        </div>
        
       
      </div>
      
    )
}