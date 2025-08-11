import React from 'react'
import Nav from './components/home/Nav'
import HeroLeft from './components/home/HeroLeft'
import WatchAction from './components/home/WatchAction'
import OurReviews from './components/home/OurReviews'
import AiPowerd from './components/home/AiPowerd'

function App() {
  return (
    <div className='bg-dark min-h-screen h-auto'>
      <Nav />
      <HeroLeft />
      <WatchAction />
      <OurReviews />
      <AiPowerd />
      {/* Add more components as needed */}
    </div>
  )
}

export default App