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
            <img className='w-[372px]' src="https://s3-alpha-sig.figma.com/img/acc4/8179/d1b18b523420e79dda1e92951ecde49b?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RwOmAn0NTP1hmZNtOrVQb9PRHAvy27JUkjKUMrekbGkkRsdxGYRn548hyeRjqaOOSa6Cl~JdjQFsENkq5OUPkiTDvW94q6QCrGvR2vD6obLnJDysyqSJCc4yJQ4dly3JRqMBEEC2JUpb3Kn5XCSrvLabEDK5Ge66OOYoUh88Vagq9qmv27m03SMulBxZ3oHUigzRIsdZ6SaGHEfASX1KuDbqeckpNWndc0IG9OkZ-MPFWHSgnQ4fmQv-KfdA8-OQZnYA~mlzoTJorX7dcLIHafZx8tn5fzbNBN0UTbE2ECtWLmooAIHa3xJIZLdLUQHQdSFN7n3bFkdtE0ASCe9J3g__" alt="" />
          </SwiperSlide>
          <SwiperSlide  >
            <img className='w-[372px] h-full' src="https://s3-alpha-sig.figma.com/img/50f3/12dc/a7c05024ab4e27374edb12195b6559e2?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IFKFJiYCLGtD~CKec5D5j~fka7U~laUhLRd~FjxiSmPjlQ3Xv24f38ZGCjfLtcDOInyD4my2mfoO735zfE1cc2yq7NURdDhVA9~8f-AO8~tmFmWVF6oFmOfNhG3bqR0J6T6rbkF9H8JFpW8kKWd2ol~xQpEZnNua~JjOn1PSaqn2swJs87ZfxI7qTs97HmSpUonxg-OwqUAaTl0WaZXhohY86vPg4mlJEcr8JozFRh~W63BvD9Qh1hzg7tStN2XHoFMJsU5PjbZVtrTQCJ5Xm3s3R7zNrO4o69E6IQoEPbxkH8T-qQZw5LkckkYUB9VyarVMV62j9JkyxRZA26-QuQ__" alt="" />
          </SwiperSlide>
          <SwiperSlide  >
            <img className='w-[372px]' src="https://s3-alpha-sig.figma.com/img/acc4/8179/d1b18b523420e79dda1e92951ecde49b?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RwOmAn0NTP1hmZNtOrVQb9PRHAvy27JUkjKUMrekbGkkRsdxGYRn548hyeRjqaOOSa6Cl~JdjQFsENkq5OUPkiTDvW94q6QCrGvR2vD6obLnJDysyqSJCc4yJQ4dly3JRqMBEEC2JUpb3Kn5XCSrvLabEDK5Ge66OOYoUh88Vagq9qmv27m03SMulBxZ3oHUigzRIsdZ6SaGHEfASX1KuDbqeckpNWndc0IG9OkZ-MPFWHSgnQ4fmQv-KfdA8-OQZnYA~mlzoTJorX7dcLIHafZx8tn5fzbNBN0UTbE2ECtWLmooAIHa3xJIZLdLUQHQdSFN7n3bFkdtE0ASCe9J3g__" alt="" />
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
