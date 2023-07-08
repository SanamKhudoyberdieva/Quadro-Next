import React from 'react'
import Image from 'next/image'

const OrderComplete = () => {
    return (
        <main>
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb es-breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Главная</a></li>
                    <li className="breadcrumb-item active" aria-current="page">404</li>
                </ol>
            </nav>
        </div>
        <section className="order-complete section-wrp">
            <div className="container">
                <div className="order-complete-wrp">
                    <div className="es-order-complete">
                        <div className="es-inner-wrp">
                            <Image className="es-order-complete-logo" src={require("../assets/img/ic_logo.svg")} alt="logo" />
                            <h1 className="es-order-complete-title">Ваш заказ успешно принят!</h1>
                            <div className="es-order-number">
                                Номер заказа: <a href="#">548648</a>
                            </div>
                            <p className="es-order-complete-desc">Оператор свяжется с вами для консультацииx в ближайшее время</p>
                            <div className="btn-container">
                                <a href="#" type="button" className="btn es-btn-dark btn-sm">К оплате</a>
                            </div>
                            <div className="btn-container">
                                <a href="#" type="button" className="btn btn-cart btn-sm">На главную</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default OrderComplete