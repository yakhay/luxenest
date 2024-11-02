"use client";

import React from 'react'
import { useEffect, useState } from 'react';
import Product from './Product';
import Link from 'next/link';


function Products() {
    const [products, setproduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data/products.json');
            const data = await response.json();
            console.log("Fetched data:", data);
            setproduct(data);
        };
        fetchData();
    }, []);
  return (
    <div className='flex justify-center items-center mt-[60px] w-[100%]'>
        <div className='w-[80%] flex justify-center items-center flex-col   mt-[60px]'>
            <h2 className='text-[40px] text-center '>Our Products</h2>
            <div className='grid grid-cols-1 gap-11 lg:grid-cols-4 lg:gap-10 md:grid-cols-2 md:gap-12 mt-[40px] '>
            
            {products.map((product) => (
                product.id < 9 ? <Link key={product.id} href={`/product-details/${product.id}`} ><Product key={product.id} product={product} /> </Link>: null
            ))}
            </div>
            <button className='text-[#B88E2F] border-[#B88E2F] w-[200px] h-[50px] mt-[40px]  border-2 rounded-[5px]'>Show More</button>
            
        </div>
    </div>
  )
}

export default Products