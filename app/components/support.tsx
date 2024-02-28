// components/SupportComponent.tsx
import React from 'react';
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';
import QuickreplyOutlined from '@mui/icons-material/QuickreplyOutlined';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditOutlined from '@mui/icons-material/EditOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PeopleOutlined from '@mui/icons-material/PeopleOutlined';

 function SupportComponent (){
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-20 px-5 -inset-0 dark:text-black'> 
    <div className="max-w-7xl w-full">
        {/* header */}
        <h2 className="text-5xl text-white font-semibold mb-10">Get Support</h2>
        
        {/* grid */}
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 text-base font-semibold'>
                    <div className="mb-4 bg-neutral-200 hover:bg-white  rounded-xl p-10">
                        <div className='mb-10 pb-20'>
                        <QuickreplyOutlined />
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Product Support</h3>
                            <p className="text-gray-600">For around the clock product support.</p>
                            <a href="/support" className="text-blue-500 hover:underline">
                            Visit Support
                            </a>

                        </div>
                       
                    </div>

                    <div className="mb-4 bg-neutral-200 hover:bg-white rounded-xl p-10">

                        <div className='mb-10 pb-20'>
                            <EditOutlined />
                            </div>

                        <div>
                            
                        <h3 className="text-lg font-semibold mb-2">Matic Academy</h3>
                        <p className="text-gray-600">For guides on Matic products.</p>
                        <a href="/support" className="text-blue-500 hover:underline">
                        Visit Matic Academy
                        </a>

                        </div>
                    </div>

                    <div className="mb-4 bg-neutral-200 hover:bg-white rounded-xl p-10">
                        



                        <div className='mb-10 pb-20'>
                            <PeopleOutlined />
                            </div>



                        <div>
                            
                        <h3 className="text-lg font-semibold mb-2">Matic Community</h3>
                        <p className="text-gray-600">To connect with other business owners.</p>
                        <a href="/support" className="text-blue-500 hover:underline">
                        Visit Seller Community
                        </a>

                        </div>
                    </div>
        </div>
      
        {/* more about */}
        {/* <div className="my-10 mt-40">
            <div className='flex justify-between'>
                
                    <h3 className="flex flex-col text-5xl text-white p-10  font-semibold mb-2">
                        <div>Learn more</div>
                        <div>about Matic.</div> 
                    </h3>
                    
                    <div className='w-1/2 p-10'>
                        <p className="text-gray-300">
                            Get the latest Matic news via email.
                        </p>

                        <form className="flex  text-slate-100  mt-2 w-full">
                            <input
                                type="email"
                                placeholder="Email address"
                                className=" flex-1  border border-gray-300 p-2 rounded-l-md mr-2"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
                            >
                                Submit
                            </button>
                        </form>
                        
                        <p className="text-gray-300 text-sm mt-2">
                            *Please refer to our <a href="#" className='text-blue-500 hover:text-blue-600'>Privacy Policy </a>for more details.
                        </p>
                    </div>
            </div> 
        </div> */}

<div className="my-10 mt-40 px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col sm:flex-row justify-between items-center">
    <h3 className="flex flex-col text-5xl text-white font-semibold mb-2 sm:mb-0">
      <div>Learn more</div>
      <div>about Matic.</div>
    </h3>
    <div className="w-full sm:w-1/2 p-10">
      <p className="text-gray-300">
        Get the latest Matic news via email.
      </p>
      <form className="flex mt-2 w-full">
        <input
          type="email"
          placeholder="Email address"
          className="flex-1 border border-gray-300 p-2 rounded-l-md mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
        >
          Submit
        </button>
      </form>
      <p className="text-gray-300 text-sm mt-2">
        *Please refer to our{" "}
        <a href="#" className="text-blue-500 hover:text-blue-600">
          Privacy Policy
        </a>{" "}
        for more details.
      </p>
    </div>
  </div>
</div>


    </div>
    </div>
  );
};

export default SupportComponent;




// function SupportComponent2() {
//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen py-20 px-5'>
//       <div className="max-w-7xl w-full">
//         {/* header */}
//         <h2 className="text-5xl text-white font-semibold mb-10 text-center">Get Support</h2>
        
//         {/* grid */}
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-base font-semibold'>
//           <div className="bg-neutral-200 hover:bg-white rounded-xl p-10 flex flex-col items-center justify-center">
//             <QuickreplyOutlinedIcon fontSize="large" className='mb-10' />
//             <div>
//               <h3 className="text-lg font-semibold mb-2">Product Support</h3>
//               <p className="text-gray-600">For around the clock product support.</p>
//               <a href="/support" className="text-blue-500 hover:underline">
//                 Visit Support
//               </a>
//             </div>
//           </div>

//           <div className="bg-neutral-200 hover:bg-white rounded-xl p-10 flex flex-col items-center justify-center">
//             <EditOutlinedIcon fontSize="large" className='mb-10' />
//             <div>
//               <h3 className="text-lg font-semibold mb-2">Matic Academy</h3>
//               <p className="text-gray-600">For guides on Matic products.</p>
//               <a href="/support" className="text-blue-500 hover:underline">
//                 Visit Matic Academy
//               </a>
//             </div>
//           </div>

//           <div className="bg-neutral-200 hover:bg-white rounded-xl p-10 flex flex-col items-center justify-center">
//             <PeopleOutlinedIcon fontSize="large" className='mb-10' />
//             <div>
//               <h3 className="text-lg font-semibold mb-2">Matic Community</h3>
//               <p className="text-gray-600">To connect with other business owners.</p>
//               <a href="/support" className="text-blue-500 hover:underline">
//                 Visit Seller Community
//               </a>
//             </div>
//           </div>
//         </div>
      
//         {/* more about */}
//         <div className="my-10 mt-40 text-center">
//           <h3 className="text-5xl text-white font-semibold mb-2">
//             Learn more
//             <br />
//             about Matic.
//           </h3>
//           <div className='w-full md:w-1/2 mx-auto p-10'>
//             <p className="text-gray-300">
//               Get the latest Matic news via email.
//             </p>
//             <form className="flex mt-2">
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 className="flex-1 border border-gray-300 p-2 rounded-l-md mr-2"
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
//               >
//                 Submit
//               </button>
//             </form>
//             <p className="text-gray-300 text-sm mt-2">
//               *Please refer to our <a href="#" className='text-blue-500 hover:text-blue-600'>Privacy Policy</a> for more details.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SupportComponent2;
