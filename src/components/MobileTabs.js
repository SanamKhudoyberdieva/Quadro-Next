import React from "react";
import Image from "next/image";

const MobileTabs = () => {
    return (
        <div className="mobile-nav d-lg-none">
        <ul className="nav">
            <li className="nav-item">
            <a className="nav-link active" href="/ru">
                <Image src={require("../assets/img/ic_main_active.svg")} alt="main" />
                <span className="menu-title">Главная</span>
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/ru/menu">
                <Image src={require("../assets/img/ic_menu_mini.svg")} alt="menu" />
                <span className="menu-title">Меню</span>
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/ru/cart">
                <Image src={require("../assets/img/ic_cart_mini.svg")} alt="cart" />
                <span className="menu-title">Корзина</span>
            </a>
            </li>
            <li className="nav-item">
            <a
                className="nav-link"
                data-target="#authModal"
                data-toggle="modal"
                href="#"
            >
                <Image src={require("../assets/img/ic_profile_mini.svg")} alt="profile" />
                <span className="menu-title">Профиль</span>
            </a>
            </li>
        </ul>
        </div>
    );
};

export default MobileTabs;
