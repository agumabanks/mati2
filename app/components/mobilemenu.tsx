'use client'

import Image from 'next/image'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';


export default function MobileMenu (){

  // const Taggle = (){}
  const [IsMenueOpen, setIsOpen] = useState(false);
  const TaggleMenu = () =>{
    setIsOpen(!IsMenueOpen);
  }

  const [IsMobMenueOpen, setIsMMOpen] = useState(false);
  const TaggleMobMenu = () =>{
    setIsMMOpen(!IsMobMenueOpen);
  }

    return (
      <div className="fixed left-0 top-0   
      w-full flex place-content-between  p-4 items-center  
      border-b border-gray-300 bg-gradient-to-b 
      from-zinc-200 pb-3 pt-8 backdrop-blur-2xl 
      dark:border-neutral-800 dark:bg-zinc-800/30 
      dark:from-inherit lg:hidden" >
         <div className="flex items-center jusitify-center ">
              
                        <div className="relative mr-3 rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <button   onClick={TaggleMobMenu} type="button" className="relative flex rounded  text-sm"  aria-expanded="false" aria-haspopup="true">
                                    
                                    <MenuIcon/>
                                    </button>



                                    {/* <a href="/">
                                        <img
                                        className="h-10 w-auto" width={12} height={12}
                                        src="/matic.png" alt="Matic" />{' '} 
                                    </a> */}
                                    
                                
                                    {IsMobMenueOpen && (
                                            <div className="absolute left-0 z-10 mt-5 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"> 
                                            
                                                <a href="/products" className="block px-4 py-2  hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium" aria-current="page">Products</a>
                                                <a href="/solutions" className="block px-4 py-2  hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium">Solutions</a>
                                                <a href="/whyMatic" className="block px-4 py-2  hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium">Why Matic</a>
                                                <a href="/resources" className="block px-4 py-2  hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium">Resource</a>
                                                <a href="/support" className="block px-4 py-2  hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium"> Support</a>
                                                <a href="/signin" className=" block px-4 py-2 hover:border-b hover:border-red-700 hover:text-red-700 rounded-sm px-3 py-2 text-sm font-medium" >Sign In </a>
                                                
                                            </div>)}       
                        </div>
                    </div>  
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    
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
   
    )
}
