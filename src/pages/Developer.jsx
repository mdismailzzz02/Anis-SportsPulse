import React from 'react';

function Developer() {
  return (
    <div className="page-content developer-page">
      <h2>Developer Profile</h2>
      <p className="category-subtitle">Meet the student behind the code.</p>
      
      <div className="developer-card">
        <div className="dev-image-container">
          <img src="/Aniketh.png" alt="Developer Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="dev-info">
          <div className="dev-role">Lead Developer & Student</div>
          <h1 className="dev-name">Aniketh</h1>
          <p className="dev-bio">
            Hi, I'm Aniketh! I'm a 7th grader living in the USA. I built this dynamic e-commerce platform using React, modern CSS, and a custom sports aesthetic. When I'm not coding, you can find me riding my ebike, playing sports like soccer on the pitch, and eating great food.
          </p>
          
          <div className="dev-skills">
            <h3>Technical Skills & Hobbies</h3>
            <div className="skills-grid">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Web Design</span>
              <span className="skill-tag">Soccer ⚽</span>
              <span className="skill-tag">E-Biking 🚴‍♂️</span>
              <span className="skill-tag">Foodie 🍕</span>
            </div>
          </div>
          
          <div className="dev-contact">
            <h3>Profile Info</h3>
            <ul>
              <li><strong>Grade:</strong> 7th Grade</li>
              <li><strong>Location:</strong> USA</li>
              <li><strong>Passions:</strong> Coding, E-Bikes, Soccer, and Food</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
