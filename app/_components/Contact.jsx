import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoTime } from "react-icons/io5";




function Contact() {
  return (
    <div className='flex flex-col justify-center items-center mt-[40px]'>
        <h1 className='text-[36px]'>Get In Touch With Us</h1>
        <p className='text-[16px] text-[#9F9F9F] text-center lg:w-[600px] md:w-[600px] w-[400px] mb-[60px] mt-[40px]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        
        <div className='grid grid-cols-1  lg:grid-cols-2 md:grid-cols-2 gap-10 md:w-[70%] lg:w-[50%] '>
            <div className='flex flex-col justify-center items-start w-[60%]'>
                <div className='flex  justify-center items-start mb-[40px]'>
                    <MdLocationPin size={30} />
                    <div className='ml-[10px]'>
                        <h2 className='text-[24px]'>Our Address</h2>
                        <p className='text-[16px] w-[212px]'>236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                </div>
                
                <div  className='flex  justify-center items-start mb-[40px]'>
                    <MdCall size={30} />
                    <div className='ml-[10px]'>
                        <h2 className='text-[24px]'>Call Us</h2>
                        <p className='text-[16px] w-[212px]'>Mobile: +(84) 546-6789</p>
                        <p className='text-[16px] w-[212px]'>Hotline: +(84) 456-6789</p>
                    </div>
                </div>
                <div  className='flex  justify-center items-start mb-[40px]'>
                    <IoTime size={30} />
                    <div className='ml-[10px]'>
                        <h2 className='text-[24px]'>Working Time</h2>
                        <p className='text-[16px] w-[212px]'>Monday-Friday: 9:00 - 22:00</p>
                        <p className='text-[16px] w-[220px]'>Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
            </div>
            
                <form className='flex flex-col justify-between items-start h-[450px]'>
                    <span>Your Name</span>
                    <input className='outline-none border-2  rounded-md h-[45px] w-[300px]' type='text' placeholder='  ADC' />
                    <span>our Email</span>
                    <input className='outline-none border-2  rounded-md h-[45px] w-[300px]' type='email' placeholder='  yakhay@Exampel.com' />
                    <span>Subject</span>
                    <input className='outline-none border-2  rounded-md h-[45px] w-[300px]' type='text' placeholder='  This is an optional' />
                    <span>Message</span>
                    <textarea className='outline-none border-2  rounded-md h-[60px] w-[300px]' placeholder='  Hi! i’d like to ask about'></textarea>
                    <button className='w-[200px] h-[45px] text-white bg-[#B88E2F] rounded-md mt-[30px]'>Send</button>
                </form>

            
        </div>
    </div>
  )
}

export default Contact