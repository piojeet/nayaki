import React from 'react'
import HeroRight from './HeroRight'

function HeroLeft() {
  return (
    <div>
        <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between p-4 md:px-8'>
            <div></div>
            <HeroRight />
        </div>
    </div>
  )
}

export default HeroLeft