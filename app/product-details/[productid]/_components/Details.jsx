'use client';
import { useState, useEffect } from 'react';
import { CiShare2 } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";

export default  function Details({ productDetails }) {
    // console.log("Product ID:", path);
    console.log("Product Deffffftails:", productDetails);
    function handelDescriptio() {
        console.log('Description');
        const Additional = document.getElementById('Additional');
        const Description = document.getElementById('Description');
        const Reviews = document.getElementById('Reviews');
        const titleDes = document.getElementById('titleDes');
        const titleAdd = document.getElementById('titleAdd');
        const titleRev = document.getElementById('titleRev');

        if (titleAdd) {
            titleAdd.style = 'border-bottom: 0px solid #000000';
        }
        if (titleRev) {
            titleRev.style = 'border-bottom: 0px solid #000000';
        }

        if (titleDes) {
            titleDes.style = 'border-bottom: 2px solid #000000';
        }



        if (Description) {
            Description.style.display = 'block';
        }
        
        if (Additional) {
            Additional.style.display = 'none';
        }
        if (Reviews) {
            Reviews.style.display = 'none';
        }
        
    }
    function handelAdditional() {

        const Additional = document.getElementById('Additional');
        const Description = document.getElementById('Description');
        const Reviews = document.getElementById('Reviews');
        const titleDes = document.getElementById('titleDes');
        const titleAdd = document.getElementById('titleAdd');
        const titleRev = document.getElementById('titleRev');

        if (titleAdd) {
            titleAdd.style = 'border-bottom: 2px solid #000000';
        }
        if (titleRev) {
            titleRev.style = 'border-bottom: 0px solid #000000';
        }

        if (titleDes) {
            titleDes.style = 'border-bottom: 0px solid #000000';
        }

        if (Description) {
            Description.style.display = 'none';
        }
        
        if (Additional) {
            Additional.style.display = 'block';
        }
        if (Reviews) {
            Reviews.style.display = 'none';
        }
        
       
    }
    function handelReviews() {
        const Additional = document.getElementById('Additional');
        const Description = document.getElementById('Description');
        const Reviews = document.getElementById('Reviews');
        const titleDes = document.getElementById('titleDes');
        const titleAdd = document.getElementById('titleAdd');
        const titleRev = document.getElementById('titleRev');

        if (titleAdd) {
            titleAdd.style = 'border-bottom: 0px solid #000000';
        }
        if (titleRev) {
            titleRev.style = 'border-bottom: 2px solid #000000';
        }

        if (titleDes) {
            titleDes.style = 'border-bottom: 0px solid #000000';
        }

        if (Description) {
            Description.style.display = 'none';
        }
        
        if (Additional) {
            Additional.style.display = 'none';
        }
        if (Reviews) {
            Reviews.style.display = 'block';
        }
        
    }
    


    return (
        <div className='flex justify-center items-center flex-col'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:w-[60%]'>
                <div className=''>
                    
                    <img className='w-[400px] rounded-lg' src={productDetails.images[0]} alt={productDetails.title} />
                    
                    <div className='grid gap-4 grid-cols-3 w-[400px]  mt-[10px]' >
                    {productDetails.images.map((image, index) => (
                                <img className='w-[100px] h-[90px] rounded-lg border-2' key={index} src={image} alt={`${productDetails.title} - Image ${index + 1}`} />
                    ))}
                    </div>
                </div>
                <div className='flex items-between justify-around flex-col w-[400px]'>
                    <h2 className='text-[42px]'>{productDetails.title}</h2>
                    <p className='text-[24px] text-[#9F9F9F]'>{productDetails.price} $</p>
                    <p className='text-[16px]'>{productDetails.description} </p>
                    <p className='text-[16px]'>Lorem ipsum dolor sit oloremque tempora architecto consequatur possimus minus repellendus ab iste necessitatibus mollitia quisquam maiores, ducimus, dicta non odio saepe quas odit?</p>
                    
                    <div>
                        <p className='text-[24px] text-[#9F9F9F] mb-[20px]'>colors :</p>
                        <div className='w-[150px] flex justify-between'>
                            <div className='w-[40px] h-[40px] rounded-[50%] bg-[#816DFA]'></div>
                            <div className='w-[40px] h-[40px] rounded-[50%] bg-[#000000]'></div>
                            <div className='w-[40px] h-[40px] rounded-[50%] bg-[#B88E2F]'></div>
                        </div>
                    </div>
                  
                    <div className='flex items-center justify-between mt-[20px]' >
                        <button className='border-2 border-black w-[150px] h-[60px] rounded-lg'>Buy now</button>
                        <button className='border-2 border-black w-[150px] h-[60px] rounded-lg'>Add to cart</button>
                         <CiShare2 size={30} />
                        <VscHeart size={30} />
                    </div>
                    <div className='border-t-2 w-[400px]'>
                        <div className='flex justify-between items-center mt-[20px]'>
                            <p className='text-[16px] text-[#9F9F9F] w-[200px]'>SKU  </p>
                            <p className='text-[16px] text-[#9F9F9F]'>:</p>
                            <p className='text-[16px] text-[#9F9F9F]'>SS001</p>
                        </div>
                        <div className='flex justify-between items-center mt-[20px]'>
                            <p className='text-[16px] text-[#9F9F9F] w-[200px]'>Category  </p>
                            <p className='text-[16px] text-[#9F9F9F]'>:</p>
                            <p className='text-[16px] text-[#9F9F9F]'>Sofas</p>
                        </div>
                        <div className='flex justify-between items-center mt-[20px]'>
                            <p className='text-[16px] text-[#9F9F9F] w-[200px]'>Tags  </p>
                            <p className='text-[16px] text-[#9F9F9F]'>:</p>
                            <p className='text-[16px] text-[#9F9F9F]'>Sofa, Chair, Home, Shop</p>
                        </div>
                    </div>
                </div>
                    
            </div>
            <div className='lg:w-[600px] md:w-[600px] mt-[40px]'>
                <h2 className=' mt-[40px] mb-[40px] text-center text-[40px] text-bold text-[#B88E2F]'>Product Details</h2>
                <div className='flex justify-between'>
                    <h3 onClick={handelDescriptio} id='titleDes' className='m-auto p-[10px] cursor-pointer'>Description</h3>
                    <h3 onClick={handelAdditional} id='titleAdd'  className='m-auto p-[10px] cursor-pointer'>Additional Information</h3>
                    <h3 onClick={handelReviews} id='titleRev'  className='m-auto p-[10px] cursor-pointer' >Reviews</h3>
                </div>
                <div id='Description' >
                    
                    <p className='text-[16px] mt-[20px] text-center text-[#9F9F9F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quas, ipsa dignissimos ratione fugit illum et ut nostrum explicabo consequuntur tenetur possimus minus, distinctio, rem dolorum quos! Reiciendis, nihil quibusdam. </p>
                </div>
                <div id='Additional' className='none'>
                    
                    <div className='flex justify-between items-center mt-[20px]'>
                        <p className='text-[16px] text-[#9F9F9F] w-[200px]'>Weight  </p>
                        <p className='text-[16px] text-[#9F9F9F]'>:</p>
                        <p className='text-[16px] text-[#9F9F9F]'>2.5 kg</p>
                    </div>
                    <div className='flex justify-between items-center mt-[20px]'>
                        <p className='text-[16px] text-[#9F9F9F] w-[200px]'>Dimensions  </p>
                        <p className='text-[16px] text-[#9F9F9F]'>:</p>
                        <p className='text-[16px] text-[#9F9F9F]'>50 x 60 x 70 cm</p>
                    </div>
                    <div className='flex justify-between items-center mt-[20px]'>
                        <p className='text-[16px] text-[#9F9F9F] w-[200px]'>Materials  </p>
                        <p className='text-[16px] text-[#9F9F9F]'>:</p>
                        <p className='text-[16px] text-[#9F9F9F]'>Wood, Metal, Fabric</p>
                    </div>
                    

                </div>
                <div id='Reviews' className='none'>
                        
                        <div>
                            <div className='flex justify-around'>
                                <h4>John Doe</h4>
                                <p>Very good product</p>
                            </div>
                            <div className='flex justify-around'>
                                <h4>John Doe</h4>
                                <p>Very good product</p>
                            </div>
                            <div className='flex justify-around'>
                                <h4>John Doe</h4>
                                <p>Very good product</p>
                            </div>
                        </div>
                    </div>
            </div>

            
        </div>
    );
}
