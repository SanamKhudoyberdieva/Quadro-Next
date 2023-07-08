import React from 'react'
import Product from '@/components/Product'
import Image from 'next/image'

const Search = () => {
    return (
        <main>
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb es-breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Главная</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Поиск</li>
                </ol>
            </nav>
        </div>
        <section className="section-wrp">
            <div className="container">
                <div className="es-search-block">
                    <div className="input-group flex-nowrap es-search-group">
                        <input type="text" className="form-control es-search-input" placeholder="Поиск" aria-label="Username" aria-describedby="addon-wrapping" />
                        <div className="es-search-ic">
                            <Image src={require("../assets/img/ic_search_normal.svg")} alt="search" />
                        </div>
                    </div>
                    <div className="es-search-result d-none">
                        <Image src={require("../assets/img/ic_logo.svg")} alt="search" />
                        <div className="noresult">Пока ничего нет</div>
                        <div className="start-search">Начните поиск товаров</div>
                    </div>
                </div>
            </div>
        </section>
        <section className="search-products section-wrp">
            <div className="container">
                <h2 className="section-title">Кое-что нашли</h2>
                <div className="es-products-list">
                    <Product />
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

export default Search