'use client';

import React from 'react'
import Swip from './Swep';

function Inspiration() {
  return (
    <div className='flex justify-center items-center mt-[40px] bg-[#FCF8F3]'>
        <div className= ' grid grid-cols-1 gap-11 lg:grid-cols-3 lg:gap-20 md:grid-cols-2 md:gap-12 mt-[40px]  '>
            <div className='w-[404px]  flex flex-col justify-center overflow-hidden'>
                <h2 className='text-[40px] mt-[40px]'>50+ Beautiful rooms inspiration</h2>
                <p className='text-[#616161] text-[16px] mt-[40px]'> Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <button className='w-[176px] h-[48px] bg-[#B88E2F] mt-[40px] text-white'>Explore More</button>
            </div>
            <div className='w-[404px]'>
                <img className='w-[404px]' src="/data/ince.png" alt="" />
            </div>
            <div className='w-[404px]'>
                <Swip />
            </div>
            

        </div>
    </div>
  )
}

export default Inspiration