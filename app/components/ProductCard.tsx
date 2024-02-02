// components/ProductCard.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    shortDescription: string;
    details: {
      screenSize: string;
      processor: string;
      weight: string;
      ports: string;
      batteryLife: string;
    };
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-3/2 object-cover mb-4" width={400}
height={40}
 />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.shortDescription}</p>

      <div className="flex items-center mb-2">
        <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white mr-2 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <p className="text-gray-600">{product.details.screenSize}</p>
      </div>

      <div className="flex items-center mb-2">
        <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white mr-2 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19.5l-7-7 7-7m8 14l7-7-7-7"></path>
          </svg>
        </div>
        <p className="text-gray-600">{product.details.processor}</p>
      </div>

      <div className="flex items-center mb-2">
        <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white mr-2 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h3v18H3M21 3h-3v18h3M14 3h-3v18h3m-7 0v-6m0-4h2"
            ></path>
          </svg>
        </div>
        <p className="text-gray-600">{product.details.weight}</p>
      </div>

      <div className="flex items-center mb-2">
        <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white mr-2 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h4v-1.5a3.5 3.5 0 0 0-7 0V21zm7-5a8.5 8.5 0 0 0-17 0"></path>
          </svg>
        </div>
        <p className="text-gray-600">{product.details.ports}</p>
      </div>

      <div className="flex items-center mb-4">
        <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white mr-2 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
          </svg>
        </div>
        <p className="text-gray-600">{product.details.batteryLife}</p>
      </div>

      
        <a href={`/products/${product.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 inline-block">
          Read More
        </a>
       
    </div>
  );
};

export default ProductCard;