import React from 'react'

function Hero() {
  return (
    
   
        <div className='relative w-full h-[800px] overflow-hidden flex md:justify-end items-center justify-center  bg-[url(/hero.jpeg)] bg-cover bg-center bg-no-repeat  '>
        
            
        <div className="absolute bg-[#110b0327] w-[100%] h-[100%] "></div>


  

            <div className='md:w-[643px] h-[443px] bg-[#FFF3E3] z-[100] w-[403] md:mr-[70px] rounded-lg flex flex-col justify-around items-start pl-[40px]'>
                <h3 className='text-[16px] '>New Arrival</h3>
                <h1 className='text-[52px] text-[#B88E2F]'>Discover Our New Collection</h1>
                <p className='text-[18px] w-[90%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className='text-[14px] bg-[#B88E2F] rounded-[5px] w-[222px] h-[74px] text-white'>Shop Now</button>
            </div>
        </div>


  )
}

export default Hero