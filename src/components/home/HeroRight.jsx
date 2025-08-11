import React from 'react'
import Mask from '../../assets/mask.png'
import Gemini from '../../assets/Gemini.png'

function HeroRight() {
  return (
    <div>
        <div className='bg-black/20 rounded-[60px] pt-8 px-16 pb-6'>
            <div className='text-3xl font-normal text-light text-center'>Every minute counts</div>
            <h1 className='text-6xl text-center text-light pt-3'><span>You’re</span> <span className='font-InstrumentserifItalic font-light'>90% more likely</span> <br /><span>to land interviews</span></h1>
            <div className='py-3'>
                <p className='font-DMSansRegular text-light text-center text-3xl'>Land more interviews by applying faster</p>
                <img src={Mask} alt="mask" className='ml-auto' />
            </div>
            <button className='bg-accent text-light py-2 md:px-8 px-4 rounded-full flex gap-2 items-center text-xl mx-auto'>Opportunities Await <img src={Gemini} alt="gimini" className='size-11' /></button>
        </div>
    </div>
  )
}

export default HeroRight