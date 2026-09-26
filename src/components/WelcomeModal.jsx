import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleGoToProfile = () => {
    handleClose();
    navigate('/developer');
  };

  const handleContinueToStore = () => {
    handleClose();
    navigate('/');
  };

  if (!isOpen) return null;

  return (
    <div className="gift-modal-overlay">
      <div className="welcome-modal">
        <button className="close-btn" onClick={handleClose}>×</button>
        
        <h2 className="welcome-title">Welcome to SportPulse!</h2>
        <p className="welcome-subtitle">Built by Aniketh</p>
        
        <div className="welcome-card-content">
          <div className="welcome-image">
            <img src="/Aniketh.png" alt="Aniketh" />
          </div>
          <div className="welcome-info">
            <p>
              Hi, I'm Aniketh! I'm a 7th grader living in the USA. 
              I built this dynamic e-commerce platform from scratch. 
              Enjoy exploring the site!
            </p>
            <div className="welcome-actions">
              <button className="btn-primary" onClick={handleGoToProfile} style={{ padding: '10px', fontSize: '1.2rem', marginBottom: '10px' }}>
                View Full Profile
              </button>
              <button onClick={handleContinueToStore} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', textDecoration: 'underline', cursor: 'pointer' }}>
                Continue to Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeModal;
