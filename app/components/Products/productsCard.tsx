// ProductCard.tsx
import React from 'react';
import Product from '../../interfaces/productsInterce';
// import Product from './ProductInterface';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4">
      <h2 className="text-xl font-bold mb-4">{product.name}</h2>
      <p>Screen Size: {product.details.screenSize}</p>
      <p>Processor: {product.details.processor}</p>
      <p>Weight: {product.details.weight}</p>
      {/* <p>Input and Output: {product.inputOutput}</p>
      <p>Battery Time: {product.batteryTime}</p>
      <p>Additional Info: {product.additionalInfo}</p> */}
    </div>
  );
};

export default ProductCard;




