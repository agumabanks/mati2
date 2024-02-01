

import React, { useEffect, useRef } from "react";
import Image from 'next/image';


export default function HomeSection() {
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
     <video
          className="w-full rounded-md drop-shadow-md"// maxWidth: "100%", width: "800px", margin: "0 auto" }}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/MSFT_Surface_Home_Surface-Laptop-5-platinum_360-video"
          ref={videoEl}
        />
    </div>
  );
}
