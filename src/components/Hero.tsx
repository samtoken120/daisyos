import type { FC } from 'react';
import './Hero.css';

const Hero: FC = () => {

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="title">Cleo The Code Auditor</h1>
        
        <div className="cta-group">
          {/* Be With Me Button */}
          <button 
            className="tech-btn primary-tech"
            onClick={() => window.open('https://www.elizacloud.ai/dashboard/chat?characterId=a0d09316-68f8-4cb7-8078-e6717a469a18', '_blank')}
          >
            <div className="btn-content">
              <span>BE WITH ME</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
          </button>

          {/* Twitter/X Button */}
          <button 
            className="tech-btn twitter-tech"
            onClick={() => window.open('https://x.com/ai16zCleoOs', '_blank')}
          >
            <div className="btn-content">
              <span>FOLLOW ON X</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
          </button>
          
          {/* Contract Address Box */}
          <div className="tech-box contract-box">
             <div className="contract-label">
                <span className="dot">•</span> CONTRACT ADDRESS
             </div>
             <div className="contract-value-row">
               <code className="contract-code">COMING SOON</code>
             </div>
          </div>

          {/* Enter Cleothe Button */}
          {/* <button className="tech-btn secondary-tech">
             <div className="btn-content">
              <span>ENTER CLEOTHE</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
