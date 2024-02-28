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
      <nav className="sticky top-0 z-50 bg-gray-100 dark:text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/">
              <img className="h-10 w-auto" src="/picsfloder/matic.png" alt="" />
            </a>
          </div>
          
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4 items-center"> 
              <a href="/products" className="hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium" aria-current="page">Products</a>
              <a href="/solutions" className="hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium">Solutions</a>
              <a href="/whyMatic" className="hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium">Company</a>
              <a href="/resources" className="hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium">Resource</a>
            </div>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href="/signin" className="hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium">Sign In</a>
            <a href="/support" className="hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium">Support</a>
            <div className="hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium">Shop</div>
            <div className="relative ml-3">
              <button onMouseEnter={TaggleMenu} onClick={TaggleMenu} type="button" className="relative flex rounded text-sm" aria-expanded="false" aria-haspopup="true">
                <ShoppingBasketIcon/>
              </button>
              {IsMenueOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">Amazon</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Alibaba</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Soko</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <MobileMenu/>
    </nav> 
    )
}
