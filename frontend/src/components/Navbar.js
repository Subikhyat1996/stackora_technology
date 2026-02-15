import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-content">
                    <Link to="/" className="logo">Stackora</Link>
                    <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link to="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
                        <Link to="/contact" className="btn-primary" onClick={() => setIsOpen(false)}>
                            Start Your Project
                        </Link>
                    </div>
                    <button 
                        className="mobile-menu-btn" 
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
