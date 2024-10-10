// src/components/Navbar.tsx
import { Link } from 'react-router-dom'
import './Navbar.scss'; 
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Kaizen Assignment</Link>
      </div>
    </nav>
  )
}

// Wrap the component with React.memo
export default React.memo(Navbar);
