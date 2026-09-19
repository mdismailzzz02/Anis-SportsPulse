import React, { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import GiftHamper from './GiftHamper';

function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">SportPulse</div>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
          <NavLink to="/women" className={({ isActive }) => isActive ? "active-link" : ""}>WomenSection</NavLink>
          <NavLink to="/men" className={({ isActive }) => isActive ? "active-link" : ""}>MenSection</NavLink>
          <NavLink to="/register" className={({ isActive }) => isActive ? "active-link" : ""}>Register</NavLink>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <GiftHamper />
        </div>
      </nav>

      <div className="subheader">
        SportPulse Store
      </div>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
