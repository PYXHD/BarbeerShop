import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import productData from '../../data/boutique/products.json';

const HuileCroissance = () => {
    const product = productData.products.find(p => p.name === "Huile de croissance");

    if (!product) {
        return (
            <>
                <main className="sharedMain">
                    <h1 className='shared-h1'>Produit introuvable !</h1>
                </main>
            </>
        )

    }

    return (
        <>
            <Header />
            <main className='productMain'>
                <section className="productIntro">
                    <img
                        className='productImg'
                        src={`${process.env.PUBLIC_URL}${product.image}`}
                        alt={product.name}
                    />
                    <h1 className='shared-h1'>{product.name}</h1>
                </section>

                <section className="productDescription">
                    <div className='productContainer'>
                        <h2 className='shared-h2'>Description</h2>
                        {product.description.map((data, dataIndex) => (
                            <p
                                className='product-p'
                                key={dataIndex}>
                                {data}
                            </p>
                        ))}
                    </div>

                    <div className='productContainer'>
                        <h2 className="shared-h2">La marque BarbeerShop</h2>
                        <p className="product-p">
                            BarbeerShop : l'essence de l'élégance masculine, pour les hommes modernes qui savent apprécier le luxe et l'authenticité. Découvrez une gamme exclusive inspirée par l'Ayurveda, alliant tradition millénaire et qualité supérieure. Révélez votre charisme naturel et votre confiance avec des soins qui reflètent votre style de vie.
                        </p>
                    </div>

                    <div className='productContainer'>
                        {product.ingredients && (
                            <>
                                <h2 className="shared-h2">Ingrédients</h2>
                                <p className="product-p">{product.ingredients}</p>
                            </>
                        )}
                    </div>

                    <div className='productPriceContainer'>
                        {product.price.map((price, priceIndex) => (
                            <div className='productPrice'>
                                <div key={priceIndex}>
                                    {price}
                                </div>
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/addBtn.svg`}
                                    alt="addBtn"
                                />
                            </div>
                        ))}

                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default HuileCroissance;