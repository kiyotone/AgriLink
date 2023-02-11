import React from 'react'

const Donate = () => {
  return (
    <>
     <div className='h-[45rem] relative '>

<div className=' z-0 absolute h-[100%] w-[100%] '>
  <img  className='  h-[100%]  w-[100%] ' src="veg.jpg" ></img></div>
  <div className='z-20 absolute text-white mt-[10rem] pl-[8rem] text-[36px] md:pl-[3rem] md:text-[28px] sm:pl-[1.5rem] sm:text-[20px]'  >Support Us</div>
<div  className="z-10 absolute text-white mt-[16rem] pl-[8rem] text-[24px] font-bold md:text-[20px]  md:pl-[3rem]  sm:pl-[1.5rem] sm:text-[16px] sm:mt-[14rem]">
 AgriLink invites an individual,foundations and corporations<br></br>
to  make gifts and grants in support of the AgriLink.<br></br>
Contributions in any amount are welcome and <br></br>
indeed are most gratefully received.</div>
<div className='absolute z-10 text-white mt-[30rem] pl-[8rem] text-[36px]  md:text-[28px] md:pl-[3rem]   sm:invisible sm:mt-[25rem]'>Select an amount

</div>
<div className='absolute z-10 text-white mt-[34rem] pl-[8rem] text-[26px] flex flex-row gap-[2rem] md:pl-[3rem] sm:flex-row-reverse  sm:mt-[30rem] sm:pl-[5rem]'>
<button className=' bg-sky-100  hover:bg-sky-200 h-[3rem] w-[6rem] rounded-[10rem] text-black hover:white-800 sm:invisible'>100</button>
<button className=' bg-sky-100  hover:bg-sky-200  h-[3rem] w-[6rem] rounded-[10rem] text-black sm:invisible'>500</button>
<button className='  bg-sky-100  hover:bg-sky-200 h-[3rem] w-[9rem] rounded-[10rem] text-black  sm:top-[3rem]'>Donate Us</button>

</div>

     </div>
    </>
  )
}

export default Donate
