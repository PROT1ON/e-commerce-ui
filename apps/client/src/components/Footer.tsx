import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-8 md:justify-between md:gap-0 md:flex-row  md:items-start p-8 rounded-lg  bg-gray-600 mt-16'>
        <div className='flex flex-col gap-4 items-center md:items-start'>
             <Link href='/'>
         <Image src='/logo.png' 
         alt='Logo'
          width={36 } 
          height={36}
           className='w-6 h-6 md:w-9 md:h-9' />
           <p className='hidden md:block text-md font-medium tracking-wider'>
            TRENDS
           </p>
        </Link>
        <p className='text-sm text-gray-400'>
            @2026 Trends
        </p>
        <p className='text-sm text-gray-400'>
                All rights reserved
        </p>
        </div>
        <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
            <p className='text-sm text-amber-50'>
                Links
            </p>
            <Link href=''>HomePage</Link>
            <Link href=''>Contact</Link>
            <Link href=''>Terms of Service</Link>
            <Link href=''>Privacy Policy</Link>
        </div>


        <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
            <p className='text-sm text-amber-50'>
                Links
            </p>
            <Link href=''>All Products</Link>
            <Link href=''>New Arrivals</Link>
            <Link href=''>Best Sellers</Link>
            <Link href=''>Sale</Link>
        </div>
        
        <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
            <p className='text-sm text-amber-50'>
                Links
            </p>
            <Link href=''>About</Link>
            <Link href=''>Contact</Link>
            <Link href=''>Blog</Link>
            <Link href=''>Affiliate Program</Link>
        </div>

    </div>
  )
}

export default Footer