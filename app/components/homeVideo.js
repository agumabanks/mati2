

import React, { useEffect, useRef } from "react";
import Image from 'next/image';


export default function VideoSection() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
         


<div>
 
       <video
          className="w-full rounded-md drop-shadow-md" // maxWidth: "100%", width: "800px", margin: "0 auto" }}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src="/public/videos/v1.mp4"
          ref={videoEl} 
          //public\videos\v1.mp4
        />
      </div>


        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {/* Grid of 2 cols and 2 rows /picsfloder/protect.jpg*/}
          <div className="bg-gray-300 p-4 rounded-md drop-shadow-md">
                <img src="/picsfloder/22.png" alt='' 
                className="w-auto h-50 mb-2 "
                
                width={400}
                          height={32}
                          priority/>
             

              <div className="flex flex-col items-center justify-center ">
                 <p className="text-xl font-bold text-gray-800">Continuum</p>
                  <div className="flex items-center justify-center w-full my-3">
                    <a className="text-sm bg-blue-100 hover:bg-blue-50 text-gray-600 p-2 w-1/2 rounded mx-2">Buy Now</a>
                    <a className="text-sm bg-blue-100 hover:bg-blue-50 text-gray-600 p-2 w-1/2 rounded mx-2">Read More</a>
                  </div>
              </div>
          </div>


          <div className="bg-gray-300 p-4 rounded-md drop-shadow-md">
                <img   src="/picsfloder/22.png" alt='' className="w-auto h-50 mb-2 "  width={400}
    height={32}
    priority />
             

              <div className="flex flex-col items-center justify-center ">
                 <p className="text-xl font-bold text-gray-800">Continuum</p>
                 <a className="text-sm  hover:bg-blue-50 text-gray-600 p-2 w-1/2 rounded mx-2">{"Buy now > "} </a>

                  <div className="flex items-center justify-center w-full my-3">
                    {/* <a className="text-sm bg-blue-100 hover:bg-blue-50 text-gray-600 p-2 w-1/2 rounded mx-2">Read More</a> */}
                  </div>
              </div>
          </div>

          <div className="bg-gray-300 p-4 rounded-md drop-shadow-md">
                <img   src="/picsfloder/22.png" alt='' className="w-auto h-50 mb-2 "  width={400}
    height={32}
    priority/>
             

              <div className="flex flex-col items-center justify-center ">
                 <p className="text-xl font-bold text-gray-800">Continuum</p>
                  <div className="flex items-center justify-center w-full my-3">
                    <a className="text-sm bg-blue-100 hover:bg-blue-50 text-gray-600 p-2 w-1/2 rounded mx-2">Buy Now</a>
                    <a className="text-sm bg-blue-100 hover:bg-blue-50 text-gray-600 p-2 w-1/2 rounded mx-2">Read More</a>
                  </div>
              </div>
          </div>

          <div className="bg-gray-300 p-4 rounded-md drop-shadow-md">
                <img   src="/picsfloder/22.png" alt='' className="w-auto h-50 mb-2 " width={400}
    height={52}
    priority />
             

              <div className="flex flex-col items-center justify-center ">
                 <p className="text-xl font-bold text-gray-800">Continuum</p>
                  <div className="flex items-center justify-center w-full my-3">
                    <a className="text-sm bg-blue-100 hover:bg-blue-50 text-gray-600 p-2 w-1/2 rounded mx-2">Buy Now</a>
                    <a className="text-sm bg-blue-100 hover:bg-blue-50 text-gray-600 p-2 w-1/2 rounded mx-2">Read More</a>
                  </div>
              </div>
          </div>
          {/* <div className="bg-gray-300 p-4 rounded-md drop-shadow-md">Item 2</div>
          <div className="bg-gray-300 p-4 rounded-md drop-shadow-md">Item 3</div>
          <div className="bg-gray-300 p-4 rounded-md drop-shadow-md">Item 4</div> */}
        </div>
      </div>
    </div>
  );
}
