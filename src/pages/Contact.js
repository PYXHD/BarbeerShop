import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Merci pour votre message")
        event.target.reset();
    };

    return (
        <>
            <Header />
            <main className='contact'>
                <section className="contact_intro">
                    <h1 className='contact_intro_h1'>Contact</h1>
                    <img
                        className='contact_intro_logo'
                        src={`${process.env.PUBLIC_URL}/img/logo_barbeershop.svg`}
                        alt="Logo BarbeerShop"
                    />
                    <p className='contact_intro_p'>Ouvert du lundi au vendredi de 10h à 23h et le samedi de 10h à minuit. <br />
                        Fermé le dimanche.</p>
                    <div className="contact_intro_details">

                    </div>
                </section>

                <section className="contact_details">
                    <div className="contact_details_container">
                        <img
                            className="contact_details_img"
                            src={`${process.env.PUBLIC_URL}/img/icon_phone.svg`}
                            alt=""
                        />
                        <div className="contact_details_title">
                            Téléphone
                        </div>
                        <div className="contact-p">
                            04 12 34 56 78 <br />
                            06 98 76 54 32
                        </div>
                    </div>
                    <div className="contact_details_container">
                        <img
                            className="contact_details_img"
                            src={`${process.env.PUBLIC_URL}/img/icon_adresse.svg`}
                            alt=""
                        />
                        <div className="contact_details_title">
                            Adresse
                        </div>
                        <div className="contact-p">
                            3 rue du Boeuf <br />
                            69005 Lyon
                        </div>
                    </div>
                    <div className="contact_details_container">
                        <img
                            className="contact_details_img"
                            src={`${process.env.PUBLIC_URL}/img/icon_mail.svg`}
                            alt=""
                        />
                        <div className="contact_details_title">
                            E-mail
                        </div>
                        <div className="contact-p">
                            barbershop <br />
                            @outlook.fr
                        </div>
                    </div>
                </section>

                <section className="contact_map"></section>

                <section className="contact_form">
                    <div className="contact-p">
                        Vous pouvez également nous contacter via le formulaire ci-joint. Nous ferons tout notre possible afin de vous répondre dans les meilleurs délais.
                    </div>
                    <div className="contact_form_container">
                        <h2>Formulaire de contact</h2>

                        <form onSubmit={handleSubmit}>
                            <input
                                id='formName'
                                type="text"
                                placeholder='Nom'
                            />
                            <input
                                id='formEmail'
                                type="email"
                                placeholder='E-mail'
                            />
                            <input
                                id='formPhone'
                                type="tel"
                                placeholder='Téléphone'
                            />
                            <textarea
                                id='formMessage'
                                placeholder='Votre message'
                            >
                            </textarea>
                            <input
                                className='btnA'
                                id='formSubmit'
                                type="submit"
                                value="Envoyer"
                            />
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Contact;