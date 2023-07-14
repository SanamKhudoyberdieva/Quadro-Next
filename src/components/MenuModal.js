import React from "react";
import Image from "next/image";

const MenuModal = () => {
    return (
        <div
        className="modal fade"
        id="menuModal"
        tabIndex="-1"
        aria-labelledby="menuModalLabel"
        aria-hidden="true"
        >
        <div className="modal-dialog-scrollable">
            <div className="modal-content">
            <div className="modal-header es-menu-modal-header">
                <a className="navbar-logo es-logo" href="#">
                <Image
                    src={require("../assets/img/logo_header.png")}
                    className="img-fluid es-logo-img"
                    alt="logo"
                />
                </a>
                <div className="navbar-wrp-sm">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        <Image
                        src={require("../assets/img/ic_favourite_sm.svg")}
                        alt="favourite"
                        />
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        <Image
                        src={require("../assets/img/ic_search_sm.svg")}
                        alt="search"
                        />
                    </a>
                    </li>
                    <li className="nav-item">
                    <button
                        className="btn nav-link"
                        href="#"
                        data-target="#menuModal"
                        data-toggle="modal"
                    >
                        <Image
                        src={require("../assets/img/ic_close.svg")}
                        alt="close"
                        />
                    </button>
                    </li>
                </ul>
                </div>
            </div>
            <div className="modal-body es-menu-modal-body">
                <div className="dropdowns-sm-wrapper">
                <div className="btn-group dropright es-dropdown-wrp">
                    <button
                    type="button"
                    className="btn es-btn-dropdown dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    >
                    Основные блюда
                    </button>
                    <div className="dropdown-menu"></div>
                </div>
                <div className="btn-group dropright es-dropdown-wrp">
                    <button
                    type="button"
                    className="btn es-btn-dropdown dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    >
                    Японская кухня
                    </button>
                    <div className="dropdown-menu"></div>
                </div>
                <div className="btn-group dropright es-dropdown-wrp">
                    <button
                    type="button"
                    className="btn es-btn-dropdown dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    >
                    Десерты
                    </button>
                    <div className="dropdown-menu"></div>
                </div>
                <div className="btn-group dropright es-dropdown-wrp">
                    <button
                    type="button"
                    className="btn es-btn-dropdown dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    >
                    Лимонады
                    </button>
                    <div className="dropdown-menu"></div>
                </div>
                <div className="btn-group dropright es-dropdown-wrp">
                    <button
                    type="button"
                    className="btn es-btn-dropdown dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    >
                    Чаи
                    </button>
                    <div className="dropdown-menu"></div>
                </div>
                <div className="btn-group dropright es-dropdown-wrp">
                    <button
                    type="button"
                    className="btn es-btn-dropdown dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    >
                    Б.А коктейли
                    </button>
                    <div className="dropdown-menu"></div>
                </div>
                </div>
                <ul className="footer-links">
                <li className="footer-link">
                    <a href="#">Меню</a>
                </li>
                <li className="footer-link">
                    <a href="#">О нас</a>
                </li>
                <li className="footer-link">
                    <a href="#">Контакты</a>
                </li>
                <li className="footer-link">
                    <a href="#">Оферта</a>
                </li>
                <li className="footer-link">
                    <a href="#">Акции</a>
                </li>
                <liv className="footer-link">
                    <a href="#">Доставка</a>
                </liv>
                </ul>
                <div className="contact-footer">
                <div className="contact-number">
                    <a href="tel:998781301338">+99878 130 13 38</a>
                </div>
                <div className="contact-info">Каждый день с 11:00 до 00:00</div>
                <div className="contact-info">
                    <a href="https:info@quadro.com">info@quadro.com</a>
                </div>
                <div className="contact-info">
                    24 Zulfiya xonim ko'chasi, Tashkent
                </div>
                <div className="social-container">
                    <a href="#">
                    <Image
                        src={require("../assets/img/ic_facebook.svg")}
                        alt="facebook"
                    />
                    </a>
                    <a href="#">
                    <Image
                        src={require("../assets/img/ic_telegram.svg")}
                        alt="telegram"
                    />
                    </a>
                    <a href="#">
                    <Image
                        src={require("../assets/img/ic_instagram.svg")}
                        alt="instagram"
                    />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default MenuModal;
