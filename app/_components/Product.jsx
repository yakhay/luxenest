"use client";
import React from 'react'
import { CiShare2 } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";


// import { useState } from 'react';

function Product({ product }) {
    
        // const [isHovered, setIsHovered] = useState(false);
      
        // const handleMouseEnter = () => {
        //   setIsHovered(true);
        // };
      
        // const handleMouseLeave = () => {
        //   setIsHovered(false);
        // };
    

  return (

        <div className='relative bg-[#F4F5F7] w-[285px] rounded-b-lg' onClick={() => console.log('clicked')}
                   >
            { product.status === 'new' ? <div className='absolute bg-[#B88E2F] text-white text-[14px] rounded-[5px] w-[80px] h-[30px] flex justify-center items-center'>New</div> : null }
            { product.promotion ? <div className='absolute bg-[#E97171] text-white text-[14px] rounded-[50%] w-[50px] h-[50px] flex justify-center items-center left-[215px] top-[20px]'>Sale</div> : null }
            <img className='w-[285px] h-[301px] rounded-lg' src={product.images[0]} alt="" />
            <h3 className='text-[24px] pl-[10px]'>{product.title}</h3>
            <p className='text-[14px] text-[#898989] w-[80%] mt-[20px] pl-[10px]'>{product.description}</p>
            <p className='mt-[20px] pl-[10px]'>{product.price}</p>
            <div className='absolute bg-[#000000] bg-opacity-50 text-white text-[14px] rounded-[5px] w-[285px] h-[100%] flex justify-center items-center top-[0] left-[0] opacity-0 hover:opacity-100 transition-all duration-300'>
                <div className='flex justify-center items-center flex-col'>
                    <button className='bg-white  text-[#B88E2F] rounded-[5px] w-[202px] h-[48px] mb-[30px]'>Add to cart</button>
                    <div className='flex items-center justify-between w-[100%]'>
                        <div className='flex items-center justify-center'>
                            <CiShare2 className='size-[16px]' />
                            <span>share</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <MdCompareArrows className='size-[16px]' />
                            <span className='text-[16px]'>compare</span>

                        </div>
                        <div className='flex items-center justify-center'>
                            <VscHeart className='size-[16px]' />
                            <span>like</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Product