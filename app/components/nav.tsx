/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useState } from 'react';

import MobileMenu from './mobilemenu';
import logoMatic from '/app/assets/images/matic.png';

// import img from './my-image.jpg' app\assets\images\matic.png

// export default () => <div>
//   <img src={img} />
// </div>

export default function Nav (){

  // const Taggle = (){}
  const [IsMenueOpen, setIsOpen] = useState(false);
  const TaggleMenu = () =>{
    setIsOpen(!IsMenueOpen);
  }
    return (
        <nav className=" mt-0 sticky top-0 z-50 h-14 md:h-16 lg:h-22 bg-gray-100 drop-shadow-md dark:text-black ">
            {/* <MobileMenu/> app\assets\images\matic.png */}
          <div className=" sm:mx-auto sm:max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                 <a href="/">
                  <img className="h-10 w-auto"   src="/picsfloder/matic.png" alt="" />
                 {/* <img
                  className="h-10 w-auto" 
                  width={35} 
                  height={35}
                  src={logoMatic} alt="Matic" />{' '}  */}
                 </a>
                  
                  
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4  items-center"> 
                  {/* bg-gray-900 */}
                    <a href="/products" className=" hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium" aria-current="page">Products</a>
                    <a href="/solutions" className=" hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium">Solutions</a>
                    <a href="/whyMatic" className=" hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium">Company</a>
                    <a href="/resources" className=" hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium">Resource</a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                <a href="/signin"><div className=" hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium" >Sign In</div>
                </a>
                <a href="/support"><div className=" hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium" >Support</div>
                </a>
                <div className=" hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium" >Shop</div>

                

                
                <div className="relative ml-3">
                  <div>
                    <button onMouseEnter={TaggleMenu}  onClick={TaggleMenu} type="button" className="relative flex rounded  text-sm"  aria-expanded="false" aria-haspopup="true">
                      {/* <span className="absolute -inset-1.5"></span> 
                      <span className="sr-only">Open user menu</span> */}
                      <ShoppingBasketIcon/>
                    </button>
                  </div>

                  

                    {IsMenueOpen && (
                      <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
                  
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-0">Amazon</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-1">Alibaba</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-2">Soko</a>
                    </div>
  
                    )}
                
                  

             





                </div>
              </div>
            </div>
          </div>

          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       

       <MobileMenu/>
       <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:hidden">
         <a
           className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
           href=""
           target="_blank"
           rel="noopener noreferrer"
         >
           
           <img
             src="/matic.png"
             alt="Vercel Logo"
             className="dark:invert"
             width={30}
             height={30}
              
           /> {' '} Matic
         </a>
       </div>
     </div>
    </nav>
    )
}
