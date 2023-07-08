import React from 'react'
import Image from 'next/image'

const Contact = () => {
    return (
        <main>
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb es-breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Главная</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Контакты</li>
                </ol>
            </nav>
        </div>
        <section className="section-wrp">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1 className="page-title">Контакты</h1>
                        <div className="contact-label">Контакты:
                            <div className="contact-item">
                                <a href="tel:+998781301338">+99878 130 13 38</a>
                            </div>
                            <div className="contact-item">info@quadro.com</div>
                        </div>
                        <div className="contact-label">График работы:
                            <div className="contact-item">Каждый день с 8:00 до 00:00</div>
                        </div>
                        <div className="contact-label">Адрес:
                            <div className="contact-item">24 Zulfiya xonim ko'chasi, Tashkent</div>
                        </div>
                        <div className="contact-label border-0">Мы в соц сетях:
                            <div className="contact-item">
                                <a href="#" className="contact-type">
                                    <Image src={require("../assets/img/ic_facebook.svg")} alt="facebook" />
                                </a>
                                <a href="#" className="contact-type">
                                    <Image src={require("../assets/img/ic_telegram.svg")} alt="telegram" />
                                </a>
                                <a href="#">
                                    <Image src={require("../assets/img/ic_instagram.svg")} alt="instagram" />
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-8">
                        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1a0ab296e7f6ee9a306fec31493359dffdc20a2de4844d2b68d375c072b3d4eb&amp;width=100%&amp;height=580px&amp;lang=en_FR&amp;scroll=true"></script>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Contact