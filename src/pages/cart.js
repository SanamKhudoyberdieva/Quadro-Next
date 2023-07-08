import React from 'react'
import Image from 'next/image'

const Cart = () => {
    return (
        <main>
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb es-breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Главная</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Корзина</li>
                </ol>
            </nav>
            <h1 className="page-title">Корзина</h1>
        </div>
        <section className="es-cart-view section-wrp">
            <div className="es-cart-header">
                <div className="container">
                    <div className="es-ch-block">
                        <div className="es-ch-product">Товар</div>
                        <div className="es-ch-price">Цена</div>
                        <div className="es-ch-quantity">Количество</div>
                        <div className="es-ch-total">Итого</div>
                        <div className="es-ch-action">Удалить</div>
                    </div>
                </div>
            </div>
            <div className="es-cart-products">
                <div className="container">
                    <div id="cart-content">
                        <div className="es-ch-block es-cart-item">
                            <div className="es-ch-product">
                                <div className="es-ch-img">
                                    <Image src={require("../assets/img/cart_1.jpg")} className="lazy img-fluid" alt='' />
                                </div>
                                <div className="es-ch-detail">
                                    <div className="es-ch-title">Медальоны с карт крокетами</div>
                                </div>
                            </div>
                            <div className="es-ch-price">250 000 сум</div>
                            <div className="es-ch-quantity">
                                <div className="es-product-controls">
                                    <button className="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                                    <span className="es-product-quantity">1</span>
                                    <button className="btn btn-counter btn-minus" data-action="plus-quantity">+</button>
                                </div>
                            </div>
                            <div className="es-ch-total">250 000 сум</div>
                            <div className="es-ch-action">
                                <button className="btn btn-icon" type="button" data-action="remove-item">
                                    <Image src={require("../assets//img/ic_cart_btn.svg")} alt=''/>
                                </button>
                            </div>
                        </div>
                        <div className="es-ch-block es-cart-item">
                            <div className="es-ch-product">
                                <div className="es-ch-img">
                                    <Image src={require("../assets/img/cart_2.jpg")} className="lazy img-fluid" alt=''/>
                                </div>
                                <div className="es-ch-detail">
                                    <div className="es-ch-title">Хенд ролл с угрём</div>
                                </div>
                            </div>
                            <div className="es-ch-price">250 000 сум</div>
                            <div className="es-ch-quantity">
                                <div className="es-product-controls">
                                    <button className="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                                    <span className="es-product-quantity">1</span>
                                    <button className="btn btn-counter btn-minus" data-action="plus-quantity">+</button>
                                </div>
                            </div>
                            <div className="es-ch-total">250 000 сум</div>
                            <div className="es-ch-action">
                                <button className="btn btn-icon" type="button" data-action="remove-item">
                                    <Image src={require("../assets/img/ic_cart_btn.svg")} alt=''/>
                                </button>
                            </div>
                        </div>
                        <div className="es-ch-block es-cart-item">
                            <div className="es-ch-product">
                                <div className="es-ch-img">
                                    <Image src={require("../assets/img/cart_3.jpg")} className="lazy img-fluid" alt=''/>
                                </div>
                                <div className="es-ch-detail">
                                    <div className="es-ch-title">Десерт Карота</div>
                                </div>
                            </div>
                            <div className="es-ch-price">250 000 сум</div>
                            <div className="es-ch-quantity">
                                <div className="es-product-controls">
                                    <button className="btn btn-counter btn-minus" data-action="minus-quantity">-</button>
                                    <span className="es-product-quantity">15</span>
                                    <button className="btn btn-counter btn-minus" data-action="plus-quantity">+</button>
                                </div>
                            </div>
                            <div className="es-ch-total">250 000 сум</div>
                            <div className="es-ch-action">
                                <button className="btn btn-icon" type="button" data-action="remove-item">
                                    <Image src={require("../assets/img/ic_cart_btn.svg")} alt=''/>
                                </button>
                            </div>
                        </div>
                        <div className="es-cart-footer">
                            <div className="es-cf-left">
                                <a href="/ru/menu" className="es-back-link">
                                    <Image src={require("../assets/img/ic_back.svg")} alt=''/> назад к покупкам
                                </a>
                            </div>
                            <div className="es-cf-right">
                                <div className="es-cart-total">
                                    <div className="es-ct-label">Итого:</div>
                                    <div className="es-ct-value">1 000 000 сум</div>
                                </div>
                                <a className="btn btn-primary btn-lg w-100" href="#" data-target="#authModal" data-toggle="modal">Оформить заказ</a>          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Cart