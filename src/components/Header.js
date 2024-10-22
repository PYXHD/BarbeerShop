import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <a href="Accueil">
                    <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="" />
                </a>
            </div>
            <ul className='nav'>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/barbier">
                    <li>Barbier</li>
                </NavLink>
                <NavLink to="/bar_a_biere">
                    <li>Bar à bière</li>
                </NavLink>
                <NavLink to="/boutique">
                    <li>Boutique</li>
                </NavLink>
                <NavLink to="/evenements">
                    <li>Evènements</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </header>
    );
};

export default Header;