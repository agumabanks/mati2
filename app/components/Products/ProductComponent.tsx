// components/ProductComponent.tsx

import React from 'react';
import Product from './cProduct';
// import Product from '../types';

interface ProductProps {
  product: Product;
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
     
      <div className='w-full h-full bg-white rounded-lx sm:rounded-l-md '>
          <img src={product.image} alt={product.productName} 
               className="w-full h-3/2 object-cover mb-4" width={400}
               height={40} 
          />
      </div>

      <div className="bg-white p-4  rounded-r-md shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-red-900">{product.productName}</h2>
        <p className="text-gray-600"><strong>Screen Size:</strong> {product.screenSize}</p>
        <p className="text-gray-600"><strong>Processor:</strong> {product.processor}</p>
        <p className="text-gray-600"><strong>Weight:</strong> {product.weight}</p>
        <p className="text-gray-600"><strong>Input and Output:</strong> {product.inputOutput}</p>
        <p className="text-gray-600"><strong>Battery Time:</strong> {product.batteryTime}</p>
        <p className="text-gray-600"><strong>Other Features:</strong> {product.otherFeatures}</p>
    </div>
    </div>
  );
};

export default ProductComponent;
