import React, { useState, useEffect } from 'react';

function GiftHamper() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [discount, setDiscount] = useState(null);
  const [currentNumber, setCurrentNumber] = useState(0);

  const possibleDiscounts = [5, 10, 15, 20, 25, 30, 35];

  const handleSpin = () => {
    if (isSpinning || discount) return;
    
    setIsSpinning(true);
    let spins = 0;
    const maxSpins = 20;
    const interval = setInterval(() => {
      // Rapidly change the number to simulate spinning
      const randomIdx = Math.floor(Math.random() * possibleDiscounts.length);
      setCurrentNumber(possibleDiscounts[randomIdx]);
      spins++;
      
      if (spins >= maxSpins) {
        clearInterval(interval);
        // Final result
        const finalIdx = Math.floor(Math.random() * possibleDiscounts.length);
        const finalDiscount = possibleDiscounts[finalIdx];
        setCurrentNumber(finalDiscount);
        setDiscount(finalDiscount);
        setIsSpinning(false);
      }
    }, 100);
  };

  const resetSpinner = () => {
    setIsOpen(false);
    // Optionally reset the state if they close it, or keep it if they won
    // Let's keep the discount if they won, so they can see it when they reopen
  };

  return (
    <div className="gift-hamper-container">
      <button 
        className="gift-btn" 
        onClick={() => setIsOpen(true)}
        title="Click for a surprise discount!"
      >
        🎁
      </button>

      {isOpen && (
        <div className="gift-modal-overlay" onClick={resetSpinner}>
          <div className="gift-modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={resetSpinner}>&times;</button>
            <h2>Win a Discount!</h2>
            
            {!discount ? (
              <>
                <p>Spin the wheel to get up to 35% off your next purchase.</p>
                <div className={`spinner-display ${isSpinning ? 'spinning' : ''}`}>
                  {isSpinning ? `${currentNumber}%` : '??%'}
                </div>
                <button 
                  className="btn-primary spin-btn" 
                  onClick={handleSpin}
                  disabled={isSpinning}
                >
                  {isSpinning ? 'Spinning...' : 'Spin Now!'}
                </button>
              </>
            ) : (
              <div className="discount-result">
                <h3>Congratulations! 🎉</h3>
                <div className="spinner-display won">
                  {discount}% OFF
                </div>
                <p>Use code <strong>PULSE{discount}</strong> at checkout.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default GiftHamper;
