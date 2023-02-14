import React from 'react'

const Footer = () => {
  return (
    <>
<div className='h-[25rem] w-[full] bg-slate-800 '>
<div className='text-white flex pt-[4rem] gap-[4.5rem]  justify-center sm:gap-[1rem] sm:justify-left md:pl-[4rem] md:gap-[2rem]'>
<div className='flex flex-col  sm:gap-8'>
        <span className='font-bold '>Get to know us</span>
        <span className='pt-[2rem] pb-[1rem]'>About Us</span>
        
        </div>
        <div className='flex flex-col '>
        <span className='font-bold'>Connect with us</span>
        <span className='pt-[2rem] pb-[1rem]' >  Facebook </span>
            <span className=' pb-[1rem]'>Instagram</span>
            <span className=' pb-[1rem]'>Twitter</span>
        </div>  
        <div className='flex flex-col'>
        <span className='font-bold'>Make money with us</span>
            <span className='pt-[2rem] pb-[1rem]'>Sell on Agrilink</span>
        </div>
        <div className='flex flex-col'>
        <span className='font-bold'>Contact us</span>
        <span className='pt-[2rem] pb-[1rem]'>agrilink@gmail.com</span>
        <span className=' pb-[1rem]'>+977 9867356462</span>
        <span className=' pb-[1rem]'>Baneshwor,Kathmandu</span>
        </div>
   
</div>
<div>Designed by </div>
</div>
    </>
  )
}

export default Footer
