'use client'
import Image from 'next/image'
import HomeSection from './ProductVideoSection'
export default function ProductsUsers(){
    return (
        

        <div className=''>
            <div className="bg-black min-h-screen ">
          
                <div className='flex items-center justify-center min-h-screen   w-full '>
                    
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl'>
                        <div className='rounded w-full h-auto p-5'>
                        
                        <HomeSection />
                        
                        </div>

                        <div> 
                            <div className='flex items-start justify-between '>
                                <h2  className='font-black text-7xl text-white '>
                                    CONNECTING BOUNDARIES & BEYOND
                                </h2>
                            </div>
                            
                            <div className='mt-8  text-lg text-white '> 
                            Whether it’s Small business or SMEs, Our products and softwares offer advanced security, 
                            scalability, and simplicity of use.                        
                            </div> 
                            
                            <a href='/solutions' 
                            className='flex items-center justify-center rounded-full bg-white hover:bg-red-700  
                                        text-black hover:text-white hover:font-bold py-7 px-2 mt-8 w-1/4  h-10'>
                                See our Solutions
                            </a>
                        </div>

                    </div>   
                
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className='font-black text-7xl text-white p-5  mt-5'> CHECK OUT OUR TABLET </h2>
                        <div className='text-white'>Get the one that matches your vibe.</div>
                        <div className='text-white'>Some cards are only available on subscription plans. Fees may apply.</div>
                        <div className='mt-10'>
                            <div> 
                                <a className='px-5 py-4 mr-3 bg-white text-black font-medium hover:text-blue-300  rounded-full hover:bg-red-700  
                                    hover:text-white hover:font-bold' href="">Learn More 
                                </a>

                                <a className='px-7 py-4 ml-3 bg-white text-black font-medium hover:text-blue-300 rounded-full hover:bg-red-700  
                                    hover:text-white hover:font-bold' href="">Buy Now
                                </a>
                            </div>
                        </div>


                    </div>

                    <img
                        className="relative object-cover h-3/5 w-1/2 mb-10 md:mb-15"
                        src="/picsfloder/ak1.png"
                        alt=""
                        width={500}
                        height={500}
                         
                        />
                </div>

          </div>
        
        </div>

        
    )
}