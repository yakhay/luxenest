import React from 'react'

function Categorie({ item }) {
  return (
    <div className='w-[381px]  h-[550px] flex justify-between items-center flex-col relative'>
        
        <img className='h-[480px] w-[381px] bg-cover bg-center bg-no-repeat rounded-lg' src={item.image} alt="" />
        <h3 className='text-[24px] '>{item.title}</h3>
    </div>
  )
}

export default Categorie