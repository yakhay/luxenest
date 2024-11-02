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
                <img className='w-[404px]' src="https://s3-alpha-sig.figma.com/img/f89a/66d9/4961c3801f4c07439f27b13468e5e545?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VXFiA7W7IeKXS7AvtyCdeycPs7a5lOQUvEhHPGMi3w8kr8F~a99COCsIfMYGMXkcpL5J6yOLCd0SAD-ZxnPedrfi78NEpcksTE-uIsgIlISq5Ag9ayra-pNDshr5hyJ5VzriY9ZloCtIGupu6oIDw2IWjKXyLKwRFJCF6iBHQo17PAMFKk3zfJebtUhfR13RB3U2cp5U0D8asqqey60umdZp1THIOwxrRTYLzRUrBxkzTOOwQDPQZwYitHFIJ6g0NQqsdTyIGNT-vTHgK06ohEnlnGeVE~4YfmmZzEVfLWmE3-CicJRXJdfJbWaESF4gu6U~n3I1wh3kmTlAl1m~sw__" alt="" />
            </div>
            <div className='w-[404px]'>
                <Swip />
            </div>
            

        </div>
    </div>
  )
}

export default Inspiration