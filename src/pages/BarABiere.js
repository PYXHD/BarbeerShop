import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const BarABiere = () => {
    return (
        <>
            <Header />
            <main className='sharedMain beer'>
                <section className="sharedIntro beer_intro">
                    <div className="sharedIntro_container">
                        <h1 className="shared-h1">
                            Des bières issues de brasseries locales
                        </h1>
                    </div>
                </section>

                <section className="sharedSectionA">
                    <div className="sharedSectionA_container beer_pres">
                        <p className='textA'>
                            Dans notre bar à bière, nous accordons une importance particulière à la qualité de nos boissons. C'est pourquoi nous proposons uniquement des bières artisanales soigneusement sélectionnées, provenant de brasseries locales renommées.
                        </p>
                        <p className='textA'>Notre personnel qualifié est à votre dispositionafin de vivre une expérience inoubliable au sein de notre bar à bière. N'hésitez pas à solliciter leurs conseils avisés pour vous guider dans votre choix parmi notre large sélection de bières. <br />
                            Chez BarbeerShop, nous nous engageons à vous offrir le meilleur de l'univers des bières artisanales locales
                        </p>
                    </div>
                </section>

                <section className='sharedSectionB'>
                    <div className="sharedSectionB_container beer_services">
                        <h2 className="shared-h2">Découvrez notre carte</h2>
                        <div className="beer_services_container">
                            <NavLink to="/bar_a_biere/brasserie_montchat">
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/logo_montchat.jpg`}
                                    alt=""
                                />
                            </NavLink>
                            <NavLink to="/bar_a_biere/brasserie_georges">
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/logo_georges.jpg`}
                                    alt=""
                                />
                            </NavLink>
                            <NavLink to="/bar_a_biere/la_canute">
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/logo_canute.jpg`}
                                    alt=""
                                />
                            </NavLink>
                            <NavLink to="/bar_a_biere/ninkasi">
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/logo_ninkasi.jpg`}
                                    alt=""
                                />
                            </NavLink>
                            <NavLink to="/bar_a_biere/softs">
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/logo_softs.jpg`}
                                    alt=""
                                />
                            </NavLink>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default BarABiere;