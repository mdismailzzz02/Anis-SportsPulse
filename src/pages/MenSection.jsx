import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

function MenSection() {
  const menProducts = products.filter(p => p.category === 'men');

  return (
    <div className="page-content category-page">
      <h2>Men's Collection</h2>
      <p className="category-subtitle">Gear up with maximum performance and style.</p>
      
      <div className="products-grid">
        {menProducts.map(product => (
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
    </div>
  );
}

export default MenSection;
