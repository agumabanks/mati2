// components/SplashScreen.tsx

import React from 'react';
import { useLoadingContext } from './LoadingContext';

const SplashScreen: React.FC = () => {
  const { loading } = useLoadingContext();

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white text-6xl font-bold">
      MATIC
    </div>
  ) : null;
};

export default SplashScreen;
