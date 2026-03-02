import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <header className='header'>
            <div className="header_container">
                <img
                    className='header_logo'
                    src={`${process.env.PUBLIC_URL}/img/logo_entete.svg`}
                    alt=""
                />

                <div className='header_burger' onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`header_links ${isOpen ? 'open' : ''}`}>
                    <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : 'unactive')}>
                        <li onClick={toggleMenu}>Accueil</li>
                    </NavLink>
                    <NavLink to="/barbier" className={({ isActive }) => (isActive ? 'active' : 'unactive')}>
                        <li onClick={toggleMenu}>Barbier</li>
                    </NavLink>
                    <NavLink to="/bar_a_biere" className={({ isActive }) => (isActive ? 'active' : 'unactive')}>
                        <li onClick={toggleMenu}>Bar à bière</li>
                    </NavLink>
                    <NavLink to="/boutique" className={({ isActive }) => (isActive ? 'active' : 'unactive')}>
                        <li onClick={toggleMenu}>Boutique</li>
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'unactive')}>
                        <li onClick={toggleMenu}>Contact</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;