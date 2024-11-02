import React from 'react'
import Link from 'next/link';
function Footer() {
  return (
    <div className='flex justify-center items-center flex-col '>
        <div className='grid grid-cols-1 gap-11 lg:grid-cols-4 lg:gap-20 md:grid-cols-2 md:gap-12 mt-[40px] w-[90%] shadow-sm border-b-2 border-[#9F9F9F]'>
            <div>
                <h2 className='text-[24px] mb-[60px]'>Funiro.</h2>
                <p className='text-[#9F9F9F] text-[16px]'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div className=''>
                <p className='text-[#9F9F9F] text-[16px] mb-[30px]'>links</p>
                <ul>
                <li className='text-[16px] mb-[20px]' ><Link href="/"> Home </Link></li>
                <li className='text-[16px] mb-[20px]'> <Link href="/Shop">Shop</Link></li>
                <li className='text-[16px] mb-[20px]'><Link href="/About">About</Link></li>
                <li className='text-[16px] mb-[20px]'><Link href="/Contact">Contact</Link></li>
                </ul>
            </div>
            <div>
                <p className='text-[#9F9F9F] text-[16px] mb-[30px]'>help</p>
                <ul>
                <li className='text-[16px] mb-[20px]'>shipping information</li>
                <li className='text-[16px] mb-[20px]'>returns & exchanges</li>
                <li className='text-[16px] mb-[20px]'>privacy policy</li>
                </ul>

            </div>
            <div>
                <p className='text-[#9F9F9F] text-[16px] mb-[30px]'>Newsletter</p>
                <form action="">
                <input className='border-b-2 border-black p-[10px] mr-[10px]' type="text" placeholder='your email'/>
                <button className=' border-b-2 border-black p-[10px]'>subscribe</button>
                </form>
            </div>
        </div>
        <div>
            <h3 className='mt-7'>2023 furino. All rights reverved</h3>
        </div>
    </div>
  )
}

export default Footer