// pages/products.tsx

import React from 'react';
import ProductComponent from './AkongoComponent';
import Product from './types';
import products from './data';

const AkongProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductComponent key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AkongProductsPage;
