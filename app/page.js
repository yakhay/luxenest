'use client';
import React from 'react'

import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import Products from "./_components/Products";
import Inspiration from "./_components/Inspiration";
import Exampelsetup from "./_components/Exampelsetup";



function Home() {
  return (
    <>
    <Hero />
        <Categories />
        <Products />
        <Inspiration />
        <Exampelsetup />
    </>
  )
 
  
}

export default Home
