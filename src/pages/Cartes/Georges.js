import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import beerData from '../../data/menu/beersGeorges.json'

const Georges = () => {
    return (
        <>
            <Header />
            <main className='sharedMain drinks'>
                <section className="sharedSectionB">
                    <div className="sharedSectionB_container drinks_intro">
                        <h1 className="shared-h1">{beerData.page.title}</h1>
                        <img
                            src={`${process.env.PUBLIC_URL}${beerData.page.image}`}
                            alt="Logo MontChat"
                        />
                    </div>
                </section>

                <section className="sharedSectionA">
                    <div className="sharedSectionA_container menu">
                        {beerData.beers.map((beer, index) => (
                            <div className='beer' key={index}>
                                <div className='beer_name'>{beer.name}</div>
                                <div className='beer_description'>{beer.description}</div>
                                {beer.prices.map((price, priceIndex) => (
                                    <div className='beer_container' key={priceIndex}>
                                        <div>{price.size}</div>
                                        <div>{price.price}</div>
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

export default Georges;