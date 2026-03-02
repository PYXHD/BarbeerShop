import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="socialmedias">
                <div className="socialmedias_container">
                    <div className='socialmedias_title'>Retrouvez-nous sur les réseaux</div>
                    <div className='socialmedias_icons'>
                        <a
                            href="https://www.facebook.com/Barbeershop.vp/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                src={`${process.env.PUBLIC_URL}/img/icone_facebook.svg`}
                                alt="Logo facebook"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/barbeershop.vp/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                src={`${process.env.PUBLIC_URL}/img/icone_insta.svg`}
                                alt="Logo facebook"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCATcE8xFP4UBGlHDUjPKejg"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                                src={`${process.env.PUBLIC_URL}/img/icone_youtube.svg`}
                                alt="Logo facebook"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="subfooter_container">
                    <div className="newsletter">
                        <p className='newsletter_text'>Pour ne rien rater, abonnez-vous à notre newsletter !</p>
                        <label htmlFor="Email">Adresse mail *</label>
                        <input type="email" name="Email" id="" />
                        <button>Je m'abonne</button>
                        <p className='newsletter_infos'>* Nous ne spammons pas ! Consultez notre <span> politique de confidentialité </span>pour plus d'informations</p>
                    </div>
                    <div className='legals'>
                        <div className='legals_options'>Mentions légales</div>
                        <div className='legals_options'>CGU</div>
                        <div className='legals_options'>Politique de confidentialité</div>
                        <div className='legals_copyright'>Copyright © 2023 Barbeershop</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;