import React from 'react'
import Product from '@/components/Product'

const Favourite = () => {
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
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </section>
    </main>
    )
}

export default Favourite