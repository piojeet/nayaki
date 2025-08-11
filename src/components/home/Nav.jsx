import React from 'react'
import Logo from '../../assets/logo.png'

function Nav() {
  return (
    <div>
        <div className='max-w-[1440px] mx-auto flex justify-between items-center p-4 md:px-8 releative'>
            <div><img src={Logo} alt="logo" className='w-[138px]' /></div>
            <div className='flex itcems-center gap-4 text-sm'>
                <button className='bg-accent text-light py-2 md:px-8 px-4 rounded-full'>The Job Journal</button>
                <button className='bg-accent text-light py-2 md:px-8 px-4 rounded-full'>Job Jarvis</button>
            </div>

            <div className='absolute left-1/2 transform -translate-x-1/2 text-5xl font-bold flex items-center gap-2 font-TanNimbus'>
                {/* <span className='text-secondary'>Infinity</span> */}
                <span><img src={Logo} alt="logo" className='w-[70px]' /></span>
                {/* <span className='text-secondary'>Beyond</span> */}
            </div>
        </div>
    </div>
  )
}

export default Nav