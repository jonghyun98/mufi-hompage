import { motion } from 'framer-motion'
import { Users, Target, Clock, Award, Calendar, DollarSign, TrendingUp } from 'lucide-react'

const Team = () => {
  const timeline = [
    { week: 'T-12주', milestone: 'VP Finance DD Data-Room 완성', status: 'completed' },
    { week: 'T-11주', milestone: 'IR Deck v1 발송(20 VC)', status: 'completed' },
    { week: 'T-8주', milestone: '1st Partner Meeting / Term-Sheet Offer 3장 확보', status: 'in-progress' },
    { week: 'T-6주', milestone: 'Selected Lead VC LOI 확정 / 법률 DD Kick-off', status: 'upcoming' },
    { week: 'T-4주', milestone: 'Term-Sheet Sign / Board 결의', status: 'upcoming' },
    { week: 'T-2주', milestone: 'SPA·SHA 드래프트 완료 / 회계 Comfort Letter', status: 'upcoming' },
    { week: 'T (클로징)', milestone: '증자 등기 + 투자금 입금 + PR Press Release', status: 'upcoming' },
    { week: 'T+2주', milestone: '보도 인터뷰 / 내부 올-핸즈(투자 Story 공유)', status: 'upcoming' }
  ]

  const investmentGoals = [
    {
      metric: '최소 희석',
      target: '< 25%',
      description: '기존 주주 지분 보호',
      icon: <Target size={24} />
    },
    {
      metric: '최대 밸류',
      target: '₩200억+',
      description: '시리즈 A 목표 기업가치',
      icon: <TrendingUp size={24} />
    },
    {
      metric: '12주 내 종결',
      target: '3개월',
      description: '빠른 실행으로 시장 기회 선점',
      icon: <Clock size={24} />
    }
  ]

  const organizationPrinciples = [
    {
      title: 'Mission 찐화',
      description: '매 분기 전사 Story Day. 고객 후기 영상으로 팀원 전원이 Story Talk',
      icon: '🎯'
    },
    {
      title: 'Informed Captain',
      description: '25개 업무 Matrix 공개. 각 Captain은 OKR 승인만 받고 실행자율 100%',
      icon: '⚙️'
    },
    {
      title: 'SBI 피드백 Loop',
      description: '본부장 주기로 2주 1회. 칭찬은 공개, 개선점은 1:1',
      icon: '🔄'
    },
    {
      title: 'Shadow Board',
      description: '20대 주니어 4명이 경영 안건 사전 검토. 탐색적 아이디어 채택률 32%',
      icon: '👥'
    }
  ]

  const checklist = [
    { item: 'IR Deck v3 – 시장규모 그래프, 제품 데모 GIF 포함', date: '6/7', status: 'pending' },
    { item: '회계법인 최종 IFRS Opinion Letter 확보', date: '6/14', status: 'pending' },
    { item: 'RCPS 계약서 법률 DD (TheFirm) 1차 코멘트 반영', date: '6/21', status: 'pending' },
    { item: 'Pilot US Campus LOI 3건 서명', date: '6/30', status: 'pending' },
    { item: 'ESOP 규정 개정 안 – Shadow Board 논의', date: '7/05', status: 'pending' }
  ]

  return (
    <section className="team">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>조직 & 투자 전략</h2>
          <p>최소 희석, 최대 밸류, 12주 내 종결을 목표로 하는 MUFI 시리즈 A</p>
        </motion.div>

        <div className="team-grid">
          {/* 투자 목표 */}
          <motion.div 
            className="team-card investment-goals"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>
              <DollarSign className="icon" />
              투자 목표 (Three Pillars)
            </h3>
            
            <div className="goals-grid">
              {investmentGoals.map((goal, index) => (
                <motion.div 
                  key={index}
                  className="goal-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="goal-icon">{goal.icon}</div>
                  <div className="goal-content">
                    <div className="goal-metric">{goal.metric}</div>
                    <div className="goal-target">{goal.target}</div>
                    <div className="goal-description">{goal.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="investment-highlight">
              <div className="highlight-quote">
                "시리즈 A는 자본 조달의 끝이 아니라 MUFI Global Grid의 Start Button이다."
              </div>
            </div>
          </motion.div>

          {/* 실행 타임라인 */}
          <motion.div 
            className="team-card timeline"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>
              <Calendar className="icon" />
              실행 타임라인 (12주 Countdown)
            </h3>
            
            <div className="timeline-container">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`timeline-item ${item.status}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="timeline-marker">
                    <div className={`marker-dot ${item.status}`}></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-week">{item.week}</div>
                    <div className="timeline-milestone">{item.milestone}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 조직 문화 */}
          <motion.div 
            className="team-card culture"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>
              <Users className="icon" />
              조직 & Culture Stack
            </h3>
            
            <div className="culture-principles">
              {organizationPrinciples.map((principle, index) => (
                <motion.div 
                  key={index}
                  className="principle-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="principle-icon">{principle.icon}</div>
                  <div className="principle-content">
                    <h4>{principle.title}</h4>
                    <p>{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="culture-tools">
              <h4>Tools</h4>
              <div className="tools-list">
                <span className="tool">Notion (KPI)</span>
                <span className="tool">Linear (Dev)</span>
                <span className="tool">Slack (Apps)</span>
                <span className="tool">ClickUp (OKR)</span>
              </div>
            </div>
          </motion.div>

          {/* Next Action Checklist */}
          <motion.div 
            className="team-card checklist"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>
              <Award className="icon" />
              Next Action Checklist
            </h3>
            
            <div className="checklist-items">
              {checklist.map((item, index) => (
                <motion.div 
                  key={index}
                  className="checklist-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className={`checkbox ${item.status}`}>
                    {item.status === 'completed' ? '✓' : '☐'}
                  </div>
                  <div className="checklist-content">
                    <div className="checklist-text">{item.item}</div>
                    <div className="checklist-date">({item.date})</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* MUFI Manifesto */}
        <motion.div 
          className="manifesto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="manifesto-content">
            <blockquote>
              "We don't sell photos; we sell the data-heartbeat of real-world joy."
            </blockquote>
            <cite>— MUFI Manifesto</cite>
          </div>
          
          <div className="manifesto-cta">
            <motion.button 
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TrendingUp size={20} />
              투자 제안서 다운로드
            </motion.button>
            
            <motion.button 
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users size={20} />
              팀 미팅 요청
            </motion.button>
          </div>
        </motion.div>

        {/* Contact & Social */}
        <motion.div 
          className="contact-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="contact-info">
            <h4>Contact MUFI</h4>
            <div className="contact-details">
              <span>📧 invest@mufi.kr</span>
              <span>📱 +82-10-XXXX-XXXX</span>
              <span>🏢 서울 강남구 테헤란로 xxx</span>
            </div>
          </div>
          
          <div className="social-links">
            <h4>Follow Us</h4>
            <div className="social-buttons">
              <button className="social-btn">LinkedIn</button>
              <button className="social-btn">GitHub</button>
              <button className="social-btn">Medium</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team 