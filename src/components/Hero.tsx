import { motion } from 'framer-motion'
import { Camera, TrendingUp, Globe, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            <span className="highlight">MUFI</span>
            <br />
            순간의 감정을 캡처하는
            <br />
            <span className="gradient-text">글로벌 데이터 그리드</span>
          </h1>
          
          <p className="hero-subtitle">
            오프라인 이벤트에서 실시간 AI 데이터 처리까지
            <br />
            전 세계 브랜드가 구독하는 리얼월드 데이터 파이프라인
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">₩60M</div>
              <div className="stat-label">Target MRR</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">55%</div>
              <div className="stat-label">Growth Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$54B</div>
              <div className="stat-label">Global TAM</div>
            </div>
          </div>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              <TrendingUp size={20} />
              투자 제안서 보기
            </button>
            <button className="btn-secondary">
              <Globe size={20} />
              글로벌 확장 계획
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="floating-card">
            <div className="card-header">
              <Camera size={24} />
              <span>Real-time Event Analytics</span>
            </div>
            <div className="card-content">
              <div className="metric">
                <span className="metric-label">Active Events</span>
                <span className="metric-value">1,247</span>
              </div>
              <div className="metric">
                <span className="metric-label">Photos Captured</span>
                <span className="metric-value">89.2K</span>
              </div>
              <div className="metric">
                <span className="metric-label">Revenue Today</span>
                <span className="metric-value">₩4.8M</span>
              </div>
            </div>
          </div>
          
          <div className="floating-icons">
            <motion.div 
              className="floating-icon"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Camera />
            </motion.div>
            <motion.div 
              className="floating-icon"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              <Zap />
            </motion.div>
            <motion.div 
              className="floating-icon"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <Globe />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="hero-quote">
        <blockquote>
          "We don't sell photos; we sell the data-heartbeat of real-world joy."
        </blockquote>
        <cite>— MUFI Manifesto</cite>
      </div>
    </section>
  )
}

export default Hero 