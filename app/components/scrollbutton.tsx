import React from 'react';

interface ScrollButtonProps {
  targetId: string;
  displayName: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetId, displayName }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <button onClick={handleClick}
    type="button"
    className="inline-flex items-center mx-2 my-5 px-5 py-2 border 
    border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 
    hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
     
    >
      {displayName}
    </button>
  );
};

export default ScrollButton;
