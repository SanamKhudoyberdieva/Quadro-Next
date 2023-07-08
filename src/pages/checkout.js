import React from 'react'
import Image from 'next/image'

const Checkout = () => {
    return (
        <main>
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb es-breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Главная</a></li>
                    <li className="breadcrumb-item"><a href="#">Корзина</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Оформление предзаказа</li>
                </ol>
            </nav>
        </div>
        <section className="section-wrp">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="page-title">Оформление предзаказа</h1>
                        <form id="delivery-form" className="es-form" action="#">
                            <div className="row">
                                <div className="col-12">
                                    <div className="about-order">
                                        При оформлении предзаказа учитывается обслуживание - 20% <br /> Предоплата к заказу - 40%
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group es-form-group">
                                        <label className="control-label es-control-label" for="orderform-name">Имя</label>
                                        <input type="text" id="orderform-name" className="form-control es-form-control" name="OrderForm[name]" placeholder="Введите Имя" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group es-form-group">
                                        <label className="control-label es-control-label" for="orderform-surname">Фамилия</label>
                                        <input type="text" id="orderform-surname" className="form-control es-form-control" name="OrderForm[surname]" placeholder="Фамилия" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group es-form-group">
                                        <label className="control-label es-control-label" for="orderform-phone">Номер телефона</label>
                                        <input type="text" id="orderform-phone" className="form-control es-form-control" name="OrderForm[phone]" data-plugin="phone-mask" placeholder="Введите номер телефона" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group es-form-group">
                                        <label className="control-label es-control-label" for="orderform-quantity">Количество персон</label>
                                        <input type="number" id="orderform-quantity" className="form-control es-form-control" name="OrderForm[quantity]" placeholder="Количество персон" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group es-form-group">
                                        <label className="control-label es-control-label" for="orderform-date">Дата и время</label>
                                        <input type="date" id="orderform-date" className="form-control es-form-control" name="OrderForm[date]" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group es-form-group">
                                        <label className="control-label es-control-label" for="orderform-email">E-mail</label>
                                        <input type="text" id="orderform-email" className="form-control es-form-control" name="OrderForm[email]" placeholder="E-mail" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group es-form-group">
                                        <label className="control-label es-control-label">Выберите способ оплаты</label>
                                        <input type="hidden" name="OrderForm[payment]" value="" />
                                        <div id="orderform-payment" className="es-pv-checklist" role="radiogroup">
                                            <label className="radio-label radio-mr"><input type="radio" name="OrderForm[payment]" value="CASH" />
                                                Click</label>
                                            <label className="radio-label radio-mr"><input type="radio" name="OrderForm[payment]" value="PAYME" />
                                                Payme</label>
                                            <label className="radio-label radio-mr"><input type="radio" name="OrderForm[payment]" value="PAYME" />
                                                Visa</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group es-form-group">
                                        <label className="control-label es-control-label" for="orderform-comment">Комментарий к бронированию</label>
                                        <textarea id="orderform-comment" className="form-control es-form-control" name="OrderForm[comment]" rows="5" placeholder="До прихода гостей, подать салаты и холодные закуски"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="es-checkout-items">
                            <h4 className="es-tab-title">Ваш заказ</h4>
                            <div className="es-checkout-list">
                                <div className="es-checkout-item">
                                    <div className="es-checkout-img">
                                        <Image src={require("../assets/img/cart_1.jpg")} className="img-fluid" />
                                    </div>
                                    <div className="es-checkout-detail">
                                        <div className="es-cp-title">Медальоны с карт крокетами</div>
                                        <div className="es-product-calc">1 х 450 000 = 450 000 сум </div>
                                    </div>
                                </div>
                                <div className="es-checkout-item">
                                    <div className="es-checkout-img">
                                        <Image src={require("../assets/img/cart_2.jpg")} className="img-fluid" />
                                    </div>
                                    <div className="es-checkout-detail">
                                        <div className="es-cp-title">Хенд ролл с угрём</div>
                                        <div className="es-product-calc">1 х 450 000 = 450 000 сум </div>
                                    </div>
                                </div>
                                <div className="es-checkout-item">
                                    <div className="es-checkout-img">
                                        <Image src={require("../assets/img/cart_3.jpg")} className="img-fluid" />
                                    </div>
                                    <div className="es-checkout-detail">
                                        <div className="es-cp-title">Десерт Карота</div>
                                        <div className="es-product-calc">1 х 450 000 = 450 000 сум </div>
                                    </div>
                                </div>
                            </div>
                            <div className="es-checkout-footer">
                                <div className="es-checkout-row">
                                    <div className="es-cf-title">Обслуживание (20%):</div>
                                    <div className="es-cf-value"><span>50 000</span> сум</div>
                                </div>
                                <div className="es-checkout-row">
                                    <div className="es-cf-title">Предоплата (40%):</div>
                                    <div className="es-cf-value"><span>220 000</span> сум</div>
                                </div>
                                <div className="es-checkout-row">
                                    <div className="es-cf-title">Итого:</div>
                                    <div className="es-cf-value"><span>270 000</span> сум</div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100" name="confirm" value="delivery">Оформить предзаказ</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="es-cf-left">
                            <a href="/ru/menu" className="es-back-link">
                                <Image src={require("../assets/img/ic_back.svg")}/> назад к покупкам
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Checkout