import React from 'react'
import { GrAchievement } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";


function FooterContact() {
  return (
    <div className='flex justify-center items-center  bg-[#FAF3EA] mb-[40px] mt-[60px]' >
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-4 mb-[40px] mt-[60px]' >
            <div className=' flex justify-start items-cente'>
                <GrAchievement size={50} />
                <div className='ml-[15px]'>
                    <h3 className='text-[24px]'>High Quality</h3>
                    <p className='text-[16px] text-[#898989]'>crafted from top materials</p>
                </div>
            </div>
            <div className=' flex justify-start items-center'>
                <FaShippingFast size={50} />
                <div className='ml-[15px]'>
                    <h3 className='text-[24px]' >Fast Shipping</h3>
                    <p className='text-[16px] text-[#898989]'>worldwide delivery</p>
                </div>
            </div>
            <div className=' flex justify-start items-center'>
                <FaRegCreditCard size={50} />
                <div className='ml-[15px]'>
                    <h3 className='text-[24px]'>Secure Payment</h3>
                    <p className='text-[16px] text-[#898989]'>100% secure payment</p>
                </div>
            </div>
            <div className=' flex justify-start items-center'>
                <FaHeadset size={50} />
                <div className='ml-[15px]'>
                    <h3 className='text-[24px]'>24/7 Support</h3>
                    <p className='text-[16px] text-[#898989]'>dedicated support</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default FooterContact