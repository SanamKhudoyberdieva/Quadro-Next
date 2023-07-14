import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="footer-wrapper">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer-logo-wrp">
                        <Link href="/" >
                            <Image src={require("../assets/img/logo_footer.svg")} alt="logo" className="img-fluid footer-sm-logo" />
                        </Link>
                    </div>
                    <div className="footer-content">Противоположная точка зрения подразумевает, что сторонники тоталитаризма
                        в науке лишь добавляют фракционных разногласий и обнародованы.</div>
                </div>
                <div className="col-md-2 footer-nav footer-nav-sm">
                    <ul className="footer-links">
                        <div className="footer-item">Категории</div>
                        <li className="footer-link">
                            <Link href="/category">Основные блюда</Link>
                        </li>
                        <li className="footer-link">
                            <Link href="/category">Японская кухня</Link>
                        </li>
                        <li className="footer-link">
                            <Link href="/category">Десерты</Link>
                        </li>
                        <li className="footer-link">
                            <Link href="/category">Лимонады</Link>
                        </li>
                        <li className="footer-link">
                            <Link href="/category">Лимонады</Link>
                        </li>
                        <li className="footer-link">
                            <Link href="/category">Б.А коктейли</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 footer-nav footer-nav-sm">
                    <ul className="footer-links">
                        <div className="footer-item">Ссылки</div>
                        <li className="footer-link">
                            <Link href="/category">Меню</Link>
                        </li>
                        <li className="footer-link">
                            <Link href="/about">О нас</Link>
                        </li>
                        <li className="footer-link">
                            <Link href="/contact">Контакты</Link>
                        </li>
                        <li className="footer-link">
                            <Link href="/public-offer">Оферта</Link>
                        </li>
                        <li className="footer-link">
                            <Link href="/sales">Акции</Link>
                        </li>
                        <liv className="footer-link">
                            <Link href="/checkout">Доставка</Link>
                        </liv>
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="contact-footer">
                        <div className="contact-number">
                            <Link href="tel:+998781301338">+99878 130 13 38</Link>
                        </div>
                        <div className="contact-info">Каждый день с 11:00 до 00:00</div>
                        <div className="contact-info">
                            <Link href="https:info@quadro.com">info@quadro.com</Link>
                        </div>
                        <div className="contact-info">24 Zulfiya xonim ko'chasi, Tashkent</div>
                        <div className="social-container">
                            <Link href="#">
                                <svg width="51" height="51" viewBox="0 0 51 51" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_201_5128)">
                                        <rect x="25.4561" y="0.707107" width="35" height="35"
                                            transform="rotate(45 25.4561 0.707107)" stroke="#3B1E1C" />
                                        <rect x="25.4561" y="50" width="36" height="36"
                                            transform="rotate(45 25.4561 50)" fill="#3B1E1C" />
                                        <path
                                            d="M26.1685 25.7091H28.681L29.0755 23.0296H26.168V21.5651C26.168 20.452 26.5145 19.4649 27.5063 19.4649H29.1V17.1266C28.82 17.0869 28.2278 17 27.1087 17C24.772 17 23.4021 18.2955 23.4021 21.247V23.0296H21V25.7091H23.4021V33.0739C23.8778 33.149 24.3597 33.2 24.8543 33.2C25.3014 33.2 25.7378 33.1571 26.1685 33.0959V25.7091Z"
                                            fill="#3B1E1C" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_201_5128">
                                            <rect width="36" height="36" fill="white"
                                                transform="translate(25.4561) rotate(45)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link href="#">
                                <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_30_373)">
                                <rect x="26.3674" y="0.707107" width="35" height="35" transform="rotate(45 26.3674 0.707107)" stroke="#3B1E1C"/>
                                <rect x="26.3674" y="50" width="36" height="36" transform="rotate(45 26.3674 50)" fill="#3B1E1C"/>
                                <path d="M34.9116 16.6377L32.0644 33.2506C32.0644 33.2506 31.666 34.4025 30.5716 33.8501L24.0023 28.0204L23.9718 28.0032C24.8592 27.081 31.7402 19.9205 32.0409 19.5959C32.5065 19.0932 32.2175 18.7939 31.6769 19.1737L21.5128 26.6443L17.5915 25.1173C17.5915 25.1173 16.9744 24.8632 16.915 24.3108C16.8549 23.7575 17.6118 23.4582 17.6118 23.4582L33.5977 16.2001C33.5977 16.2001 34.9116 15.5319 34.9116 16.6377V16.6377Z" fill="#3B1E1C"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_30_373">
                                <rect width="36" height="36" fill="white" transform="translate(26.3674) rotate(45)"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </Link>
                            <Link href="#">
                                <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_30_333)">
                                <rect x="26.2791" y="0.707107" width="35" height="35" transform="rotate(45 26.2791 0.707107)" stroke="#3B1E1C"/>
                                <rect x="26.2791" y="50" width="36" height="36" transform="rotate(45 26.2791 50)" fill="#3B1E1C"/>
                                <path d="M25.8232 17.6265C28.2088 17.6265 28.5341 17.6265 29.51 17.6265C30.3775 17.6265 30.8112 17.8434 31.1365 17.9518C31.5702 18.1687 31.8955 18.2771 32.2208 18.6024C32.5461 18.9277 32.763 19.253 32.8714 19.6867C32.9799 20.012 33.0883 20.4458 33.1967 21.3133C33.1967 22.2892 33.1967 22.506 33.1967 25C33.1967 27.494 33.1967 27.7108 33.1967 28.6867C33.1967 29.5542 32.9799 29.988 32.8714 30.3133C32.6546 30.747 32.5461 31.0723 32.2208 31.3976C31.8955 31.7229 31.5702 31.9398 31.1365 32.0482C30.8112 32.1566 30.3775 32.2651 29.51 32.3735C28.5341 32.3735 28.3172 32.3735 25.8232 32.3735C23.3293 32.3735 23.1124 32.3735 22.1365 32.3735C21.269 32.3735 20.8353 32.1566 20.51 32.0482C20.0763 31.8313 19.751 31.7229 19.4257 31.3976C19.1004 31.0723 18.8835 30.747 18.775 30.3133C18.6666 29.988 18.5582 29.5542 18.4497 28.6867C18.4497 27.7108 18.4497 27.494 18.4497 25C18.4497 22.506 18.4497 22.2892 18.4497 21.3133C18.4497 20.4458 18.6666 20.012 18.775 19.6867C18.9919 19.253 19.1004 18.9277 19.4257 18.6024C19.751 18.2771 20.0763 18.0602 20.51 17.9518C20.8353 17.8434 21.269 17.7349 22.1365 17.6265C23.1124 17.6265 23.4377 17.6265 25.8232 17.6265ZM25.8232 16C23.3293 16 23.1124 16 22.1365 16C21.1606 16 20.51 16.2169 19.9678 16.4337C19.4257 16.6506 18.8835 16.9759 18.3413 17.5181C17.7991 18.0602 17.5823 18.494 17.257 19.1446C17.0401 19.6867 16.9317 20.3374 16.8232 21.3133C16.8232 22.2892 16.8232 22.6145 16.8232 25C16.8232 27.494 16.8232 27.7108 16.8232 28.6867C16.8232 29.6627 17.0401 30.3133 17.257 30.8554C17.4738 31.3976 17.7991 31.9398 18.3413 32.4819C18.8835 33.0241 19.3172 33.241 19.9678 33.5663C20.51 33.7831 21.1606 33.8916 22.1365 34C23.1124 34 23.4377 34 25.8232 34C28.2088 34 28.5341 34 29.51 34C30.4859 34 31.1365 33.7831 31.6787 33.5663C32.2208 33.3494 32.763 33.0241 33.3052 32.4819C33.8473 31.9398 34.0642 31.506 34.3895 30.8554C34.6064 30.3133 34.7148 29.6627 34.8232 28.6867C34.8232 27.7108 34.8232 27.3855 34.8232 25C34.8232 22.6145 34.8232 22.2892 34.8232 21.3133C34.8232 20.3374 34.6064 19.6867 34.3895 19.1446C34.1726 18.6024 33.8473 18.0602 33.3052 17.5181C32.763 16.9759 32.3293 16.759 31.6787 16.4337C31.1365 16.2169 30.4859 16.1084 29.51 16C28.5341 16 28.3172 16 25.8232 16Z" fill="#3B1E1C"/>
                                <path d="M25.8232 20.3373C23.2208 20.3373 21.1606 22.3976 21.1606 25C21.1606 27.6024 23.2208 29.6627 25.8232 29.6627C28.4257 29.6627 30.4859 27.6024 30.4859 25C30.4859 22.3976 28.4257 20.3373 25.8232 20.3373ZM25.8232 28.0361C24.1967 28.0361 22.7871 26.7349 22.7871 25C22.7871 23.3735 24.0883 21.9639 25.8232 21.9639C27.4497 21.9639 28.8594 23.2651 28.8594 25C28.8594 26.6265 27.4497 28.0361 25.8232 28.0361Z" fill="#3B1E1C"/>
                                <path d="M30.5943 21.3133C31.1932 21.3133 31.6787 20.8278 31.6787 20.2289C31.6787 19.6301 31.1932 19.1446 30.5943 19.1446C29.9955 19.1446 29.51 19.6301 29.51 20.2289C29.51 20.8278 29.9955 21.3133 30.5943 21.3133Z" fill="#3B1E1C"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_30_333">
                                <rect width="36" height="36" fill="white" transform="translate(26.2791) rotate(45)"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="es-footer-bottom">
                <div className="es-footer-copyright">© 2023 Quadro.</div>
                <div className="es-footer-developer">Сайт разработан в <a href="https://exord.uz">Exord</a></div>
            </div>
        </div>
    </footer>
    )
}

export default Footer