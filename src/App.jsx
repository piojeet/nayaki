import React from 'react'
import Nav from './components/home/Nav'
import HeroLeft from './components/home/HeroLeft'
import WatchAction from './components/home/WatchAction'
import OurReviews from './components/home/OurReviews'
import AiPowerd from './components/home/AiPowerd'
import SimpleSetup from './components/home/SimpleSetup'
import Proof from './components/home/Proof'
import Noice from './components/home/Noice'
import Hiring from './components/home/Hiring'
import Plan from './components/home/Plan'
import JoinThousands from './components/home/JoinThousands'
import UpgradeAi from './components/home/UpgradeAi'

function App() {
  return (
    <div className='bg-dark min-h-screen h-auto'>
      <Nav />
      <HeroLeft />
      <WatchAction />
      <OurReviews />
      <AiPowerd />
      <SimpleSetup />
      <Proof />
      <Noice />
      <Hiring />
      <Plan />
      <JoinThousands />
      <UpgradeAi />
      {/* Add more components as needed */}
    </div>
  )
}

export default App