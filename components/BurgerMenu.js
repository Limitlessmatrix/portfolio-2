import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            <div className="menu-icon" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {isOpen && (
                <div className="menu-links">
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" onClick={toggleMenu}>About Me</Link>
                    <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contact Me</Link>
                    {/* Add more links as needed */}
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
