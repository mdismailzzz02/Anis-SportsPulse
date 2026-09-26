import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-headline">
            <span className="stagger-1">OWN THE</span><br/>
            <span className="stagger-2">PITCH.</span>
          </h1>
          <p className="hero-subheadline stagger-3">Pro-level gear for serious players.</p>
          <Link to="/men" className="hero-cta stagger-4">SHOP THE COLLECTION ↗</Link>
        </div>
      </section>

      <section className="featured-section">
        <h2 className="section-title">FEATURED GEAR</h2>
        
        <div className="products-grid">
          {products.map(product => (
            <Link to={`/product/${product.id}`} className={`product-card ${product.type}`} key={product.id}>
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <div className="product-title">{product.name}</div>
                <div className="product-price">${product.price.toFixed(2)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
