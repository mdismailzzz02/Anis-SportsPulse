import React from 'react';

function WomenSection() {
  return (
    <div className="page-content category-page">
      <h2>Women's Collection</h2>
      <p className="category-subtitle">Empower your workout with our latest women's athletic gear.</p>
      
      <div className="products-grid">
        <div className="product-card">
          <img src="/women1.jpg" alt="Women's Running Shoes" className="product-image" />
          <div className="product-info">
            <div className="product-title">CloudSprint Runner</div>
            <div className="product-price">$119.00</div>
          </div>
        </div>
        
        <div className="product-card">
          <img src="/women2.jpg" alt="Women's Leggings" className="product-image" />
          <div className="product-info">
            <div className="product-title">Aura Flex Leggings</div>
            <div className="product-price">$75.50</div>
          </div>
        </div>
        
        <div className="product-card">
          <img src="/women3.jpg" alt="Women's Sports Top" className="product-image" />
          <div className="product-info">
            <div className="product-title">Core Performance Set</div>
            <div className="product-price">$95.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WomenSection;
