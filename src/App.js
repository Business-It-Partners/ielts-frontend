import React from 'react'
import Header from './component/hompage/Header'
import HeroSection from './component/hompage/Hero'
import IELTSAICheckerBanner from './component/hompage/IELTSAICheckerBanner'
import LatestIELTSTestReleases from './component/hompage/LatestIELTSTestReleases'
import IELTSTipOfTheDay from './component/hompage/IELTSTipOfTheDay'
import IELTSOnlineTestsBenefits from './component/hompage/IELTSOnlineTestsBenefits'
import IELTSPrepStatistics from './component/hompage/IELTSPrepStatistics'



const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <IELTSAICheckerBanner />
      <LatestIELTSTestReleases />
      <IELTSTipOfTheDay />
      <IELTSOnlineTestsBenefits />
      <IELTSPrepStatistics />



    </div>
  )
}

export default App