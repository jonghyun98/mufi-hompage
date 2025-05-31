import { motion } from 'framer-motion'
import { MapPin, Flag, Rocket, DollarSign, Users, Globe } from 'lucide-react'

const GrowthRoadmap = () => {
  const horizons = [
    {
      id: 'H1',
      title: 'Local SaaS Dominance',
      period: '2025 Q4',
      revenue: 'Event SaaS + Frame Sales',
      hypothesis: '한국 이벤트 시장 > SaaS 전환 MVP 검증',
      kpi: 'MRR ₩60M, GR 55%',
      icon: <MapPin size={32} />,
      color: '#10B981',
      milestones: [
        '한국 주요 대학 50곳 파트너십',
        'SaaS 플랫폼 베타 출시',
        '월 800건 이벤트 운영',
        'Unit Economics 검증 완료'
      ]
    },
    {
      id: 'H2',
      title: 'US Campus Beach-head',
      period: '2026',
      revenue: '미국 대학 3곳 Pilot + Partner API',
      hypothesis: '파티문화 × 포토부스 = 월 MRR US$200k',
      kpi: 'US DAU 30k',
      icon: <Flag size={32} />,
      color: '#06B6D4',
      milestones: [
        '미국 3개 대학 Pilot 성공',
        'Partner API 플랫폼 구축',
        'B2B SaaS 모델 확립',
        'Series B 라운드 준비'
      ]
    },
    {
      id: 'H3',
      title: 'Global AX·DX Data Grid',
      period: '2027-28',
      revenue: '데이터 Marketplace(AX)',
      hypothesis: '실시간 오프라인 UX 데이터 → 기업 API 판매',
      kpi: 'ARR US$25M, GM 70%',
      icon: <Rocket size={32} />,
      color: '#8B5CF6',
      milestones: [
        '글로벌 데이터 마켓플레이스',
        '기업 고객 100+ 확보',
        'AI 인사이트 엔진 완성',
        'IPO 준비 완료'
      ]
    }
  ]

  const visionSteps = [
    {
      step: '01',
      title: '순간의 감정 캡처',
      description: '오프라인 I/O 디바이스로 실시간 감정 데이터 수집',
      icon: <Users size={24} />
    },
    {
      step: '02',
      title: '클라우드 AI 처리',
      description: '실시간 AI 분석으로 의미있는 인사이트 생성',
      icon: <Globe size={24} />
    },
    {
      step: '03',
      title: '글로벌 데이터 파이프라인',
      description: '전 세계 브랜드가 구독하는 리얼월드 데이터',
      icon: <DollarSign size={24} />
    }
  ]

  return (
    <section className="growth-roadmap">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>성장 로드맵</h2>
          <p>3단계 Horizon으로 이어지는 MUFI의 글로벌 확장 전략</p>
        </motion.div>

        {/* Vision Flow */}
        <motion.div 
          className="vision-flow"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>비전 Narrative</h3>
          <div className="vision-steps">
            {visionSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="vision-step"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
                {index < visionSteps.length - 1 && (
                  <div className="step-arrow">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Horizons Timeline */}
        <div className="horizons-timeline">
          {horizons.map((horizon, index) => (
            <motion.div 
              key={horizon.id}
              className="horizon-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="horizon-header" style={{ borderColor: horizon.color }}>
                <div className="horizon-icon" style={{ backgroundColor: horizon.color }}>
                  {horizon.icon}
                </div>
                <div className="horizon-meta">
                  <span className="horizon-id">{horizon.id}</span>
                  <h3>{horizon.title}</h3>
                  <span className="horizon-period">{horizon.period}</span>
                </div>
              </div>

              <div className="horizon-content">
                <div className="horizon-details">
                  <div className="detail-item">
                    <span className="detail-label">Revenue Engine:</span>
                    <span className="detail-value">{horizon.revenue}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">핵심 가설:</span>
                    <span className="detail-value">{horizon.hypothesis}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">North-Star KPI:</span>
                    <span className="detail-value kpi" style={{ color: horizon.color }}>
                      {horizon.kpi}
                    </span>
                  </div>
                </div>

                <div className="horizon-milestones">
                  <h4>주요 마일스톤</h4>
                  <ul>
                    {horizon.milestones.map((milestone, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                      >
                        <div className="milestone-bullet" style={{ backgroundColor: horizon.color }}></div>
                        {milestone}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < horizons.length - 1 && (
                <motion.div 
                  className="horizon-connector"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div 
          className="success-metrics"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>성공 지표 요약</h3>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon">📊</div>
              <div className="metric-title">수익 성장</div>
              <div className="metric-value">₩60M → $25M ARR</div>
              <div className="metric-desc">3년간 41배 성장</div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon">🌏</div>
              <div className="metric-title">시장 확장</div>
              <div className="metric-value">한국 → 글로벌</div>
              <div className="metric-desc">3대륙 진출 완료</div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon">🔥</div>
              <div className="metric-title">비즈니스 모델</div>
              <div className="metric-value">하드웨어 → 데이터</div>
              <div className="metric-desc">GM 70% 달성</div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon">🚀</div>
              <div className="metric-title">Exit Strategy</div>
              <div className="metric-value">IPO 준비</div>
              <div className="metric-desc">2028년 목표</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GrowthRoadmap 