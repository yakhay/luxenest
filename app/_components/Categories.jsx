"use client";

import React, { useEffect, useState } from 'react';
import Categorie from './Categorie';

function Categories() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/categoris.json'); // Ensure this path is correct
      const data = await response.json();
      console.log("Fetched data:", data);
      setItems(data); 
    };

    fetchData();
  }, []);

  return (
    <div className='w-[100%] flex justify-center items-center mt-[40px]'>
        <div className='w-[90%] flex justify-center items-center flex-col'>
            <div>
                <h2 className='text-[32px] text-center'>Browse The Range</h2>
                <p className='text-[20px] text-[#666666] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-12 mt-[40px]">
                {items.map((item) => (
                <Categorie key={item.id} item={item} />
                ))}
            </div>
      </div>
    </div>
  );
}

export default Categories;
