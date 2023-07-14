import Image from "next/image";
import React, { useState } from "react";
import Product from "@/components/Product";
import { getDescription, getImage, getName } from "@/plugins/custom";
import { useSelector } from "react-redux";

const Index = () => {
  const { sliders } = useSelector((state) => state.getDataReducer);
  const { cdnUrl } = useSelector((state) => state.getDataReducer);
  const { groups } = useSelector((state) => state.getDataReducer);
  const [shownGroups, setShownGroups] = useState(4);
  const { newProducts } = useSelector((state) => state.getDataReducer);

  const addGroup = () => {
    if (shownGroups > groups.length) return groups.length;
    setShownGroups((x) => x + 4);
  };

  return (
    <main>
      <section className="main-carusel-wrp section-wrp">
        <div className="main-carousel">
          <div
            className="carousel slide carousel-fade"
            data-ride="carousel"
            id="mainCarousel"
          >
            <ol className="carousel-indicators">
              {sliders.map((x, idx) => {
                return (
                  <li
                    key={"indicator-index-" + idx}
                    data-target="#mainCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                )
              })}
            </ol>
            <div className="carousel-inner">
              {sliders.map((x, idx) => {
                return(
                  <div className="carousel-item es-carouse-item" key={"slider-index-" + idx}>
                    <Image
                      className="img-fluid w-100 es-carousel-banner"
                      src={cdnUrl + "sliders" + getImage(x)}
                      width={1366}
                      height={384}
                      alt="banner"
                    />
                    <div className="carousel-backdrop">
                      <div className="es-carousel-content container">
                        <div className="carousel-title">{getName(x)}</div>
                        <div className="carousel-info">
                          {getDescription(x)}
                        </div>
                        {x.url.length > 0 && (
                          <a href={"https://quadro.exord.uz/" + x.url} className="btn-cart-light">
                            Подробнее
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container">
          <button
            className="carousel-control-prev sm-hide"
            data-slide="prev"
            data-target="#mainCarousel"
            type="button"
          >
            <span>
              <svg
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.70594 13.3959L1.81594 8.50587C1.23844 7.92837 1.23844 6.98337 1.81594 6.40587L6.70594 1.51587"
                  stroke="#3B1E1C"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <button
            className="carousel-control-next sm-hide"
            data-slide="next"
            data-target="#mainCarousel"
            type="button"
          >
            <span>
              <svg
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.70594 13.3959L1.81594 8.50587C1.23844 7.92837 1.23844 6.98337 1.81594 6.40587L6.70594 1.51587"
                  stroke="#3B1E1C"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </section>
      <section className="menu section-wrp">
        <div className="container">
          <h2 className="section-title">Меню</h2>
          <div className="row">
              {
                groups.slice(0, shownGroups).map((group, idx) => {
                  return(
                    <div className="col-md-6">
                    <div className="menu-item" key={"category-index-" + idx}>
                      <div className="img-container">
                        <div className="img-wrapper-inner">
                          <a className="img-link" href="#">
                            {group.image ? (<Image
                              src={cdnUrl + "groups/" + getImage(group)}
                              className="img-fluid width-100"
                              alt="menu"
                            />) : (
                            <Image
                              src={require("../assets/img/menu_1.jpg")}
                              className="img-fluid width-100"
                              alt="menu"
                            />)}
                          </a>
                        </div>
                      </div>
                      <div className="menu-content-wrapper">
                        <div className="menu-type">{getName(group)}</div>
                        <div className="menu-type-desc">
                          {getDescription(group)}
                        </div>
                        <div className="es-category-link">
                          <a href="#" className="menu-link">
                            В меню{" "}
                            <Image
                              src={require("../assets/img/Vector.svg")}
                              className="img-fluid width-100"
                              alt="vector"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                })
              }
          </div>
        </div>
        {!(shownGroups > groups.length) && (<div className="links-container">
          <button onClick={addGroup} className="links btn">
            <div className="es-icon-wrapper">
              <div className="icon-container">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.45581 8.45593H15.4558M8.45581 15.4559V1.45593"
                    stroke="#3B1E1C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            Все меню
          </button>
        </div>)}
      </section>
      <section className="booking section-wrp">
        <div className="booking-bg">
          <div className="booking-form">
            <div className="booking-form-header">
              <h2 className="section-title">Забронировать место</h2>
              <div className="booking-desc">
                Заполните поля и оформите предзакз. Для подтверждения
                бронирования с вами свяжется наши сотрудники.
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group es-main-form">
                  <input
                    type="name"
                    className="form-control main-form-control "
                    id="InputName"
                    placeholder="* Имя"
                  />
                </div>
                <div className="form-group es-main-form">
                  <input
                    type="text"
                    className="form-control main-form-control "
                    id="InputPhoneNumber"
                    data-plugin="phone-mask"
                    placeholder="* Номер телефона"
                  />
                </div>
                <div className="form-group es-main-form">
                  <input
                    type="date"
                    className="form-control main-form-control "
                    id="InputDate"
                    placeholder="* Дата и время"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="es-form-right">
                  <div className="form-group  es-main-form">
                    <input
                      type="surname"
                      className="form-control main-form-control "
                      id="InputSurname"
                      placeholder="* Фамилия"
                    />
                  </div>
                  <div className="form-group  es-main-form">
                    <input
                      type="number"
                      className="form-control main-form-control "
                      id="InputNumber"
                      placeholder="* Количество персон"
                    />
                  </div>
                  <div className="form-group  es-main-form">
                    <input
                      type="email"
                      className="form-control main-form-control "
                      id="InputEmail"
                      placeholder="* E-mail"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="comment"
                    className="form-control main-form-control "
                    id="InputDate"
                    placeholder="* Комментарий к бронированию"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="icon-wrapper">
                  <a href="#" className="links">
                    <div className="es-icon-wrapper">
                      <div className="icon-container">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.50006 1.5H2.80507C3.61507 1.5 4.25256 2.1975 4.18506 3L3.56256 10.47C3.45756 11.6925 4.42506 12.7425 5.65506 12.7425H13.6426C14.7226 12.7425 15.6676 11.8575 15.7501 10.785L16.1551 5.16C16.2451 3.915 15.3001 2.9025 14.0476 2.9025H4.36507"
                            stroke="#3B1E1C"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.1876 16.5C12.7053 16.5 13.1251 16.0803 13.1251 15.5625C13.1251 15.0447 12.7053 14.625 12.1876 14.625C11.6698 14.625 11.2501 15.0447 11.2501 15.5625C11.2501 16.0803 11.6698 16.5 12.1876 16.5Z"
                            stroke="#3B1E1C"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.18756 16.5C6.70533 16.5 7.12506 16.0803 7.12506 15.5625C7.12506 15.0447 6.70533 14.625 6.18756 14.625C5.66979 14.625 5.25006 15.0447 5.25006 15.5625C5.25006 16.0803 5.66979 16.5 6.18756 16.5Z"
                            stroke="#3B1E1C"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.75006 6H15.7501"
                            stroke="#3B1E1C"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    Оформить предзаказ
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="icon-wrapper">
                  <a href="#" className="links">
                    <div className="es-icon-wrapper">
                      <div className="icon-container">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.015 2.18262C6.5325 2.18262 4.515 4.20012 4.515 6.68262V8.85012C4.515 9.30762 4.32 10.0051 4.0875 10.3951L3.225 11.8276C2.6925 12.7126 3.06 13.6951 4.035 14.0251C7.2675 15.1051 10.755 15.1051 13.9875 14.0251C14.895 13.7251 15.2925 12.6526 14.7975 11.8276L13.935 10.3951C13.71 10.0051 13.515 9.30762 13.515 8.85012V6.68262C13.515 4.20762 11.49 2.18262 9.015 2.18262Z"
                            stroke="#3B1E1C"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                          />
                          <path
                            d="M10.4025 2.40008C10.17 2.33258 9.93 2.28008 9.6825 2.25008C8.9625 2.16008 8.2725 2.21258 7.6275 2.40008C7.845 1.84508 8.385 1.45508 9.015 1.45508C9.645 1.45508 10.185 1.84508 10.4025 2.40008Z"
                            stroke="#3B1E1C"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.265 14.2949C11.265 15.5324 10.2525 16.5449 9.01501 16.5449C8.40001 16.5449 7.83001 16.2899 7.42501 15.8849C7.02001 15.4799 6.76501 14.9099 6.76501 14.2949"
                            stroke="#3B1E1C"
                            strokeMiterlimit="10"
                          />
                        </svg>
                      </div>
                    </div>
                    Оформить предзаказ
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="booking-guide">
                  Нажимая кнопку “Забронировать” <br /> Вы соглашаетесь с{" "}
                  <span> Политикой конфеденциальности</span> ресторана!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-section section-wrp">
        <div className="container">
          <h2 className="section-title">Новинки</h2>
          <div className="es-products-list">
            {newProducts.map((x, idx) => {
              return (
                <Product key={"newProduct-index-" + idx} product={x} />
              )
            })}
          </div>
        </div>
      </section>
      <section className="about-section section-wrp">
        <div className="es-about-row">
          <div className="es-row-img">
            <Image
              src={require("../assets/img/about_1.jpg")}
              className="img-fluid es-about-banner"
              loading="lazy"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <div className="about-content-wrapper">
                  <h2 className="about-title">О нас</h2>
                  <div className="about-content">
                    Сложно сказать, почему предприниматели в сети интернет
                    функционально разнесены на независимые элементы. Таким
                    образом, высококачественный прототип будущего проекта
                    однозначно фиксирует необходимость укрепления моральных
                    ценностей. Есть над чем задуматься: предприниматели в сети
                    интернет объединены в целые кластеры себе подобных.
                  </div>
                  <div className="about-content">
                    Однозначно, представители современных социальных резервов
                    неоднозначны и будут ассоциативно распределены по отраслям.
                    Противоположная точка зрения подразумевает, что сторонники
                    тоталитаризма в науке лишь добавляют фракционных разногласий
                    и обнародованы.
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="icon-wrapper-lg">
                        <a href="#" className="links">
                          <div className="es-icon-wrapper-lg">
                            <div className="icon-container-lg">
                              <svg
                                width="38"
                                height="38"
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.96774 18.3916H37C37 20.6525 35.2 22.4496 32.9355 22.4496H5.06452C2.8 22.4496 1 20.6525 1 18.3916H3.32258"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2.21936 18.3912C2.85807 10.0434 10.1161 3.89844 19 3.89844C27.8839 3.89844 35.2 10.0434 35.7806 18.3912"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8.54834 13.0582C9.70963 11.4351 11.4516 9.69592 13.1935 9.11621"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16.0968 36.942C16.0968 36.942 19.2323 32.7681 21.9033 31.1449C24.8065 29.4057 28.871 23.0289 32.9355 22.4492"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                />
                                <path
                                  d="M9.70968 23.0293C9.70968 23.0293 9.24516 25.2322 9.53548 27.3771C9.59354 27.9568 9.36129 28.4786 9.0129 28.8844C8.02581 29.8699 6.4 31.9568 6.80645 35.2612C6.80645 35.2612 5.64516 36.4206 5.06451 37.0003"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12.6129 22.4491L13.0774 24.1882C13.1935 24.536 13.1935 24.9418 13.1935 25.2897V27.6085C13.1935 28.594 13.9483 29.3476 14.9354 29.3476H15.5161C15.5161 29.3476 16.6774 22.3911 19 22.3911"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.5162 29.4058C15.5162 29.4058 11.5097 30.2753 10.5226 34.0434"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                />
                                <path
                                  d="M21.3226 22.4492C21.3226 22.4492 19.5806 25.3478 19.5806 27.6666L26.5484 22.4492"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16.6774 3.31884C16.6774 2.04348 17.7226 1 19 1C20.2774 1 21.3226 2.04348 21.3226 3.31884"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          Онлайн <br /> бронирование
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="icon-wrapper-lg">
                        <a href="#" className="links">
                          <div className="es-icon-wrapper-lg">
                            <div className="icon-container-lg">
                              <svg
                                width="38"
                                height="38"
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19.0236 33.5161C11.0001 33.5161 4.48828 27.0129 4.48828 19C4.48828 10.9871 11.0001 4.48389 19.0236 4.48389"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M19.0238 37C9.08164 37 1 28.929 1 19C1 9.07097 9.08164 1 19.0238 1"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.72119 13.1934V24.8063"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.3726 9.12891V28.8708"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M19.0237 30.0321C19.6659 30.0321 20.1865 29.5121 20.1865 28.8708C20.1865 28.2294 19.6659 27.7095 19.0237 27.7095C18.3815 27.7095 17.8608 28.2294 17.8608 28.8708C17.8608 29.5121 18.3815 30.0321 19.0237 30.0321Z"
                                  fill="#3B1E1C"
                                />
                                <path
                                  d="M21.3495 36.9998H35.3034C35.3034 36.9998 29.4893 34.6772 28.3264 31.1934C27.1636 34.6772 21.3495 36.9998 21.3495 36.9998Z"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="square"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M28.326 23.645V31.1934"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M34.1405 1H22.5123L19.8959 12.7871C19.3145 15.9806 20.4773 19.2903 23.0355 21.2645C24.4891 22.4258 26.3496 23.0645 28.3845 23.0645C30.4195 23.0645 32.2219 22.3677 33.7335 21.2645C36.2917 19.2903 37.3964 15.9806 36.8732 12.7871L34.1405 1Z"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M24.8378 13.7744H36.466"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          Изысканная <br /> кухня
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="icon-wrapper-lg">
                        <a href="#" className="links">
                          <div className="es-icon-wrapper-lg">
                            <div className="icon-container-lg">
                              <svg
                                width="38"
                                height="31"
                                viewBox="0 0 38 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 18.98H10.2903C11.2774 18.98 12.0323 19.734 12.0323 20.72V30"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="square"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M1 1V30"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="square"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M4.48389 23.6201H12.0323"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="square"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M37 18.98H27.7097C26.7226 18.98 25.9678 19.734 25.9678 20.72V30"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="square"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M37 1V30"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="square"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M33.5162 23.6201H25.9678"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="square"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M6.22559 8.54027V15.5003L9.36107 14.3403C10.3482 13.9923 11.4514 13.9923 12.3804 14.3983L13.3675 14.8043C14.4127 15.2683 15.574 15.2683 16.5611 14.8043L17.5482 14.3983C18.5353 13.9923 19.5804 13.9343 20.5675 14.3403L22.0191 14.8623C23.0643 15.2683 24.2256 15.2103 25.2707 14.6883L25.5611 14.5143C26.5482 13.9923 27.7675 13.9343 28.8127 14.3403L31.774 15.4423V8.48227C31.774 7.84427 31.2514 7.32227 30.6127 7.32227H7.38688C6.74817 7.38027 6.22559 7.90227 6.22559 8.54027Z"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="square"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M19 18.9805V30.0005"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="square"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.5161 30H22.4839"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12.6129 5.06008L14.3549 1.58008H23.6452L21.9032 5.06008"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M23.6453 1.58008L25.3872 5.06008"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          Уютная <br /> обстановка
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="icon-wrapper-lg">
                        <a href="#" className="links">
                          <div className="es-icon-wrapper-lg">
                            <div className="icon-container-lg">
                              <svg
                                width="38"
                                height="38"
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M26.8001 6.79699C29.2001 5.05786 35.6201 3.95641 37.0001 3.89844C33.4001 7.95641 37.1801 14.739 34.0001 18.9709C30.1601 24.0723 23.5601 21.2897 23.5601 21.2897"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12.4 17.232C10.36 14.7392 5.8 14.3335 1 14.9132C3.88 17.3479 2.2 23.4929 5.2 26.5074C8.8 30.1595 13.6 27.0871 13.6 27.0871"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M28.8399 12.3042C25.9599 14.3912 23.6799 19.5506 22.5999 24.4781C22.1199 26.797 21.9999 29.1738 22.1799 31.5506L22.3599 33.4636C22.5399 35.3767 20.9799 36.9999 18.9999 36.9999C17.0799 36.9999 15.5199 35.4346 15.6399 33.5796L15.6999 32.652C15.7599 31.4926 15.5799 30.3911 15.1599 29.2897C13.9599 26.4491 11.7399 23.4346 8.85986 21.3477"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.2 2.15918V11.4345C14.2 13.5215 15.6399 15.3186 17.6799 15.8983"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M17.1997 1V10.8551"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M20.1997 1V10.8551"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M23.1996 2.15918V11.4345C23.1996 13.1157 22.2996 14.565 20.8596 15.4345L21.1596 19.0287"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M16.1199 23.6086L16.5999 15.4927"
                                  stroke="#3B1E1C"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          Натуральные <br /> продукты
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
};

export default Index;
