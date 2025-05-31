import React from 'react'
import Hero from './components/Hero'
import MarketAnalysis from './components/MarketAnalysis'
import GrowthRoadmap from './components/GrowthRoadmap'
import UnitEconomics from './components/UnitEconomics'
import Competition from './components/Competition'
import Team from './components/Team'
import './App.css'

function App() {
  return (
    <div className="App">
      <Hero />
      <MarketAnalysis />
      <GrowthRoadmap />
      <UnitEconomics />
      <Competition />
      <Team />
    </div>
  )
}

export default App
