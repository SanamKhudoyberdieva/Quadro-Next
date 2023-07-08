import Image from 'next/image'
import React from 'react'

const Error = () => {
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
        <section className="section-wrp">
            <div className="container">
                <div className="es-404-content">
                    <h1 className="page-title">Страница не найдена</h1>
                    <div className="es-404-img">
                        <Image src={require("../assets/img/404.jpg")} className="img-fluid" alt="404" />
                    </div>
                    <a className="btn btn-primary-lg" href="#">На главную</a>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Error