'use client';
import React from 'react'

function Exampelsetup() {
  return (
    <div className='flex justify-center items-center mt-[40px] bg-[#fcf8f358] flex-col'>
        
        <p>Share your setup with</p>
        <h2 className='text-[40px]'>#FuniroFurniture</h2>
         <div className="w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-1 ">
            <div className='w-[300px]'>
                <img className='mb-[20px] rounded-lg' src="/data/products/articl1.png" alt="" />
                <img className='mb-[20px] rounded-lg' src="/data/products/articl2.png" alt="" />
                <img src="/data/products/articl4.png" alt="" />
            </div>
            <div className='w-[300px]'>
                <img className='mb-[20px] rounded-lg' src="/data/products/articl6.jpeg" alt="" />
                <img className='mb-[20px] rounded-lg' src="/data/products/articl8.png" alt="" />
                <img className='mb-[20px] rounded-lg'  src="/data/products/are.png" alt="" />
            </div>
            
            <div className='w-[300px]'>
                <img className='mb-[20px] rounded-lg' src="/data/products/articl4.png" alt="" />
                <img className='mb-[20px] rounded-lg' src="/data/products/articl1.png" alt="" />
                <img className='mb-[20px] rounded-lg'  src="/data/products/articl3.jpeg" alt="" />

            </div>
            <div className='w-[300px]'>
                <img className='mb-[20px] rounded-lg' src="/data/products/articl5.png" alt="" />
                <img className='mb-[20px] rounded-lg' src="/data/ince.png" alt="" />
                <img   className='mb-[20px] rounded-lg' src="/data/products/articl8.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Exampelsetup