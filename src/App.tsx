import Hero from './components/Hero'
import MarketAnalysis from './components/MarketAnalysis'
import GrowthRoadmap from './components/GrowthRoadmap'
import UnitEconomics from './components/UnitEconomics'
import Competition from './components/Competition'
import Team from './components/Team'
import MobileNav from './components/MobileNav'
import './App.css'

function App() {
  return (
    <div className="App">
      <MobileNav />
      <div id="hero">
        <Hero />
      </div>
      <div id="market-analysis">
        <MarketAnalysis />
      </div>
      <div id="growth-roadmap">
        <GrowthRoadmap />
      </div>
      <div id="unit-economics">
        <UnitEconomics />
      </div>
      <div id="competition">
        <Competition />
      </div>
      <div id="team">
        <Team />
      </div>
    </div>
  )
}

export default App
