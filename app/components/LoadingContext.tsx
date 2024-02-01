// components/LoadingContext.tsx
'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';

interface LoadingContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoadingContext must be used within a LoadingProvider');
  }
  return context;
};



export const LoadingProvider: React.FC = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate some async operations if needed
//     const asyncOperations = async () => {
//       // Perform any async tasks here
//       await new Promise((resolve) => setTimeout(resolve, 3000));
//       setLoading(false);
//     };

//     asyncOperations();
//   }, []);

//   return (
//     <LoadingContext.Provider value={{ loading, setLoading }}>
//       <SplashScreen />
//     </LoadingContext.Provider>
//   );
const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    //   onLoadComplete(); // Notify the parent component that loading is complete
    }, 3000);

    return () => clearTimeout(timer);
  }, );

  return showSplash ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white text-6xl font-bold">
      MATIC
    </div>
  ) : null;
};


