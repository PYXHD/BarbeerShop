import React from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Accueil = () => {
    return (
        <>
            <Header />
            <main className='sharedMain accueil'>
                <section className='sharedIntro accueil_intro'>
                    <div className='sharedIntro_container'>
                        <h1 className='shared-h1'>Un barber ? Un bar à bières ? <br /> Les deux !</h1>
                        <img
                            src={`${process.env.PUBLIC_URL}/img/logo_barbeershop.svg`}
                            alt="Logo BarbeerShop"
                        />
                    </div>
                </section>

                <section className='sharedSectionA'>
                    <div className='sharedSectionA_container accueil_pres'>
                        <div className="accueil_pres_firstpart">
                            <p className='textA'>Plongez dans l'univers unique de BarbeerShop, où la convivialité d'un bar à bières artisanales rencontre l'élégance intemporelle d'un barbier d'antan. Notre concept novateur fusionne l'art du rasage et de la coiffure masculine avec l'excitation effervescente d'un bar à bières contemporain. Imaginez un lieu où vous pouvez vous détendre avec votre boisson préférée tout en vous faisant chouchouter par nos barbers experts.</p>
                            <p className='textA'>Chez BarbeerShop, nous avons crée un espace chaleureux et accueillant où les hommes peuvent se retrouver, se détendre et se revitaliser.</p>
                            <button className='btnA'>Découvrir le blog</button>
                        </div>

                        <div className="accueil_pres_video">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=JRMajInKtAU"
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>
                </section>

                <section className='sharedSectionB'>
                    <div className='sharedSectionB_container accueil_descr'>
                        <div className='accueil_descr_subcontainer'>
                            <img
                                src={`${process.env.PUBLIC_URL}/img/barber_link.svg`}
                                alt="Logo Barber"
                            />
                            <h2 className='shared-h2'>Barber</h2>
                            <p className='textB'>Dans notre coin Barber, l’élégance masculine prend vie. Nos professionnels dévoués mettent leur expertise au service de votre style personnel. Dans cet espace intime et sophistiqué, chaque coupe et rasage devient une œuvre d’art, sculptée selon vos préférences. Découvrez l’alliance parfaite entre tradition et modernité.
                            </p>
                            <NavLink to='/barbier'>
                                <button className='btnA'>Nos prestations</button>
                            </NavLink>
                        </div>
                        <div className='accueil_descr_subcontainer'>
                            <img
                                src={`${process.env.PUBLIC_URL}/img/biere_link.svg`}
                                alt="Logo Bar à bière"
                            />
                            <h2 className='shared-h2'>Bar à bières</h2>
                            <p className='textB'>Notre bar à bière propose uniquement des bières artisanales locales. Venez goûter l’authenticité de notre région dans une ambiance conviviale. Venez partager un moment entre amis autour d’un verre de nos bières sélectionnées avec soin. Bienvenue dans notre univers brassé avec amour et passion !
                            </p>
                            <NavLink to='/bar_a_biere'>
                                <button className='btnA'>Notre carte</button>
                            </NavLink>
                        </div>
                    </div>
                </section>

                <section className='accueil_location'>
                    <p className='textC'>
                        Nous vous accueillons du lundi au vendredi, de 10h à 23h et le samedi de 10h à minuit.
                        Rejoingez-nous dans le Vieux-Lyon, au 3 rue du Boeuf.
                        <br />
                        Vous pouvez également nous joindre depuis la page Contact pour de plus amples informations.
                    </p>
                </section>

                <section className="sharedSectionA">
                    <div className="sharedSectionA_container accueil_team">
                        <h2 className='shared-h2'>Notre équipe à votre service</h2>
                        <div className="accueil_team_container">
                            <div className="accueil_team_teammate">
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/team_thierry.png`}
                                    alt="Thierry, Gérant"
                                />
                                <p className='textA'>Thierry, Gérant</p>
                            </div>
                            <div className="accueil_team_teammate">
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/team_melodie.png`}
                                    alt="Mélodie, serveuse"
                                />
                                <p className='textA'>Mélodie, serveuse</p>
                            </div>
                            <div className="accueil_team_teammate">
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/team_anne.png`}
                                    alt="Anne, Barmaid"
                                />
                                <p className='textA'>Anne, Barmaid</p>
                            </div>
                            <div className="accueil_team_teammate">
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/team_eric.png`}
                                    alt="Eric, Barber"
                                />
                                <p className='textA'>Eric, Barber</p>
                            </div>
                            <div className="accueil_team_teammate">
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/team_lionel.png`}
                                    alt="Lionel, Barber"
                                />
                                <p className='textA'>Lionel, Barber</p>
                            </div>
                            <div className="accueil_team_teammate">
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/team_aime.png`}
                                    alt="Aimé, Barber"
                                />
                                <p className='textA'>Aimé, Barber</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='sharedSectionB'>
                    <div className="sharedSectionB_container accueil_store">
                        <h2 className='shared-h2'>Une boutique unique en France</h2>
                        <div className='accueil_store_container'>
                            <p className='textB'>
                                BarbeerShop propose également à la vente des produits de soins ayurvédiques pour barbe et cheveux. Exclusivement en vente sur notre site, nos produits sont en provenance directe d’Inde. Nous vous garantissons la meilleure qualité, à des prix raisonnables.
                            </p>
                            <img
                                src={`${process.env.PUBLIC_URL}/img/gamme_produits.jpg`}
                                alt="" />
                        </div>
                        <NavLink to="/boutique">
                            <button className='btnA'>Découvrir notre boutique</button>
                        </NavLink>
                    </div>
                </section>
            </main >
            <Footer />
        </>
    );
};

export default Accueil;