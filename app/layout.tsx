
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer'

// import { motion } from 'framer-motion';

import Nav from './components/nav'
import SplashScreen from './components/SplashScreen'
import { LoadingProvider } from './components/LoadingContext'
// import React, { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MATIC',
  description: 'the African era',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    
    <html lang="en">
      {/* <LoadingProvider /> */}

      <body className={inter.className}>
        
        <main className=''>
        {/* <motion.div
            initial="exit"
            animate="enter"
            exit="exit"
            className="flex min-h-screen w-full flex-col bg-light-300 dark:bg-dark-100"
          > */}
          
          < Nav />
          {children}
          <Footer />

          {/* </motion.div> */}
        </main>
        
      </body>
    </html>
  )
}
