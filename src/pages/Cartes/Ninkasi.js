import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import beerData from '../../data/menu/beersNinkasi.json';

const Ninkasi = () => {
    return (
        <>
            <Header />
            <main className='sharedMain drinks'>
                <section className="sharedSectionB">
                    <div className="sharedSectionB_container drinks_intro">
                        <h1 className="shared-h1">{beerData.page.title}</h1>
                        <img
                            src={`${process.env.PUBLIC_URL}${beerData.page.image}`}
                            alt="Logo Ninkasi"
                        />
                    </div>
                </section>

                <section className="sharedSectionA">
                    <div className="sharedSectionA_container menu">
                        {beerData.categories.map((cat, index) => (
                            <div className='beer' key={index}>
                                <h2 className='shared-h2 spec-h2'>{cat.name}</h2>
                                {cat.beers.map((beer, beerIndex) => (
                                    <div key={beerIndex}>
                                        <div className='beer_name'>{beer.name}</div>
                                        {beer.prices.map((price, priceIndex) => (
                                            <div key={priceIndex} className='beer_container'>
                                                <div>{price.size}</div>
                                                <div className="underline"></div>
                                                <div>{price.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                                <div className="beer_separator"></div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Ninkasi;
