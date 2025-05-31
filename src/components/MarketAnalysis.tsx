import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Target, TrendingUp, Globe, Zap } from 'lucide-react'

const MarketAnalysis = () => {
  const marketData = [
    { name: 'TAM', value: 54, description: '글로벌 Photo-Event + Party 서비스', color: '#8B5CF6' },
    { name: 'SAM', value: 9.6, description: '동아시아 + 미국 대학 파티', color: '#06B6D4' },
    { name: 'SOM', value: 0.15, description: '3년 내 확보 가능 세그먼트', color: '#10B981' }
  ]

  const growthData = [
    { year: '2024', tam: 54, sam: 9.6, som: 0.15 },
    { year: '2025', tam: 58.9, sam: 10.7, som: 0.25 },
    { year: '2026', tam: 64.3, sam: 11.9, som: 0.42 },
    { year: '2027', tam: 70.2, sam: 13.2, som: 0.68 },
    { year: '2028', tam: 76.6, sam: 14.6, som: 1.05 },
    { year: '2029', tam: 83.6, sam: 16.2, som: 1.58 }
  ]

  const competitorAdvantage = [
    { category: 'Hardware CAPEX', mufi: 55, competitor: 100, label: '경쟁사 대비 45% 절감' },
    { category: 'Data Revenue', mufi: 83, competitor: 28, label: 'SaaS 전환 후 GM 83%' },
    { category: 'Real-time Processing', mufi: 95, competitor: 15, label: '실시간 AI 데이터 처리' },
    { category: 'Global Scalability', mufi: 88, competitor: 45, label: '클라우드 기반 확장성' }
  ]

  return (
    <section className="market-analysis">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>시장 분석 & 기회</h2>
          <p>MUFI가 공략할 $54B 글로벌 시장의 구체적 접근 전략</p>
        </motion.div>

        <div className="market-grid">
          {/* TAM/SAM/SOM 차트 */}
          <motion.div 
            className="market-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>
              <Target className="icon" />
              시장 규모 분석 (TAM/SAM/SOM)
            </h3>
            
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={marketData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: $${value}B`}
                  >
                    {marketData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`$${value}B`, 'Market Size']} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="market-breakdown">
              {marketData.map((market, index) => (
                <div key={index} className="market-item">
                  <div className="market-indicator" style={{ backgroundColor: market.color }}></div>
                  <div className="market-info">
                    <span className="market-name">{market.name}</span>
                    <span className="market-value">${market.value}B</span>
                    <span className="market-desc">{market.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 성장 트렌드 */}
          <motion.div 
            className="market-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>
              <TrendingUp className="icon" />
              시장 성장 전망 (2024-2029)
            </h3>
            
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="tam" fill="#8B5CF6" name="TAM ($B)" />
                  <Bar dataKey="sam" fill="#06B6D4" name="SAM ($B)" />
                  <Bar dataKey="som" fill="#10B981" name="SOM ($B)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="growth-stats">
              <div className="stat">
                <span className="stat-label">TAM CAGR</span>
                <span className="stat-value">9.1%</span>
              </div>
              <div className="stat">
                <span className="stat-label">SAM CAGR</span>
                <span className="stat-value">11.0%</span>
              </div>
              <div className="stat">
                <span className="stat-label">Target Market</span>
                <span className="stat-value">135 캠퍼스</span>
              </div>
            </div>
          </motion.div>

          {/* 경쟁 우위 */}
          <motion.div 
            className="market-card competitive-advantage"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>
              <Zap className="icon" />
              MUFI 경쟁 우위
            </h3>
            
            {competitorAdvantage.map((item, index) => (
              <div key={index} className="advantage-item">
                <div className="advantage-header">
                  <span className="advantage-category">{item.category}</span>
                  <span className="advantage-label">{item.label}</span>
                </div>
                <div className="progress-container">
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill mufi"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.mufi}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill competitor"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.competitor}%` }}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                    />
                  </div>
                </div>
                <div className="progress-labels">
                  <span>MUFI: {item.mufi}%</span>
                  <span>경쟁사: {item.competitor}%</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* 핵심 인사이트 */}
          <motion.div 
            className="market-card insights"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>
              <Globe className="icon" />
              핵심 시장 인사이트
            </h3>
            
            <div className="insights-grid">
              <div className="insight-item">
                <div className="insight-number">800+</div>
                <div className="insight-label">목표 이벤트</div>
                <div className="insight-desc">한국/미국 핵심 세그먼트</div>
              </div>
              
              <div className="insight-item">
                <div className="insight-number">45%</div>
                <div className="insight-label">비용 절감</div>
                <div className="insight-desc">하드웨어 CAPEX 효율성</div>
              </div>
              
              <div className="insight-item">
                <div className="insight-number">83%</div>
                <div className="insight-label">목표 GM</div>
                <div className="insight-desc">SaaS 전환 후</div>
              </div>
              
              <div className="insight-item">
                <div className="insight-number">Real-time</div>
                <div className="insight-label">데이터 처리</div>
                <div className="insight-desc">AI 기반 즉시 분석</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MarketAnalysis 