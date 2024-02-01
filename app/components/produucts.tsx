'use client'

import React from 'react';
import Image from 'next/image'
import ProductCard from './ProductCard';
import ImageSlider from './Slider';
import VideoSection from './ProductVideoSection';
import MaticProducts from './Products/Products';



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

const sliderImages = [
  '/picsfloder/akangotab.png',
  '/picsfloder/akangotab.png',
  '/picsfloder/akangotab.png',
  // Add more slider images as needed
];

const productsData = [
  {
    id: 1,
    name: 'Akongo Tab',
    image: "/picsfloder/22.png",
    shortDescription: 'Fast, slim, and super light with a 15-inch touchscreen for split-screen multitasking.',
    details: {
      screenSize: '15 inch touchscreen',
      processor: '12th generation Intel® i7',
      weight: 'From 1,560 g (3.44 lbs)',
      ports: 'USB-C/Thunderbolt™ 4, USB-A',
      batteryLife: 'Battery that lasts up to 17 hours',
    },
  },
  // Add more products with similar structures
  {
    id: 2,
    name: 'Akongo Pro X',
    image: "/picsfloder/22.png",
    shortDescription: 'Versatile 2-in-1 laptop with 13-inch touchscreen and Microsoft SQ® 2 processor.',
    details: {
      screenSize: '13 inch touchscreen',
      processor: 'Microsoft SQ® 2',
      weight: 'From 1,774 g (3.91 lbs)',
      ports: 'USB-C, Surface Connect, Surface Keyboard connector',
      batteryLife: 'Battery that lasts up to 15 hours',
    },
  },{
    id: 3,
    name: 'Akongo 13 Pro X',
    image: "/picsfloder/22.png",
    shortDescription: 'Versatile 2-in-1 laptop with 13-inch touchscreen and Microsoft SQ® 2 processor.',
    details: {
      screenSize: '13 inch touchscreen',
      processor: 'Microsoft SQ® 2',
      weight: 'From 1,774 g (3.91 lbs)',
      ports: 'USB-C, Surface Connect, Surface Keyboard connector',
      batteryLife: 'Battery that lasts up to 15 hours',
    },
  },{
    id: 4,
    name: 'Surface Pro X',
    image: "/picsfloder/22.png",
    shortDescription: 'Versatile 2-in-1 laptop with 13-inch touchscreen and Microsoft SQ® 2 processor.',
    details: {
      screenSize: '13 inch touchscreen',
      processor: 'Microsoft SQ® 2',
      weight: 'From 1,774 g (3.91 lbs)',
      ports: 'USB-C, Surface Connect, Surface Keyboard connector',
      batteryLife: 'Battery that lasts up to 15 hours',
    },
  },{
    id: 5,
    name: 'Surface Pro X',
    image: "/picsfloder/22.png",
    shortDescription: 'Versatile 2-in-1 laptop with 13-inch touchscreen and Microsoft SQ® 2 processor.',
    details: {
      screenSize: '13 inch touchscreen',
      processor: 'Microsoft SQ® 2',
      weight: 'From 1,774 g (3.91 lbs)',
      ports: 'USB-C, Surface Connect, Surface Keyboard connector',
      batteryLife: 'Battery that lasts up to 15 hours',
    },
  },
  {
    id: 5,
    name: 'Surface Pro X',
    image: "/picsfloder/22.png",
    shortDescription: 'Versatile 2-in-1 laptop with 13-inch touchscreen and Microsoft SQ® 2 processor.',
    details: {
      screenSize: '13 inch touchscreen',
      processor: 'Microsoft SQ® 2',
      weight: 'From 1,774 g (3.91 lbs)',
      ports: 'USB-C, Surface Connect, Surface Keyboard connector',
      batteryLife: 'Battery that lasts up to 15 hours',
    },
  },
  {
    id: 5,
    name: 'Surface Pro X',
    image: "/picsfloder/22.png",
    shortDescription: 'Versatile 2-in-1 laptop with 13-inch touchscreen and Microsoft SQ® 2 processor.',
    details: {
      screenSize: '13 inch touchscreen',
      processor: 'Microsoft SQ® 2',
      weight: 'From 1,774 g (3.91 lbs)',
      ports: 'USB-C, Surface Connect, Surface Keyboard connector',
      batteryLife: 'Battery that lasts up to 15 hours',
    },
  },
  {
    id: 5,
    name: 'Surface Pro X',
    image: "/picsfloder/22.png",
    shortDescription: 'Versatile 2-in-1 laptop with 13-inch touchscreen and Microsoft SQ® 2 processor.',
    details: {
      screenSize: '13 inch touchscreen',
      processor: 'Microsoft SQ® 2',
      weight: 'From 1,774 g (3.91 lbs)',
      ports: 'USB-C, Surface Connect, Surface Keyboard connector',
      batteryLife: 'Battery that lasts up to 15 hours',
    },
  },
];


const Products = () => {
  return (
    <div>
      <h2>Welcome to Matic Entreprises</h2>
      <p>Empowering Africa through Innovative Technology</p>

      <section>
        <h3>About Us</h3>
        <p>
          Matic Entreprises, founded in 2013, is a pioneering technology firm dedicated to designing and developing cutting-edge computer products. Our mission is to provide high-performance desktop and laptop solutions that meet the diverse needs of our customers and development partners.
        </p>
      </section>

      <section>
        <h3>Our Products</h3>

     <div>
      <h2 className="text-3xl font-semibold mb-4">Current Matic Products</h2>
      <div className="grid">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">

            <img  className="w-full h-40 object-cover mb-4"
                            src={product.image}
                            alt="  "
                            width={400}
                            height={400}
                             
                          />

            <h3>{product.name}</h3>
            <p>{product.shortDescription}</p>
            <button
              onClick={() => alert(product.details)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Read More
            </button>

            <p className="text-gray-600 mb-2">{product.shortDescription}</p>
            <a href={'/products/${product.id}'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Read More
              </a>
            
          </div>
        ))}
      </div>
    </div>
      </section>
     

      <p>Thank You for Choosing Matic Entreprises</p>
    </div>
  );
};


const FooterSection: React.FC = () => {
  const iconsData = [
    { icon: '/picsfloder/protect.jpg', text: 'Protect your Surface' },
    { icon: '/picsfloder/protect.jpg', text: 'Surface for your business' },
    { icon: '/picsfloder/protect.jpg', text: 'Accessories' },
    { icon: '/picsfloder/protect.jpg', text: 'Surface support' },
    { icon: '/picsfloder/protect.jpg', text: 'Register your Surface' },
    { icon: '/picsfloder/protect.jpg', text: 'Power cord recall' }, 
    //public\picsfloder\protect.jpg
  ];
  return (
    <div className="bg-gray-200 py-10 my-20 rounded-md">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {iconsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
                <img   src={item.icon} 
                          alt={`Icon ${index + 1}`} 
                          className="w-16 h-16 mb-2"  width={400}
                          height={32}
                            />
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto my-10 ">
      <imgSlider images={sliderImages} />

      <div className='my-30'> 
        <VideoSection />
      </div>

      <div>
      <MaticProducts />
      </div>
      
      <h2 className="text-3xl font-semibold mb-8">Explore Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    
      <FooterSection />

    </div>
  );
};

export default ProductsPage;
