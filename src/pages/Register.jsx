import React from 'react';

function Register() {
  return (
    <div className="page-content register-page">
      <div className="register-container">
        <h2>Create an Account</h2>
        <p>Join SportPulse for exclusive gear and early access.</p>
        
        <form className="register-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Enter your full name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" required />
          </div>
          
          <button type="submit" className="btn-primary">Register Now</button>
        </form>
        
        <div className="register-footer">
          Already have an account? <a href="#">Log in here</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
