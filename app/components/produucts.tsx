'use client'

import React from 'react';
import Image from 'next/image'
import ProductCard from './ProductCard';
import ImageSlider from './Slider';
import VideoSection from './ProductVideoSection';
import MaticProducts from './Products/Products';
import ContinuumProductComponent from './Products/continuum';
import Continuum from './Products/conti';
import AkongProductsPage from './Products/akongo/AkongoPageproducts';
import EnigProductsPage from './Products/engima/page';



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
    { icon: '/picsfloder/5269933.png', text: 'Protect your Akongo' },
    { icon: '/picsfloder/5269933.png', text: 'Continuum for your business' },
    { icon: '/picsfloder/4649727.png', text: 'Accessories' },
    { icon: '/picsfloder/5269933.png', text: 'Continuum support' },
    { icon: '/picsfloder/5269933.png', text: 'Register your Continuum' },
    { icon: '/picsfloder/5269933.png', text: 'Power cord recall' }, 
    //public\picsfloder\5269933.png
  ];
  return (
    <div className="flex items-center bg-gray-200 py-10 my-20 rounded-md ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {iconsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center hover:rounded-md hover:p-7 hover:bg-red-800 hover:text-gray-50">
                <img   src={item.icon} 
                          alt={`Icon ${index + 1}`} 
                          className="w-16 h-16 mb-2"  width={300}
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
    <div className="container mx-auto ">
      

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-10 '> 
        <VideoSection />
        <div className='p-5 my-3'>
        {/* public/picsfloder/co1.png */}
          <div className='grid gap-8 grid-cols-2 grid-rows-1 md:grid-cols-2 md:grid-rows-2 '>
               <div className='flex flex-col justify-center size-full  item-center bg-gray-100 m-2 rounded-md px-5 py-7'> 
                  <img className='' src="/picsfloder/co1.png" alt="" />
                  {/* <div>Continuun</div> */}
               </div>
               <div className='flex flex-col justify-center size-full  item-center bg-white m-2 rounded-md px-5 py-7'> 
                  <img className='h-[300] w-full' src="/picsfloder/products/2.png" alt="" />
                  {/* <div>Enigma X</div> */}
               </div>
               <div className='flex flex-col justify-center size-full  item-center bg-white m-2 rounded-md px-5 py-7'> 
                  <img className='h-[300] w-full' src="/picsfloder/products/akongo/7.jpg" alt="" />
                  {/* <div>Akongo</div> */}
               </div>
               <div className='flex flex-col justify-center size-full  item-center bg-white m-2 rounded-md px-5 py-7'> 
                  <img className='h-[300] w-full' src="/picsfloder/products/akongo/1.jpg" alt="" />
                  {/* <div>Akongo Pro</div> */}
               </div>

          </div>


        </div>
        {/* <VideoSection /> */}
      </div>

      <div className='mt-20'>
      {/* <MaticProducts /> */}
      <AkongProductsPage />
      </div>
      
      <ImageSlider images={sliderImages} />


      <h2 className="text-3xl font-semibold mb-8">Explore Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div>
      <EnigProductsPage />
      </div>

      <div>
      <Continuum />
      </div>
    
      <FooterSection />

    </div>
  );
};

export default ProductsPage;
