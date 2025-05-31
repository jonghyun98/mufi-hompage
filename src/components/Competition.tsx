import { motion } from 'framer-motion'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Shield, Zap, Cloud, Cpu, Database, Globe } from 'lucide-react'

const Competition = () => {
  const competitors = [
    {
      name: '제공',
      region: 'KR Only',
      bizModel: 'Event 렌탈',
      strength: '대형 F&B 제휴',
      gap: 'No Cloud, No Data',
      marketShare: 15,
      techScore: 2,
      dataScore: 1,
      scalabilityScore: 2,
      logo: '🏢'
    },
    {
      name: 'Smiles USA',
      region: 'US',
      bizModel: '부스 판매',
      strength: '2000+ 설치',
      gap: 'SaaS 0%, GM 28%',
      marketShare: 35,
      techScore: 3,
      dataScore: 2,
      scalabilityScore: 3,
      logo: '📸'
    },
    {
      name: 'Quick-Snap JP',
      region: 'JP',
      bizModel: 'B2C 프린터 앱',
      strength: 'B2C 브랜드',
      gap: '오프라인 기기 없음',
      marketShare: 20,
      techScore: 4,
      dataScore: 3,
      scalabilityScore: 4,
      logo: '📱'
    },
    {
      name: 'MUFI',
      region: 'KR→US→Global',
      bizModel: 'HW + SaaS',
      strength: '실시간 데이터, AI SDK',
      gap: 'Data IP, IFRS Cap Stability',
      marketShare: 5,
      techScore: 9,
      dataScore: 10,
      scalabilityScore: 9,
      logo: '🚀'
    }
  ]

  const radarData = [
    {
      category: 'Technology',
      제공: 2,
      SmilesUSA: 3,
      QuickSnap: 4,
      MUFI: 9
    },
    {
      category: 'Data Capability',
      제공: 1,
      SmilesUSA: 2,
      QuickSnap: 3,
      MUFI: 10
    },
    {
      category: 'Scalability',
      제공: 2,
      SmilesUSA: 3,
      QuickSnap: 4,
      MUFI: 9
    },
    {
      category: 'Market Presence',
      제공: 6,
      SmilesUSA: 8,
      QuickSnap: 7,
      MUFI: 4
    },
    {
      category: 'Innovation',
      제공: 2,
      SmilesUSA: 3,
      QuickSnap: 5,
      MUFI: 10
    },
    {
      category: 'Revenue Model',
      제공: 4,
      SmilesUSA: 3,
      QuickSnap: 6,
      MUFI: 9
    }
  ]

  const businessModelComparison = [
    { model: '하드웨어 판매', 제공: 80, SmilesUSA: 90, QuickSnap: 20, MUFI: 30 },
    { model: 'SaaS 구독', 제공: 0, SmilesUSA: 0, QuickSnap: 60, MUFI: 70 },
    { model: '데이터 마켓플레이스', 제공: 0, SmilesUSA: 0, QuickSnap: 0, MUFI: 50 },
    { model: 'API 라이센싱', 제공: 0, SmilesUSA: 0, QuickSnap: 10, MUFI: 40 }
  ]

  const mufiAdvantages = [
    {
      icon: <Database size={32} />,
      title: '실시간 데이터 처리',
      description: '오프라인 감정 데이터를 실시간 AI 분석',
      advantage: '경쟁사 대비 95% 우수',
      color: '#8B5CF6'
    },
    {
      icon: <Cloud size={32} />,
      title: '클라우드 SaaS 모델',
      description: '무한 확장 가능한 SaaS 플랫폼',
      advantage: 'GM 83% vs 경쟁사 28%',
      color: '#06B6D4'
    },
    {
      icon: <Cpu size={32} />,
      title: 'AI 인사이트 엔진',
      description: '머신러닝 기반 행동 예측',
      advantage: '특허 2건 확보',
      color: '#10B981'
    },
    {
      icon: <Globe size={32} />,
      title: '글로벌 확장성',
      description: '다중 지역 동시 운영 가능',
      advantage: '3대륙 진출 계획',
      color: '#F59E0B'
    }
  ]

  return (
    <section className="competition">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>경쟁 지형 & 포지셔닝</h2>
          <p>MUFI가 기존 경쟁사들과 차별화되는 핵심 우위 요소</p>
        </motion.div>

        <div className="competition-grid">
          {/* 경쟁사 비교 테이블 */}
          <motion.div 
            className="competition-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>
              <Shield className="icon" />
              주요 경쟁사 분석
            </h3>
            
            <div className="competitors-table">
              <div className="table-header">
                <div className="col-competitor">Competitor</div>
                <div className="col-region">Region</div>
                <div className="col-model">Business Model</div>
                <div className="col-strength">Strength</div>
                <div className="col-gap">Gap vs MUFI</div>
              </div>
              
              {competitors.map((competitor, index) => (
                <motion.div 
                  key={index}
                  className={`table-row ${competitor.name === 'MUFI' ? 'mufi-row' : ''}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="col-competitor">
                    <span className="competitor-logo">{competitor.logo}</span>
                    <span className="competitor-name">{competitor.name}</span>
                  </div>
                  <div className="col-region">{competitor.region}</div>
                  <div className="col-model">{competitor.bizModel}</div>
                  <div className="col-strength">{competitor.strength}</div>
                  <div className="col-gap">{competitor.gap}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 레이더 차트 */}
          <motion.div 
            className="competition-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>
              <Zap className="icon" />
              역량 비교 분석
            </h3>
            
            <div className="radar-container">
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis angle={90} domain={[0, 10]} />
                  <Radar name="제공" dataKey="제공" stroke="#EF4444" fill="#EF4444" fillOpacity={0.1} />
                  <Radar name="Smiles USA" dataKey="SmilesUSA" stroke="#F97316" fill="#F97316" fillOpacity={0.1} />
                  <Radar name="Quick-Snap" dataKey="QuickSnap" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.1} />
                  <Radar name="MUFI" dataKey="MUFI" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} strokeWidth={3} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="radar-legend">
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#EF4444' }}></div>
                <span>제공 (Local 렌탈)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#F97316' }}></div>
                <span>Smiles USA (하드웨어)</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ backgroundColor: '#F59E0B' }}></div>
                <span>Quick-Snap (B2C 앱)</span>
              </div>
              <div className="legend-item mufi">
                <div className="legend-color" style={{ backgroundColor: '#8B5CF6' }}></div>
                <span>MUFI (Data-driven)</span>
              </div>
            </div>
          </motion.div>

          {/* 비즈니스 모델 비교 */}
          <motion.div 
            className="competition-card business-models"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>수익 모델 포트폴리오</h3>
            
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={businessModelComparison} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="model" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, '비중']} />
                <Bar dataKey="제공" fill="#EF4444" name="제공" />
                <Bar dataKey="SmilesUSA" fill="#F97316" name="Smiles USA" />
                <Bar dataKey="QuickSnap" fill="#F59E0B" name="Quick-Snap" />
                <Bar dataKey="MUFI" fill="#8B5CF6" name="MUFI" />
              </BarChart>
            </ResponsiveContainer>

            <div className="model-insights">
              <div className="insight">
                <span className="insight-label">MUFI 고유:</span>
                <span className="insight-value">데이터 마켓플레이스</span>
              </div>
              <div className="insight">
                <span className="insight-label">수익 다각화:</span>
                <span className="insight-value">4개 모델 조합</span>
              </div>
            </div>
          </motion.div>

          {/* MUFI 핵심 우위 */}
          <motion.div 
            className="competition-card mufi-advantages"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>MUFI 차별화 우위</h3>
            
            <div className="advantages-grid">
              {mufiAdvantages.map((advantage, index) => (
                <motion.div 
                  key={index}
                  className="advantage-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="advantage-icon" style={{ color: advantage.color }}>
                    {advantage.icon}
                  </div>
                  <div className="advantage-content">
                    <h4>{advantage.title}</h4>
                    <p>{advantage.description}</p>
                    <div className="advantage-metric" style={{ color: advantage.color }}>
                      {advantage.advantage}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 경쟁 우위 요약 */}
        <motion.div 
          className="competitive-summary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>핵심 경쟁 우위 요약</h3>
          <div className="summary-cards">
            <div className="summary-card">
              <div className="summary-icon">💡</div>
              <div className="summary-title">기술 혁신</div>
              <div className="summary-desc">AI 기반 실시간 데이터 처리로 경쟁사 대비 95% 우수한 기술력</div>
            </div>
            
            <div className="summary-card">
              <div className="summary-icon">💰</div>
              <div className="summary-title">수익성</div>
              <div className="summary-desc">SaaS 모델로 GM 83% 달성, 경쟁사 평균 28% 대비 3배 우수</div>
            </div>
            
            <div className="summary-card">
              <div className="summary-icon">🌍</div>
              <div className="summary-title">확장성</div>
              <div className="summary-desc">클라우드 기반 무한 확장으로 글로벌 시장 동시 진출 가능</div>
            </div>
            
            <div className="summary-card">
              <div className="summary-icon">📊</div>
              <div className="summary-title">데이터 IP</div>
              <div className="summary-desc">실시간 오프라인 UX 데이터 독점으로 새로운 시장 창출</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Competition 