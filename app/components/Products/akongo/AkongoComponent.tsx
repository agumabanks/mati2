// components/ProductComponent.tsx

import React from 'react';
import Product from './types';

interface ProductProps {
  product: Product;
}

const AkongoComponent: React.FC<ProductProps> = ({ product }) => {
  return (
   
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img src={product.image} alt="" />
      <p className="text-xl font-semibold mb-2 text-red-800">{product.name}</p>
      <p className="text-gray-600"><strong>Screen Size:</strong> {product.screenSize}</p>
      <p className="text-gray-600"><strong>Processor:</strong> {product.processor}</p>
      <p className="text-gray-600"><strong>Weight:</strong> {product.weight}</p>
      {/* <p className="text-gray-600"><strong>Input and Output:</strong> {product.inputOutput}</p>
      <p className="text-gray-600"><strong>Battery Time:</strong> {product.batteryTime}</p>
      <p className="text-gray-600"><strong>Other Info:</strong> {product.otherInfo}</p> */}
    
    </div>
  );
};

export default AkongoComponent;
