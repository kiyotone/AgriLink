import React from 'react'

const login = () => {
  const border_color = "#727375";
  return (
    <div class="flex items-center justify-center h-screen">
        
        <div className='w-[24rem]  bg-black flex flex-col items-center shadow-md rounded-xl'>
        <div className='m-4 text-[2rem] font-bold'>Join US</div>
            <div className='bg-red-400 w-[18rem] h-[14rem] '>
                {/* facebook
                google
                twitter */}
                
            </div>
            
            <div className='mt-2 w-[24rem] h-[1rem]'>
            <hr className={` m-3 bg-${border_color}`}/>
            </div>
                
            
            <div className='mt-3 flex flex-col items-center'>
                <input type="text"  placeholder='Email or Username' className={`pl-4 mt-4 bg-transparent border-2 rounded-md border-[${border_color}] w-[19rem] h-[3rem]`}/>
                <input type="password"  placeholder='Password' className={`pl-4 mt-4 bg-transparent border-2 rounded-md border-[${border_color}] w-[19rem] h-[3rem]`}/>
                <button className={`pl-4 mt-4 rounded-md w-[19rem] h-[3rem] button`}>Continue</button>
                
                <div className={`w-[19rem] h-[3rem] flex items-center justify-between text-[.8rem] text-[#727375}]`}>
                
                <div className='flex items-center'><input type="checkbox" id='remember' placeholder='Password' className={`mr-2 bg-transparent border-2 rounded-md border-[${border_color}] w-[1rem] h-[1rem]`}/><label for='remember'> Remember Me</label></div>
                
                <div className={`text-primary cursor-pointer hover:underline underline-offset-1`}>Forgot Password?</div>
                
                </div>
            
            <div className='mb-6 mt-2 flex text-[.9rem]'>

                  Not a member yet?

                  <div className='pl-2 text-primary cursor-pointer hover:underline underline-offset-1'>Join now</div>

            </div>
            </div>



        </div>
    </div>
  )
}

export default login