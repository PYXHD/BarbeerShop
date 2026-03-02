import React from 'react';
import Header from '../components/Header';
import ReservationForm from '../components/ReservationForm';
import Footer from '../components/Footer';

const Barbier = () => {
    return (
        <>
            <Header />
            <main className='sharedMain barbier'>
                <section className="sharedIntro barbier_intro">
                    <div className="sharedIntro_container">
                        <h1 className='shared-h1'>Le meilleur pour votre barbe</h1>
                    </div>
                </section>

                <section className="sharedSectionA">
                    <div className="sharedSectionA_container barbier_pres">
                        <p className='textA'>Vous cherchez un barber expert à Lyon ?</p>
                        <p className='textA'>BarbeerShop vous accueille avec chaleur dans un environnement dédié aux soins capillaires masculins. Nos barbiers experts sont là pour transformer votre apparence. Nous comprenons l'importance de votre style personnel, c'est pourquoi nous prenons le temps de comprendre vos préférences. Que vous recherchiez une coupe classique ou une transformation audacieuse, nous vous guiderons à chaque étape.</p>
                        <p className='textA'>Au-delà de notre expertise, nous offrons une atmosphère relaxante. Notre salon est conçu pour votre confort, afin que chaque visite soit agréable. Nous offrons une gamme complète de services, de la coupe de cheveux à la taille de barbe précise. Chez BarbeerShop, chaque détail compte, car nous cryons que chaque homme mérite de se sentir confiant et bien entretenu.</p>
                        <p className='textA'>Nous sommes passionnés par notre métier et sommes constamment formés aux dernières tendances. En nous choisissant, vous optez pour un service sur mesure, adapté à vos besoins individuels. Venez découvrir nos prestations exceptionnelles. Votre nouvelle allure vous attend. Venez nous rendre visite et laissez nos barbiers professionnels vous aider à devenir la meilleure version de vous-même.</p>
                    </div>
                </section>

                <section className='sharedSectionB'>
                    <div className="sharedSectionB_container barbier_services">
                        <h2 className="shared-h2">Nos prestations</h2>
                        <div className="barbier_services_container">
                            <div className="categorie textC">Barbe</div>
                            <p className="textB">
                                Entretien rapide - 12,00€
                            </p>
                            <p className="textB">
                                Entretien complet - 25,00€
                            </p>
                        </div>
                        <div className="barbier_services_container">
                            <div className="categorie textC">Coiffure</div>
                            <p className="textB">
                                Entretien rapide - 15,00€
                            </p>
                            <p className="textB">
                                Coupe et coiffage - 25,00€
                            </p>
                        </div>

                        <div className="barbier_services_container">
                            <div className="categorie textC">Formules (rendez-vous obligatoires)</div>
                            <p className="textB">
                                Formule "Barber One" - 20,00€ <br />
                                <i>coiffure entretien rapide + barbe entretien rapide</i>
                            </p>
                            <p className="textB">
                                Formule "Gentleman" - 40,00€ <br />
                                <i>coupe cheveux + barbe entretien ou rasage complet</i>
                            </p>
                            <p className="textB">
                                Formule "Ultimate Barbe" - 50,00€ <br />
                                <i>coupe cheveux + barbe entretien ou rasage complet + massage crânien</i>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="sharedSectionA">
                    <ReservationForm />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Barbier;