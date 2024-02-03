// components/ProductComponent.tsx

import React from 'react';
import Product from './cProduct';
// import Product from '../types';

interface ProductProps {
  product: Product;
}

const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
      <p className="text-gray-600"><strong>Screen Size:</strong> {product.screenSize}</p>
      <p className="text-gray-600"><strong>Processor:</strong> {product.processor}</p>
      <p className="text-gray-600"><strong>Weight:</strong> {product.weight}</p>
      <p className="text-gray-600"><strong>Input and Output:</strong> {product.inputOutput}</p>
      <p className="text-gray-600"><strong>Battery Time:</strong> {product.batteryTime}</p>
      <p className="text-gray-600"><strong>Other Features:</strong> {product.otherFeatures}</p>
    </div>
  );
};

export default ProductComponent;
