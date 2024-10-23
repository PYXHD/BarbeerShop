import React from 'react';
import { NavLink } from 'react-router-dom';

// const Header = () => {
//     return (
//         <header>
//             <div className='logo'>
//                 <NavLink to="/">
//                     <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="" />
//                 </NavLink>
//             </div>
//             <ul className='nav'>
//                 <div className='nav_burger'>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div>
//                 <nav className="nav_links">
//                     <NavLink to="/barbier">
//                         <li>Barbier</li>
//                     </NavLink>
//                     <NavLink to="/bar_a_biere">
//                         <li>Bar à bière</li>
//                     </NavLink>
//                     <NavLink to="/boutique">
//                         <li>Boutique</li>
//                     </NavLink>
//                     <NavLink to="/evenements">
//                         <li>Evènements</li>
//                     </NavLink>
//                     <NavLink to="/contact">
//                         <li>Contact</li>
//                     </NavLink>
//                 </nav>
//             </ul>
//         </header>
//     );
// };

const Header = () => {
    return (
        <header className='header'>
            <img className='header_logo' src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="" />

            <div className='header_burger'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="header_links">
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