'use client';
// import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { CgCornerUpRight } from "react-icons/cg";




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Swip() {
  


  


  return (
    <>
      <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        
        navigation={{
          nextEl: '.swiper-button-next',
          
        }}
        modules={[Pagination, Navigation]}
        className="w-[372px]  bg-gray-100 rounded-lg shadow-lg relative"
      >

        
          <SwiperSlide  >
            <img className='w-[372px]' src="/data/products/articl1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide  >
            <img className='w-[372px] h-full' src="/data/products/articl4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide  >
            <img className='w-[372px]' src="/data/ince2.png" alt="" />
          </SwiperSlide>
          
          <div className="absolute flex items-center justify-center cursor-pointer w-14 h-14 bg-[#b88e20] text-white rounded-full top-1/2 right-4 transform -translate-y-1/2 z-50">
          <CgCornerUpRight className='text-2xl' />
          <div className='swiper-button-next w-[100%] opacity-0'>Next</div>
        </div>

        
      </Swiper>
      {/* Custom CSS for Pagination */}
      <style jsx>{`
        .swiper-pagination {
          bottom: 10px; 
          text-align: center;
        }
        .swiper-pagination-bullet {
           w-3 h-3 bg-[#b88e20] rounded-full mx-1 opacity-50 transition duration-300; /* Tailwind styles */
        }
        .swiper-pagination-bullet-active {
          @apply bg-[#b88e2] opacity-100; /* Active styles */
        }
      `}</style>
    </>
  );
}
