import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Stackora Technologies</h3>
                        <p>Building digital products for modern businesses</p>
                    </div>
                    <div className="footer-links">
                        <Link to="/services">Services</Link>
                        <Link to="/careers">Careers</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className="footer-social">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Stackora Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
