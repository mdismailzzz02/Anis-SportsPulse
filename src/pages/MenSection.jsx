import React from 'react';

function MenSection() {
  return (
    <div className="page-content category-page">
      <h2>Men's Collection</h2>
      <p className="category-subtitle">Gear up with maximum performance and style.</p>
      
      <div className="products-grid">
        <div className="product-card">
          <img src="/men1.jpg" alt="Men's Basketball Shoes" className="product-image" />
          <div className="product-info">
            <div className="product-title">Court Apex High-Tops</div>
            <div className="product-price">$145.00</div>
          </div>
        </div>
        
        <div className="product-card">
          <img src="/men2.jpg" alt="Men's Athletic Shorts" className="product-image" />
          <div className="product-info">
            <div className="product-title">ProTrain Elite Shorts</div>
            <div className="product-price">$55.00</div>
          </div>
        </div>
        
        <div className="product-card">
          <img src="/men3.jpg" alt="Men's Gym Gear" className="product-image" />
          <div className="product-info">
            <div className="product-title">Apex Compression Tee</div>
            <div className="product-price">$65.00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenSection;
