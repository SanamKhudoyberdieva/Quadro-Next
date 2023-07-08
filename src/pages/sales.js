import React from 'react'
import Image from 'next/image'

const Sales = () => {
    return (
        <main>
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb es-breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Главная</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Акции</li>
                </ol>
            </nav>
        </div>
        <section className="section-wrp">
            <div className="container">
                <h1 className="page-title">Акции</h1>
                <div className="row">
                    <div className="col-md-4 discount-pr-wrp">
                        <div className="discount-pr">
                            <a href="#">
                                <Image src={require("../assets/img/discount_1.jpg")} alt="product" className="img-fluid" />
                            </a>
                            <div className="discount-date">
                                <div className="discount-date-inner">20. <br />05.</div>
                            </div>
                        </div>
                        <div className="discount-content">
                            <div className="discount-type">
                                <a href="#">Cкидка 15% на первый онлайн-заказ</a>
                            </div>
                            <div className="discount-desc">Но явные признаки победы институционализации являются только методом политического участия и своевременно верифицированы.</div>
                        </div>
                    </div>
                    <div className="col-md-4 discount-pr-wrp">
                        <div className="discount-pr">
                            <a href="#">
                                <Image src={require("../assets/img/discount_2.jpg")} alt="product" className="img-fluid" />
                            </a>
                            <div className="discount-date">
                                <div className="discount-date-inner">20. <br />05.</div>
                            </div>
                        </div>
                        <div className="discount-content">
                            <div className="discount-type">
                                <a href="#">Cервис экспресс-доставки</a>
                            </div>
                            <div className="discount-desc">Но явные признаки победы институционализации являются только методом политического участия и своевременно верифицированы.</div>
                        </div>
                    </div>
                    <div className="col-md-4 discount-pr-wrp">
                        <div className="discount-pr">
                            <a href="#">
                                <Image src={require("../assets/img/discount_3.jpg")} alt="product" className="img-fluid" />
                            </a>
                            <div className="discount-date">
                                <div className="discount-date-inner">20. <br />05.</div>
                            </div>
                        </div>
                        <div className="discount-content">
                            <div className="discount-type">
                                <a href="#">Скидки до — 50%</a>
                            </div>
                            <div className="discount-desc">Но явные признаки победы институционализации являются только методом политического участия и своевременно верифицированы.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Sales