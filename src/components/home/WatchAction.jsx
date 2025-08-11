import React from 'react'
import Frame from '../../assets/Frame 27.png'
import { FaPlay } from 'react-icons/fa'

function WatchAction() {
  return (
    <div>
        <div className='max-w-[1440px] mx-auto p-4 md:px-8'>
            <h2 className='bg-gradient-to-b from-[#FFFFFF] to-[#000000] bg-clip-text text-transparent text-[100px] font-DegularSemibold text-center'>Watch  in action</h2>

            <div className='relative bg-black/20 backdrop-blur-md border border-white/20 rounded-[50px] p-20 mt-4'>
                <div>
                    <img src={Frame} alt="frame" />
                </div>
                <button className='bg-light size-12 flex items-center justify-center rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'><FaPlay /></button>
            </div>
        </div>
    </div>
  )
}

export default WatchAction