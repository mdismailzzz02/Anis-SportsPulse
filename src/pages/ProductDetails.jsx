import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="product-details-page error-page">
        <h2>Product Not Found</h2>
        <Link to="/" className="btn-primary" style={{ display: 'inline-block', marginTop: '20px', width: 'auto' }}>Return Home</Link>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <Link to="/" className="back-link">← Back to Shop</Link>
      <div className="product-details-grid">
        <div className={`product-image-container ${product.type}`}>
          <img src={product.image} alt={product.name} className="product-image-large" />
        </div>
        <div className="product-details-info">
          <div className="category-label">{product.category}</div>
          <h1 className="product-headline">{product.name}</h1>
          <div className="product-price-large">${product.price.toFixed(2)}</div>
          
          <p className="product-description">{product.description}</p>
          
          <div className="product-features">
            <h3>Key Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <button className="btn-primary add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
