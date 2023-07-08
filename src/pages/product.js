import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const Product = () => {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`slick-arrow es-prev-slick ${className}`}
        aria-label="Previous"
        type="button"
      >
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_42_1128)">
            <rect
              y="0.707107"
              width="35"
              height="35"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 24.9561 0.207107)"
              stroke="#3B1E1C"
            />
            <rect
              width="36"
              height="36"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 75.4561 0)"
              fill="#3B1E1C"
            />
            <path
              d="M27.7059 31.3959L22.8159 26.5059C22.2384 25.9284 22.2384 24.9834 22.8159 24.4059L27.7059 19.5159"
              stroke="#3B1E1C"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_42_1128">
              <rect
                width="36"
                height="36"
                fill="white"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 25.4561 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`slick-next slick-arrow es-next-slick ${className}`}
        aria-label="Next"
        type="button"
      >
        <svg
          width="52"
          height="51"
          viewBox="0 0 52 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_42_1120)">
            <rect
              x="26.3682"
              y="0.707107"
              width="35"
              height="35"
              transform="rotate(45 26.3682 0.707107)"
              stroke="#3B1E1C"
            />
            <rect
              x="-23.6318"
              width="36"
              height="36"
              transform="rotate(45 -23.6318 0)"
              fill="#3B1E1C"
            />
            <path
              d="M24.1183 31.3959L29.0083 26.5059C29.5858 25.9284 29.5858 24.9834 29.0083 24.4059L24.1183 19.5159"
              stroke="#3B1E1C"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_42_1120">
              <rect
                width="36"
                height="36"
                fill="white"
                transform="translate(26.3682) rotate(45)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <main>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb es-breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Главная</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Меню</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Категория</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Название товара
            </li>
          </ol>
        </nav>
      </div>
      <section className="product-info section-wrp">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="pv-image">
                <div className="pv-image-wrapper">
                  <div className="img-wrapper">
                    <Image
                      src={require("../assets/img/product_1.jpg")}
                      alt="product"
                      className="img-fluid pro-view-img"
                    />
                  </div>
                </div>
                <button className="btn btn-favourite btn-pv">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_40_2865)">
                      <rect
                        x="26"
                        y="1.61885"
                        width="35"
                        height="35"
                        transform="rotate(45 26 1.61885)"
                        fill="white"
                        stroke="#3B1E1C"
                      />
                      <rect
                        x="26"
                        y="50.9117"
                        width="36"
                        height="36"
                        transform="rotate(45 26 50.9117)"
                        fill="#3B1E1C"
                      />
                      <path
                        d="M26.0089 32.5192C25.7539 32.6092 25.3339 32.6092 25.0789 32.5192C22.9039 31.7767 18.0439 28.6792 18.0439 23.4292C18.0439 21.1117 19.9114 19.2367 22.2139 19.2367C23.5789 19.2367 24.7864 19.8967 25.5439 20.9167C26.3014 19.8967 27.5164 19.2367 28.8739 19.2367C31.1764 19.2367 33.0439 21.1117 33.0439 23.4292C33.0439 28.6792 28.1839 31.7767 26.0089 32.5192Z"
                        stroke="#3B1E1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_2865">
                        <rect
                          width="36"
                          height="36"
                          fill="white"
                          transform="translate(26 0.911743) rotate(45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-md-6 es-pv-wrapper">
              <div className="pv-container">
                <h1 className="pv-title">Голень ягненка</h1>
                <p className="pv-function">
                  Сложно сказать, почему предприниматели в сети интернет
                  функционально разнесены на независимые элементы. Таким
                  образом, высококачественный прототип будущего проекта
                  однозначно фиксирует необходимость укрепления моральных
                  ценностей. Есть над чем задуматься: предприниматели в сети
                  интернет объединены в целые кластеры себе подобных.
                </p>
                <div className="pv-price">250 000 сум</div>
                <button className="btn btn-cart btn-sm">В корзину</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="carusel-product section-wrp">
        <div className="container">
          <h2 className="section-title section-title-sm">Похожие товары</h2>
          <Slider {...settings}>
            <div className="es-category-item">
              <div className="es-carusel-item">
                <div className="es-carusel-img">
                  <a href="#">
                    <Image
                      className="lazy img-fluid"
                      status="loading"
                      src={require("../assets/img/product_2.jpg")}
                      alt="product"
                    />
                  </a>
                </div>
                <button className="btn btn-favourite">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_40_2865)">
                      <rect
                        x="26"
                        y="1.61885"
                        width="35"
                        height="35"
                        transform="rotate(45 26 1.61885)"
                        fill="white"
                        stroke="#3B1E1C"
                      />
                      <rect
                        x="26"
                        y="50.9117"
                        width="36"
                        height="36"
                        transform="rotate(45 26 50.9117)"
                        fill="#3B1E1C"
                      />
                      <path
                        d="M26.0089 32.5192C25.7539 32.6092 25.3339 32.6092 25.0789 32.5192C22.9039 31.7767 18.0439 28.6792 18.0439 23.4292C18.0439 21.1117 19.9114 19.2367 22.2139 19.2367C23.5789 19.2367 24.7864 19.8967 25.5439 20.9167C26.3014 19.8967 27.5164 19.2367 28.8739 19.2367C31.1764 19.2367 33.0439 21.1117 33.0439 23.4292C33.0439 28.6792 28.1839 31.7767 26.0089 32.5192Z"
                        stroke="#3B1E1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_2865">
                        <rect
                          width="36"
                          height="36"
                          fill="white"
                          transform="translate(26 0.911743) rotate(45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div className="es-carusel-info">
                <div className="es-product-title">
                  <a href="#">Медальоны с карт крокетами</a>
                </div>
                <div className="es-pro-price">250 000 сум</div>
                <button className="btn es-btn-cart">В корзину</button>
              </div>
            </div>
            <div className="es-category-item">
              <div className="es-carusel-item">
                <div className="es-carusel-img">
                  <a href="#">
                    <Image
                      className="lazy img-fluid"
                      status="loading"
                      src={require("../assets/img/product_3.jpg")}
                      alt="product"
                    />
                  </a>
                </div>
                <button className="btn btn-favourite">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_40_2865)">
                      <rect
                        x="26"
                        y="1.61885"
                        width="35"
                        height="35"
                        transform="rotate(45 26 1.61885)"
                        fill="white"
                        stroke="#3B1E1C"
                      />
                      <rect
                        x="26"
                        y="50.9117"
                        width="36"
                        height="36"
                        transform="rotate(45 26 50.9117)"
                        fill="#3B1E1C"
                      />
                      <path
                        d="M26.0089 32.5192C25.7539 32.6092 25.3339 32.6092 25.0789 32.5192C22.9039 31.7767 18.0439 28.6792 18.0439 23.4292C18.0439 21.1117 19.9114 19.2367 22.2139 19.2367C23.5789 19.2367 24.7864 19.8967 25.5439 20.9167C26.3014 19.8967 27.5164 19.2367 28.8739 19.2367C31.1764 19.2367 33.0439 21.1117 33.0439 23.4292C33.0439 28.6792 28.1839 31.7767 26.0089 32.5192Z"
                        stroke="#3B1E1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_2865">
                        <rect
                          width="36"
                          height="36"
                          fill="white"
                          transform="translate(26 0.911743) rotate(45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div className="es-carusel-info">
                <div className="es-product-title">
                  <a href="#">Хенд ролл с угрём</a>
                </div>
                <div className="es-pro-price">250 000 сум</div>
                <button className="btn es-btn-cart">В корзину</button>
              </div>
            </div>
            <div className="es-category-item">
              <div className="es-carusel-item">
                <div className="es-carusel-img">
                  <a href="#">
                    <Image
                      className="lazy img-fluid"
                      status="loading"
                      src={require("../assets/img/product_4.jpg")}
                      alt="product"
                    />
                  </a>
                </div>
                <button className="btn btn-favourite">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_40_2865)">
                      <rect
                        x="26"
                        y="1.61885"
                        width="35"
                        height="35"
                        transform="rotate(45 26 1.61885)"
                        fill="white"
                        stroke="#3B1E1C"
                      />
                      <rect
                        x="26"
                        y="50.9117"
                        width="36"
                        height="36"
                        transform="rotate(45 26 50.9117)"
                        fill="#3B1E1C"
                      />
                      <path
                        d="M26.0089 32.5192C25.7539 32.6092 25.3339 32.6092 25.0789 32.5192C22.9039 31.7767 18.0439 28.6792 18.0439 23.4292C18.0439 21.1117 19.9114 19.2367 22.2139 19.2367C23.5789 19.2367 24.7864 19.8967 25.5439 20.9167C26.3014 19.8967 27.5164 19.2367 28.8739 19.2367C31.1764 19.2367 33.0439 21.1117 33.0439 23.4292C33.0439 28.6792 28.1839 31.7767 26.0089 32.5192Z"
                        stroke="#3B1E1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_2865">
                        <rect
                          width="36"
                          height="36"
                          fill="white"
                          transform="translate(26 0.911743) rotate(45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div className="es-carusel-info">
                <div className="es-product-title">
                  <a href="#">Десерт Карота</a>
                </div>
                <div className="es-pro-price">250 000 сум</div>
                <button className="btn es-btn-cart">В корзину</button>
              </div>
            </div>
            <div className="es-category-item">
              <div className="es-carusel-item">
                <div className="es-carusel-img">
                  <a href="#">
                    <Image
                      className="lazy img-fluid"
                      status="loading"
                      src={require("../assets/img/product_5.jpg")}
                      alt="product"
                    />
                  </a>
                </div>
                <button className="btn btn-favourite">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_40_2865)">
                      <rect
                        x="26"
                        y="1.61885"
                        width="35"
                        height="35"
                        transform="rotate(45 26 1.61885)"
                        fill="white"
                        stroke="#3B1E1C"
                      />
                      <rect
                        x="26"
                        y="50.9117"
                        width="36"
                        height="36"
                        transform="rotate(45 26 50.9117)"
                        fill="#3B1E1C"
                      />
                      <path
                        d="M26.0089 32.5192C25.7539 32.6092 25.3339 32.6092 25.0789 32.5192C22.9039 31.7767 18.0439 28.6792 18.0439 23.4292C18.0439 21.1117 19.9114 19.2367 22.2139 19.2367C23.5789 19.2367 24.7864 19.8967 25.5439 20.9167C26.3014 19.8967 27.5164 19.2367 28.8739 19.2367C31.1764 19.2367 33.0439 21.1117 33.0439 23.4292C33.0439 28.6792 28.1839 31.7767 26.0089 32.5192Z"
                        stroke="#3B1E1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_2865">
                        <rect
                          width="36"
                          height="36"
                          fill="white"
                          transform="translate(26 0.911743) rotate(45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div className="es-carusel-info">
                <div className="es-product-title">
                  <a href="#">Black Currant</a>
                </div>
                <div className="es-pro-price">250 000 сум</div>
                <button className="btn es-btn-cart">В корзину</button>
              </div>
            </div>
            <div className="es-category-item">
              <div className="es-carusel-item">
                <div className="es-carusel-img">
                  <a href="#">
                    <Image
                      className="lazy img-fluid"
                      status="loading"
                      src={require("../assets/img/product_4.jpg")}
                      alt="product"
                    />
                  </a>
                </div>
                <button className="btn btn-favourite">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_40_2865)">
                      <rect
                        x="26"
                        y="1.61885"
                        width="35"
                        height="35"
                        transform="rotate(45 26 1.61885)"
                        fill="white"
                        stroke="#3B1E1C"
                      />
                      <rect
                        x="26"
                        y="50.9117"
                        width="36"
                        height="36"
                        transform="rotate(45 26 50.9117)"
                        fill="#3B1E1C"
                      />
                      <path
                        d="M26.0089 32.5192C25.7539 32.6092 25.3339 32.6092 25.0789 32.5192C22.9039 31.7767 18.0439 28.6792 18.0439 23.4292C18.0439 21.1117 19.9114 19.2367 22.2139 19.2367C23.5789 19.2367 24.7864 19.8967 25.5439 20.9167C26.3014 19.8967 27.5164 19.2367 28.8739 19.2367C31.1764 19.2367 33.0439 21.1117 33.0439 23.4292C33.0439 28.6792 28.1839 31.7767 26.0089 32.5192Z"
                        stroke="#3B1E1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_2865">
                        <rect
                          width="36"
                          height="36"
                          fill="white"
                          transform="translate(26 0.911743) rotate(45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div className="es-carusel-info">
                <div className="es-product-title">
                  <a href="#">Десерт Карота</a>
                </div>
                <div className="es-pro-price">250 000 сум</div>
                <button className="btn es-btn-cart">В корзину</button>
              </div>
            </div>
            <div className="es-category-item">
              <div className="es-carusel-item">
                <div className="es-carusel-img">
                  <a href="#">
                    <Image
                      className="lazy img-fluid"
                      status="loading"
                      src={require("../assets/img/product_3.jpg")}
                      alt="product"
                    />
                  </a>
                </div>
                <button className="btn btn-favourite">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_40_2865)">
                      <rect
                        x="26"
                        y="1.61885"
                        width="35"
                        height="35"
                        transform="rotate(45 26 1.61885)"
                        fill="white"
                        stroke="#3B1E1C"
                      />
                      <rect
                        x="26"
                        y="50.9117"
                        width="36"
                        height="36"
                        transform="rotate(45 26 50.9117)"
                        fill="#3B1E1C"
                      />
                      <path
                        d="M26.0089 32.5192C25.7539 32.6092 25.3339 32.6092 25.0789 32.5192C22.9039 31.7767 18.0439 28.6792 18.0439 23.4292C18.0439 21.1117 19.9114 19.2367 22.2139 19.2367C23.5789 19.2367 24.7864 19.8967 25.5439 20.9167C26.3014 19.8967 27.5164 19.2367 28.8739 19.2367C31.1764 19.2367 33.0439 21.1117 33.0439 23.4292C33.0439 28.6792 28.1839 31.7767 26.0089 32.5192Z"
                        stroke="#3B1E1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_2865">
                        <rect
                          width="36"
                          height="36"
                          fill="white"
                          transform="translate(26 0.911743) rotate(45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div className="es-carusel-info">
                <div className="es-product-title">
                  <a href="#">Хенд ролл с угрём</a>
                </div>
                <div className="es-pro-price">250 000 сум</div>
                <button className="btn es-btn-cart">В корзину</button>
              </div>
            </div>
            <div className="es-category-item">
              <div className="es-carusel-item">
                <div className="es-carusel-img">
                  <a href="#">
                    <Image
                      className="lazy img-fluid"
                      status="loading"
                      src={require("../assets/img/product_5.jpg")}
                      alt="product"
                    />
                  </a>
                </div>
                <button className="btn btn-favourite">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_40_2865)">
                      <rect
                        x="26"
                        y="1.61885"
                        width="35"
                        height="35"
                        transform="rotate(45 26 1.61885)"
                        fill="white"
                        stroke="#3B1E1C"
                      />
                      <rect
                        x="26"
                        y="50.9117"
                        width="36"
                        height="36"
                        transform="rotate(45 26 50.9117)"
                        fill="#3B1E1C"
                      />
                      <path
                        d="M26.0089 32.5192C25.7539 32.6092 25.3339 32.6092 25.0789 32.5192C22.9039 31.7767 18.0439 28.6792 18.0439 23.4292C18.0439 21.1117 19.9114 19.2367 22.2139 19.2367C23.5789 19.2367 24.7864 19.8967 25.5439 20.9167C26.3014 19.8967 27.5164 19.2367 28.8739 19.2367C31.1764 19.2367 33.0439 21.1117 33.0439 23.4292C33.0439 28.6792 28.1839 31.7767 26.0089 32.5192Z"
                        stroke="#3B1E1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_40_2865">
                        <rect
                          width="36"
                          height="36"
                          fill="white"
                          transform="translate(26 0.911743) rotate(45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div className="es-carusel-info">
                <div className="es-product-title">
                  <a href="#">Black Currant</a>
                </div>
                <div className="es-pro-price">250 000 сум</div>
                <button className="btn es-btn-cart">В корзину</button>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Product;
