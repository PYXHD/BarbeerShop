import React from 'react';

const Header = () => {
    return (
        <header>
            <div className='Logo'>
                <a href="Accueil">
                    <img src="" alt="" />
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="Barbier">Barbier</a></li>
                    <li><a href="BarBiere">Bar à bière</a></li>
                    <li><a href="Boutique">Boutique</a></li>
                    <li><a href="Evenements">Evènements</a></li>
                    <li><a href="Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;