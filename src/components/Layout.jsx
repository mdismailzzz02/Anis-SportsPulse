import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import GiftHamper from './GiftHamper';
import ShapeGrid from './ShapeGrid';
import GooeyNav from './GooeyNav';
import WelcomeModal from './WelcomeModal';

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "Developer", href: "/developer" },
  { label: "Register", href: "/register" }
];

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
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <ShapeGrid 
          speed={0.5} 
          squareSize={50}
          direction='diagonal'
          borderColor={isDarkMode ? 'rgba(248, 249, 250, 0.05)' : 'rgba(10, 46, 22, 0.05)'}
          hoverFillColor={isDarkMode ? 'rgba(229, 43, 32, 0.2)' : 'rgba(229, 43, 32, 0.2)'}
          shape='hexagon'
          hoverTrailAmount={5}
        />
      </div>

      <header className="navbar">
        <div className="nav-brand">SportPulse</div>
        <div className="nav-links">
          <GooeyNav items={navItems} />
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <GiftHamper />
        </div>
      </header>

      <div className="subheader">
        SportPulse Store
      </div>

      <div className="container">
        <Outlet />
      </div>
      <WelcomeModal />
    </>
  );
}

export default Layout;
