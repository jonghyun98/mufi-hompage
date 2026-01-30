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
    <>
      <a href="#main-content" className="skip-link">
        메인 콘텐츠로 건너뛰기
      </a>
      <MobileNav />
      <main id="main-content" className="App">
        <section id="hero" aria-label="MUFI 소개">
          <Hero />
        </section>
        <section id="market-analysis" aria-label="시장 분석">
          <MarketAnalysis />
        </section>
        <section id="growth-roadmap" aria-label="성장 로드맵">
          <GrowthRoadmap />
        </section>
        <section id="unit-economics" aria-label="단위 경제학">
          <UnitEconomics />
        </section>
        <section id="competition" aria-label="경쟁 분석">
          <Competition />
        </section>
        <section id="team" aria-label="팀 및 투자">
          <Team />
        </section>
      </main>
    </>
  )
}

export default App
