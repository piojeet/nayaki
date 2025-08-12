import React from 'react'
import HeroRight from './HeroRight'
import Spline from '@splinetool/react-spline';

function HeroLeft() {
  return (
    <div>
      <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between p-4 md:px-8'>
        <div className='w-1/2 h-[40vh]'>
          <Spline scene="https://prod.spline.design/i56Sll5KbkCWmTPy/scene.splinecode" />
        </div>
        <HeroRight />
      </div>
    </div>
  )
}

export default HeroLeft