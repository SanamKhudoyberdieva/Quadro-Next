import React from 'react'
import Product from '@/components/Product'
import { useSelector } from 'react-redux';

const Favourite = () => {
    const favorites = useSelector((state) => state.favoritesReducer);
    const { products } = useSelector((state) => state.getDataReducer);

    let buildFavorites =[];

    favorites.forEach((x) => {
        let item = products.find((y) => y.id === x);
        buildFavorites.push(item);
    });
    return (
        <main>
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb es-breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Главная</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Избранное</li>
                </ol>
            </nav>
            <h1 className="page-title">Избранное</h1>
        </div>
        <section className="favourite section-wrp">
            <div className="container">
                <div className="es-products-list">
                    {buildFavorites.map((x, idx) => {
                        return(
                            <Product key={"favorite-product-index" + idx} product={x} />
                        );
                    })}
                </div>
            </div>
        </section>
    </main>
    )
}

export default Favourite;