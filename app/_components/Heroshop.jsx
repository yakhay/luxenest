'use client';
import React from 'react'
import Link from 'next/link'
import { IoHomeOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";


function Heroshop() {
  return (
    <div>
        <div className='w-[100%] h-[300px] bg-cover bg-center bg-[url(/data/heroshop.jpeg)] flex justify-center items-center relative'>
        <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className='w-[80%] flex justify-center items-center flex-col '>
                
                    <h1 className='text-[100px] text-white z-50'>Shop</h1>
                    <nav  className="flex justify-center">
                        <ol className="flex overflow-hidden rounded-lg   text-white">
                            <li className="flex items-center z-100">
                                
                                <Link href="/" className=" z-50 flex h-10 items-center gap-1.5  px-4 transition hover:text-gray-900">
                                     <IoHomeOutline/> Home 
                                </Link>
                            </li>

                            <li className="relative flex items-center">                    
                                <Link href="/Shop" className="flex h-10 items-center  pe-4 ps-8 text-xs font-medium transition hover:text-gray-900" >
                                <CiShop className='size-5 pr-[3px]' /> Shop
                                </Link>
                            </li>
                        </ol>
                    </nav>

            </div>
        </div>
    </div>
  )
}

export default Heroshop