import React from 'react';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to SportPulse</h1>
          <p>Your ultimate destination for the latest sports gear, news, analysis, and insights.</p>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Products</h2>
        
        <div className="products-grid">
          <div className="product-card">
            <img src="/product1.jpg" alt="Athletic FC Red Jersey" className="product-image" />
            <div className="product-info">
              <div className="product-title">Athletic FC Pro Jersey</div>
              <div className="product-price">$89.99</div>
            </div>
          </div>
          
          <div className="product-card">
            <img src="/product2.jpg" alt="Black Running Shoes" className="product-image" />
            <div className="product-info">
              <div className="product-title">AeroGlide Running Shoes</div>
              <div className="product-price">$129.50</div>
            </div>
          </div>
          
          <div className="product-card">
            <img src="/product3.jpg" alt="Men's Training Jacket" className="product-image" />
            <div className="product-info">
              <div className="product-title">Terrex Lightweight Jacket</div>
              <div className="product-price">$105.00</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
