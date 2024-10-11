import './Navbar.scss'
import './Navbar.scss'; 
import React from 'react';
import Logo from '../../assets/logo.png'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <h2>Kaizen Assignment</h2>
    </nav>
  )
}

// Wrap the component with React.memo
export default React.memo(Navbar);
