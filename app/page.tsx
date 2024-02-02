/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import MobileMenu from './components/mobilemenu'
// import Footer from 'components/footer'
import RoundedButtons from './components/round_buttons'
import Testimonials from './components/testmonies'
import ProductsUsers from './components/productUsers'
import NewsComponent from './components/news'
import SupportComponent from './components/support'
import pic1 from '@/app/assets/images/matic.png';
import AutoHorizontalScroll from './components/news/horizontalScroll'

//  <img src={pic1} alt="photo" fill={true} public\picsfloder\1.png/>


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      
    <div className=' flex flex-col items-center justify-center min-h-screen max-w-7xl  py-1 -mt-10 '>
     
           <div className='grid grid-cols-1 sm:grid-cols-3 mt-12 h-full'>
              <div className=' py-20'>
                        
                        <div>
                              <h3 className='mb-3 text-2xl text-black font-bold mb-5 mr-10 dark:text-white'>Digital Transformation Gateway</h3> 
                              <div className='mb-3 text-base font-light mb-5 mr-10' >
                              A driven technology company with 100% local proprietorship, committed to playing 
                              a positive role that supports local innovation and develops innovative technology 
                              solutions to address social and business needs of customers in Africa.
                              
                              </div>

                              <div className='mt-8'>
                                    <button
                                      type="button"
                                       className="inline-flex items-center rounded-md border border-red-700 bg-transparent px-4 py-3 text-sm font-medium  shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 hover:text-white"
                                    >
                                      Get started
                                    </button>

                                    <button
                                      type="button"
                                      className="inline-flex items-center ml-2 rounded-md border border-transparent bg-red-700 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                    >
                                      Contact Sales
                                    </button>
                              </div>
                        </div>
              </div>
                    
                    
               <div className="col-span-1 sm:col-span-2 ml-15 -mt-10 w-full h-full">
        
                      <div className='grid grid-cols-3 gap-4 w-full h-full items-center justify-center'>
                              
                              <div className="p-3 h-auto w-full ">
        
                                <img alt="df " className="relative h-50 w-auto object-cover rounded"
                                              src={"/picsfloder/home/1.jpg"}
                                              
                                              width={180}
                                              height={427}
                                               
                                            />

                             {/* public\picsfloder\home\2.jpg */}

                              </div>
        
                              <div className="">
        
                                  <img
                                                className="relative w-full h-150 object-cover rounded"
                                                src={"/picsfloder/home/2.jpg"}
                                                alt=""
                                                width={180}
                                                height={400}
                                                  //  
                                              />

                                  
                              </div>
        
                              <div className="p-3 h-full w-full ">
                                          <img
                                              className="relative w-auto h-full rounded"
                                              src="/picsfloder/3.png"
                                              alt=""
                                              width={180}
                                              height={470}
                                               
                                            />
        
                              </div>
        
                                
                      </div>
               
                  </div>
                      
           </div>

    
     </div>





    <div className="relative flex place-items-start 
      before:absolute before:h-[300px] before:w-[480px] 
      before:-translate-x-1/2 before:rounded-full 
      before:bg-gradient-radial before:from-white 
      before:to-transparent before:blur-2xl 
      before:content-[''] 
      after:absolute 
      after:-z-20 after:h-[180px] 
      after:w-[240px] after:translate-x-1/3 
      after:bg-gradient-conic after:from-sky-200 
      after:via-blue-200 after:blur-2xl after:content-[''] 
      before:dark:bg-gradient-to-br before:dark:from-transparent 
      before:dark:to-blue-
      700 before:dark:opacity-10 
      after:dark:from-sky-900 after:dark:via-[#EAFF01] 
      after:dark:opacity-40 before:lg:h-[360px] z-[-1]
      ">
        
        <div>
          {/* <h3>Sell anywhere easily, quickly, and seamlessly.</h3>
           Try the new Square POS demo */}
        </div>
      </div>

      <div className="mb-32 grid gap-4 sm:grid-cols-3  lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left ">
        
        
        <div className=' items-center m-4 '>
      
          {/* <video className='' src="/videos/v1.mp4"  >
          
          </video> */}

          <img src="/picsfloder/products/c1.jpg" className='' alt="" />

          <div className='mt-10  text-xl font-light '>
           <span className='font-bold'>Continuum:</span> Tech innovation blending African craftsmanship.
           </div>
        </div>



        <div className=' m-4'>
             {/* <video src="/videos/v2.mp4"></video> */}
             <img src="/picsfloder/products/8.jpg" alt="" />
             <div className='mt-10 text-xl  font-light '>
             <span className='font-bold'>Enigma X:</span>  Precision-crafted laptop, gateway to seamless digital experience.
            {/* Our Innovations propels Africa forward, fostering empowerment. */}
          </div>
        </div> 
        
        <div  className=' m-4'>
            {/* <video src="/videos/v3.mp4"></video> */}
            <img className='w-full' src="/picsfloder/products/a1.jpg" alt="" />
            <div className='mt-10 text-xl  font-light '>
            <span className='font-bold'>Akongo Tablet:</span>  Merging design and tech for seamless connectivity.
            {/* Tech-driven empowerment: Africa rises through innovation. */}
          </div>
            

        </div>
        


      </div>
    
      <div className='container mx-auto  mt-20 max-w-7xl my-20 h-screen dark:text-black'>
          <div className='grid grid-cols-1 sm:grid-cols-2 items-center bg-white rounded-xl h-4/5 mt-20'>
          
          
            <div className='mx-auto p-8 text-xl font-light'> 
              <div className='my-5'>
              Stimulate the global competitiveness of Business and Education in Africa with our customer-tailored products.
              <p className='mt-5'>Embrace the future with products that honor the past, where tradition meets technology.</p>




              </div>
            <button type="button"
                    className="inline-flex items-center rounded-md border border-red-700 bg-transparent px-4 py-3 px-4 text-sm 
                    font-medium  shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                    hover:text-white hover:font-bold mt-3"
                  >
                    Read More
                  </button>

            </div>
         
          <div className=' h-full w-full object-cover -mr-40 rounded md:rounded-xl p-5 ' >
            <img
              className=" h-full w-full object-cover -mr-40 rounded-xl shadow-md hover:shadow-xl"
              src="/picsfloder/ep1.png"
              alt=""
              width={500}
              height={500}
               
            />
          </div>
          
        </div>
      </div>
      



      <div className="bg-white  p-15 lg:py-14 m-22 w-full dark:text-black ">
              
              <div className=''>
                    <div className='flex flex-col items-center justisfy-center'>
                      
                      <div className='flex flex-col content-center items-center mb-6'>
                        <div className='font-bold text-5xl pb-10'>
                           Enigma X
                        </div>
                        <div className='text-lg font-light'>Titanium. So Stron. So light. So Pro</div>
                        <div> 
                        <a className='px-3 text-red-700 font-medium hover:text-blue-300 ' href="">Learn More </a>
                        <a className='px-3 text-red-700 font-medium hover:text-blue-300 ' href="">Buy Now</a>
                        </div>
                      </div>

                      <img
                        className="relative mt-15 pt-10  h-full w-auto"
                        src="/picsfloder/22.png"
                        alt="  "
                        width={400}
                        height={400}
                         
                      />
                    </div>  
              </div>
               
      </div>


      <div className='Container mx-auto px-24 sm:px-8 bg-black min-w-screen w-full h-full  p-10 '>
        <div className='flex  flex-col items-center justify-between mt-10'>
          <h2 className='font-black text-7xl text-white p-5  mt-5'>
            CONTINUUM  IS  HERE
          </h2>

          {/* hover:bg-red-700  
                                    hover:text-white hover:font-bold */}

          <a href='' className='flex items-center justify-center rounded-full  
          bg-white text-md text-black font-light text-black px-4 py-3 h-26 w-40 my-10 hover:bg-red-700 hover:text-white hover:font-bold'> Check it out 
          </a>
          <div>
          <img
            className="relative  h-500 w-500"
            src="/picsfloder/co1.png"
            alt="  "
            width={500}
            height={500}
             
          />

          
          </div>
        </div>
      </div>


      <div className='Container  bg-black min-w-screen w-full h-full '>


         <ProductsUsers></ProductsUsers>
      </div>

    <div className='container mx-auto px-4 sm:px-6 lg:px-8 my-10 max-w-full min-h-screen bg-gray dark:border-b border-white'>
      <div className='p-20'>
          <div className='text-5xl text-black font-semibold mb-14 ml-5'> 
         
            <div>
              Hear from
            </div>

            <div>
              Matic.
            </div> 
            
          </div >
         
         {/* <NewsComponent /> */}

         <AutoHorizontalScroll />
         
      </div>
    </div>
    
  {/* Get support */}
  <div className="bg-black  p-2 lg:py-4  w-full min-h-screen dark:border-b border-white "> 
    <SupportComponent />

  </div>


  <div className='py-30 mb-40'>
      <Testimonials></Testimonials>
  </div>
    

   <div className='container  mx-auto px-4 sm:px-6 lg:px-8 my-40  mb-30 max-w-5xl'>
      <div className='relative '>
        <div className='flex flex-col items-center  mx-auto'>
          <h2 className='flex items-center justify-center font-black text-6xl text-center '>
            JOIN THE 1000+ USING MATIC PRODUCTS
          </h2> 

          <a href='/support'>
              <div  className='bg-black  dark:bg-white dark:text-black flex items-center justify-center rounded-full text-white font-bold px-7 py-4 mt-12  '>
                  Get Started
              </div> 
                
          </a> 
        </div>
      </div>
        
  </div>

  <div className='py-30 mb-20'>
      <Testimonials></Testimonials>
  </div> 

</main>
  )
}
