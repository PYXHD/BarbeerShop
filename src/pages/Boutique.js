import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import productData from '../data/boutique/products.json';

const Boutique = () => {
    return (
        <>
            <Header />
            <main className='sharedMain boutique'>
                <section className="sharedIntro boutique_intro">
                    <div className="sharedIntro_container">
                        <h1 className="shared-h1">
                            Notre boutique
                        </h1>
                    </div>
                </section>

                <section className="sharedSectionA">
                    <div className="sharedSectionA_container boutique_pres">
                        <p className='textA'>
                            Bienvenue sur notre boutique dédiée à l'entretien de barbe pour homme!
                        </p>
                        <p className='textA'>Chez BarbeerShop, nous comprenons l'importance de prendre soin de votre barbe. Notre passion nous a conduit à sélectionner soigneusement les meilleurs produits pour vous aider à entretenir votre barbe avec style et facilité. Que vous soyez un barbu chevronné ou un débutant dans l'art de l'entretien, notre gamme complète de produits saura répondre à tous vos besoins.
                        </p>
                        <p className='textA'>Parce que chaque homme mérite une barbe bien entretenue, BarbeerShop met à votre disposition des articles de qualité supérieure qui rendront votre routine d'entretien plus simple et plus efficace que jamais. Découvrez nos produits dès maintenant et offrez à votre barbe l'attention qu'elle mérite. Parce qu'un homme bien entretenu est un homme confiant, commencez votre voyage vers une barbe parfaite avec nous.
                        </p>
                    </div>
                </section>

                <section className="sharedSectionB">
                    <div className="sharedSectionB_container boutique_products">
                        <h2 className="shared-h2">
                            En exclusivité chez BarbeerShop
                        </h2>

                        <div className="boutique_container">
                            {productData.products.map((product, index) => (
                                <div className="product" key={index}>
                                    <NavLink to={product.link}>
                                        <img
                                            className='product_img'
                                            src={`${process.env.PUBLIC_URL}${product.image}`}
                                            alt={product.name}
                                        />
                                    </NavLink>
                                    <div className="product_name">
                                        <h3 className="product_name_A">
                                            {product.name}
                                        </h3>
                                        <div className="product_name_B">
                                            {product.subtitle}
                                        </div>
                                    </div>

                                    {product.price.map((price, priceIndex) => (
                                        <div className="product_add" key={priceIndex}>
                                            <div className="product_add_price">
                                                {price}
                                            </div>
                                            <img
                                                src={`${process.env.PUBLIC_URL}/img/addBtn.svg`}
                                                alt="addBtn"
                                                className="product_add_btn"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Boutique;