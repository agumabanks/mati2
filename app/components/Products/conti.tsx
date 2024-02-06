// pages/index.tsx

import React from 'react';
import products from './data';
import ProductComponent from './ProductComponent';
// import ProductComponent from '../components/ProductComponent';
// import Product from '../types';
// import products from '../data';

const Continuum: React.FC = () => {
  return (
    <div className="container mx-auto mt-8 grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-8">
      {products.map((product) => (
        <ProductComponent key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Continuum;
