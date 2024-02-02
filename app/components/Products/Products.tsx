// App.tsx
import React from 'react';
import ProductCard from '../ProductCard';
import Product from '@/app/interfaces/productsInterce';

// import ProductCard from './ProductCard';
// import Product from './ProductInterface';

// App.tsx
const products: Product[] = [
    {
        id: 1,
        name: 'EnigmaX Edu',
        image: '/picsfloder/products/akongo/7.jpg',
        shortDescription: 'Description goes here',
        details: {
          screenSize: '14.1\'\' / 1920*1080 FHD 1920*1080P',
          processor: 'Intel® Celeron® Processor N5095 (4M Cache, up to 2.90 GHz)',
          weight: '1.2kgs',
          ports: 'Mini-HD (1.4),USB-A 3.0*2, USB-A 2.0*1, 3.5mm Audio Jack, HDMI, Type-C, M. 2 ports, Micro SD',
          batteryLife: '8hours',
        },
      },
      {
        id: 2,
        name: 'EnigmaX Se',
        image: '/picsfloder/products/akongo/7.jpg',
        shortDescription: 'Description goes here',
        details: {
          screenSize: '14.1\'\' / 1920*1080 FHD 1920*1080P',
          processor: 'Intel® Core™ Intel Processor (Alder Lake-N N100 3.40 GHz )',
          weight: '1.2kgs',
          ports: 'Mini-HD (1.4),USB-A 3.0*2, USB-A 2.0*1, 3.5mm Audio Jack, HDMI, Type-C, M. 2 ports, Micro SD',
          batteryLife: '8hours',
        },
      },
      {
        id: 3,
        name: 'EnigmaX Pro',
        image: '/picsfloder/products/akongo/7.jpg',
        shortDescription: 'Description goes here',
        details: {
          screenSize: '14.1\'\' / 1920*1080 FHD 1920*1080P',
          processor: 'Intel® Core™ i3-13110U Processor (20M cache up to 4.1GHz)',
          weight: '1.2kgs',
          ports: 'Mini-HD (1.4),USB-A 3.0*2, USB-A 2.0*1, 3.5mm Audio Jack, HDMI, Type-C, M. 2 ports, Micro SD',
          batteryLife: '8hours',
        },
      },
      {
        id: 4,
        name: 'EnigmaX Pro Se',
        image: '/picsfloder/products/akongo/7.jpg',
        shortDescription: 'Description goes here',
        details: {
          screenSize: '14.1 and 15.6inch, FHD 1920*1080P',
          processor: 'Intel® Core™ i5-1335U Processor (20M Cache, up to 4.40 GHz)',
          weight: '1.7kgs',
          ports: 'Mini-HD (1.4),USB-A 3.0*2, USB-A 2.0*1, 3.5mm Audio Jack, HDMI, Type-C, M. 2 ports, Micro SD',
          batteryLife: '10hours',
        },
      },
      {
        id: 5,
        name: 'EnigmaX Large',
        image: '/picsfloder/products/akongo/7.jpg',
        shortDescription: 'Description goes here',
        details: {
          screenSize: '15.6inch, FHD 1920*1080P',
          processor: 'Intel® Core™ i7-13700HX Processor (30M Cache, up to 5.00 GHz)',
          weight: '1.7kgs',
          ports: 'Mini-HD (1.4),USB-A 3.0*2, USB-A 2.0*1, 3.5mm Audio Jack, HDMI, Type-C, M. 2 ports, Micro SD',
          batteryLife: '10hours',
        },
      },
      {
        id: 6,
        name: 'EnigmaX Large Se',
        image: '/picsfloder/products/akongo/7.jpg',
        shortDescription: 'Description goes here',
        details: {
          screenSize: '15.6inch, FHD 1920*1080P',
          processor: 'Intel® Core™ i9-13900H Processor (24M Cache, up to 5.40 GHz)',
          weight: '1.7kgs',
          ports: 'Mini-HD (1.4),USB-A 3.0*2, USB-A 2.0*1, 3.5mm Audio Jack, HDMI, Type-C, M. 2 ports, Micro SD',
          batteryLife: '10hours',
        },
      },
    ];
  

const MaticProducts: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      );
  };

export default MaticProducts;
