import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Divider from './example';

const Footer = () => {

  
  return (
    
    <footer>
      <div className="flex flex-col px-5  text-center mx-auto max-w-7xl ">
        <div className="flex flex-row items-center justify-start px-5 mt-5 lg:mt-10" >
          <h3 className='text-base'>Stay Connected</h3>
          <ul className='grid grid-cols-4 gap-5 px-10 h-10 w-100 items-center justice-between '>
            <a target="_blank" href="https://www.facebook.com/maticteck?mibextid=LQQJ4d" rel="noopener noreferrer">
               < FacebookIcon /> {' '} {/* <div className={`${dark ? styles.iconTwitterWhite : styles.iconTwitter} mr-3`} /> */}
            </a>
            <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
            < TwitterIcon/>{' '} {/* <div className={`${dark ? styles.iconTwitterWhite : styles.iconTwitter} mr-3`} /> */}
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/matic-entreprises/" rel="noopener noreferrer">
            < LinkedInIcon/> {/* <div className={`${dark ? styles.iconTwitterWhite : styles.iconTwitter} mr-3`} /> */}
            </a>
            <a target="_blank" href="https://instagram.com/matic_entreprises?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" rel="noopener noreferrer">
            < InstagramIcon/> {' '} {/* <div className={`${dark ? styles.iconTwitterWhite : styles.iconTwitter} mr-3`} /> */}
            </a>
            
            
          </ul>
        </div>
        <div className='mt-7'>
               <Divider />
        </div>
        

        <div className="flex p-5 items-center justify-between">
         
         <div>
          <div className='flex py-5 items-center '>
            <a className='text-xl font-medium	' href="/">Matic</a>
            <div className='grid grid-cols-4  text-center ml-5'>
              <a href="/whyMatic" className='group rounded-lg opacity-50 text-sm border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>Company </a>
              <a href="/products" className='group rounded-lg opacity-50 text-sm border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>Matic Products </a>
              <a href="/policy" className='group rounded-lg opacity-50 text-sm border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>Privacy </a>
              <a href="mailto:info@maticent.com" className='group rounded-lg opacity-50 text-sm border border-transparent -ml-2 1 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>Press Inquiries</a>
            </div>
          </div>
        </div>

        <a href='https://sanaa.co/' className='m-0 max-w-[30ch] text-sm  px-2'>
           <span className='opacity-50'>
               With support from 
          </span> 
           <span className='text-lg font-bold opacity-50 hover:opacity-100 hover:text-emerald-900 '> Sanaa</span> 
        </a>
        </div>
      </div>
      
    </footer>
    
  );
};

export default Footer;
