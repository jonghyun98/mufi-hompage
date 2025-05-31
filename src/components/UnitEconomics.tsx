import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { DollarSign, TrendingUp, Calculator, Target } from 'lucide-react'

const UnitEconomics = () => {
  // 1회 행사 비용/수익 분석
  const eventBreakdown = [
    { name: '프린트 용지·소모품', value: 38000, type: 'cost', color: '#EF4444' },
    { name: '인건비 (6시간)', value: 120000, type: 'cost', color: '#F97316' },
    { name: '차량 물류', value: 70000, type: 'cost', color: '#F59E0B' },
    { name: '프레임·촬영 수익', value: 1200000, type: 'revenue', color: '#10B981' },
    { name: '현장 업셀', value: 100000, type: 'revenue', color: '#06B6D4' }
  ]

  const costData = eventBreakdown.filter(item => item.type === 'cost')
  const revenueData = eventBreakdown.filter(item => item.type === 'revenue')

  // SaaS 전환 전/후 비교
  const saasComparison = [
    { 
      model: '현재 (하드웨어)',
      revenue: 1300000,
      costs: 228000,
      grossProfit: 1072000,
      margin: 82.5
    },
    { 
      model: 'SaaS 전환 후',
      revenue: 1500000,
      costs: 255000,
      grossProfit: 1245000,
      margin: 83.0
    }
  ]

  // 성장 시나리오 (월별)
  const growthScenario = [
    { month: '2024-12', events: 45, revenue: 58500, costs: 10260, profit: 48240 },
    { month: '2025-03', events: 78, revenue: 101400, costs: 17784, profit: 83616 },
    { month: '2025-06', events: 120, revenue: 156000, costs: 27360, profit: 128640 },
    { month: '2025-09', events: 185, revenue: 240500, costs: 42180, profit: 198320 },
    { month: '2025-12', events: 280, revenue: 364000, costs: 63840, profit: 300160 }
  ]

  // LTV vs CAC 분석
  const ltvCacData = [
    { segment: '대학 이벤트', ltv: 2400, cac: 380, ratio: 6.3 },
    { segment: '기업 행사', ltv: 4800, cac: 720, ratio: 6.7 },
    { segment: '축제/페스티벌', ltv: 7200, cac: 950, ratio: 7.6 },
    { segment: 'SaaS 고객', ltv: 18000, cac: 1200, ratio: 15.0 }
  ]

  return (
    <section className="unit-economics">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Unit Economics</h2>
          <p>MUFI 비즈니스 모델의 수익성과 확장성 분석</p>
        </motion.div>

        <div className="economics-grid">
          {/* 1회 행사 수익 분석 */}
          <motion.div 
            className="economics-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>
              <Calculator className="icon" />
              1회 행사 Unit Economics
            </h3>
            
            <div className="event-summary">
              <div className="summary-item revenue">
                <span className="label">총 매출</span>
                <span className="value">₩1,300,000</span>
              </div>
              <div className="summary-item cost">
                <span className="label">총 변동비</span>
                <span className="value">₩228,000</span>
              </div>
              <div className="summary-item profit">
                <span className="label">Gross Profit</span>
                <span className="value">₩1,072,000</span>
              </div>
              <div className="summary-item margin">
                <span className="label">Gross Margin</span>
                <span className="value">82.5%</span>
              </div>
            </div>

            <div className="charts-row">
              <div className="chart-half">
                <h4>비용 구조</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={costData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="value"
                      label={({ name, value }) => `₩${(Number(value)/1000).toFixed(0)}K`}
                    >
                      {costData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`₩${value.toLocaleString()}`, '비용']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="chart-half">
                <h4>수익 구조</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={revenueData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="value"
                      label={({ name, value }) => `₩${(Number(value)/1000).toFixed(0)}K`}
                    >
                      {revenueData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`₩${value.toLocaleString()}`, '수익']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* SaaS 전환 비교 */}
          <motion.div 
            className="economics-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>
              <Target className="icon" />
              SaaS 전환 영향 분석
            </h3>
            
            <div className="saas-comparison">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={saasComparison} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="model" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`₩${(Number(value)/1000).toFixed(0)}K`, '']} />
                  <Bar dataKey="revenue" fill="#10B981" name="매출" />
                  <Bar dataKey="costs" fill="#EF4444" name="비용" />
                  <Bar dataKey="grossProfit" fill="#06B6D4" name="총이익" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="saas-insights">
              <div className="insight">
                <span className="insight-label">소모품 제거 효과</span>
                <span className="insight-value">+15% Revenue</span>
              </div>
              <div className="insight">
                <span className="insight-label">목표 GM</span>
                <span className="insight-value">83%</span>
              </div>
              <div className="insight">
                <span className="insight-label">확장성</span>
                <span className="insight-value">무제한</span>
              </div>
            </div>
          </motion.div>

          {/* 성장 시나리오 */}
          <motion.div 
            className="economics-card growth-scenario"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>
              <TrendingUp className="icon" />
              성장 시나리오 (2024-2025)
            </h3>
            
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthScenario}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    name === 'events' ? `${value}건` : `₩${(Number(value)/1000).toFixed(0)}K`,
                    name === 'events' ? '이벤트 수' : 
                    name === 'revenue' ? '매출' :
                    name === 'costs' ? '비용' : '순이익'
                  ]} 
                />
                <Line type="monotone" dataKey="events" stroke="#8B5CF6" strokeWidth={3} name="events" />
                <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} name="revenue" />
                <Line type="monotone" dataKey="profit" stroke="#06B6D4" strokeWidth={3} name="profit" />
              </LineChart>
            </ResponsiveContainer>

            <div className="growth-stats">
              <div className="stat">
                <span className="stat-label">12개월 성장률</span>
                <span className="stat-value">522%</span>
              </div>
              <div className="stat">
                <span className="stat-label">월 목표 이벤트</span>
                <span className="stat-value">280건</span>
              </div>
              <div className="stat">
                <span className="stat-label">연말 월매출</span>
                <span className="stat-value">₩364M</span>
              </div>
            </div>
          </motion.div>

          {/* LTV vs CAC */}
          <motion.div 
            className="economics-card ltv-cac"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>
              <DollarSign className="icon" />
              LTV vs CAC 분석
            </h3>
            
            <div className="ltv-cac-grid">
              {ltvCacData.map((segment, index) => (
                <motion.div 
                  key={index}
                  className="ltv-cac-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="segment-name">{segment.segment}</div>
                  <div className="ltv-cac-metrics">
                    <div className="metric">
                      <span className="metric-label">LTV</span>
                      <span className="metric-value ltv">₩{segment.ltv.toLocaleString()}</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">CAC</span>
                      <span className="metric-value cac">₩{segment.cac.toLocaleString()}</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">LTV/CAC</span>
                      <span className="metric-value ratio">{segment.ratio}x</span>
                    </div>
                  </div>
                  <div className="ratio-bar">
                    <motion.div 
                      className="ratio-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(segment.ratio * 6, 100)}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="ltv-insights">
              <div className="insight-highlight">
                <span className="highlight-label">SaaS 전환 시</span>
                <span className="highlight-value">LTV/CAC 15x</span>
                <span className="highlight-desc">업계 평균 3x 대비 5배 우수</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Takeaways */}
        <motion.div 
          className="key-takeaways"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>핵심 경제성 인사이트</h3>
          <div className="takeaways-grid">
            <div className="takeaway">
              <div className="takeaway-icon">💰</div>
              <div className="takeaway-title">강력한 Unit Economics</div>
              <div className="takeaway-desc">1회 행사당 ₩1.07M 순이익, GM 82.5%</div>
            </div>
            
            <div className="takeaway">
              <div className="takeaway-icon">📈</div>
              <div className="takeaway-title">확장 가능한 모델</div>
              <div className="takeaway-desc">SaaS 전환으로 무한 확장성 확보</div>
            </div>
            
            <div className="takeaway">
              <div className="takeaway-icon">🎯</div>
              <div className="takeaway-title">효율적 고객 획득</div>
              <div className="takeaway-desc">LTV/CAC 15x로 지속 가능한 성장</div>
            </div>
            
            <div className="takeaway">
              <div className="takeaway-icon">🚀</div>
              <div className="takeaway-title">빠른 성장 궤도</div>
              <div className="takeaway-desc">12개월 내 522% 성장 시나리오</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default UnitEconomics 