import React from "react";
import Image from "next/image";
import { showAuth } from "@/store/actions";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const Header = () => {
  const userInfo = useSelector((state) => state.userInfoReducer);
  const dispatch = useDispatch();
  return (
    <header className="main-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-logo es-logo" href="/">
            <Image
              src={require("../assets/img/logo_header.png")}
              className="img-fluid es-logo-img"
              alt="logo"
            />
          </Link>
          <div className="collapse navbar-collapse es-header-nav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" href="/categories/category1">
                  Меню
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  О нас
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Контакты
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/public-offer">
                  Оферта
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/sales">
                  Акции
                </Link>
              </li>
            </ul>
            <div className="contact-nav">
              <Link href="tel:+9987811301338">+99878 130 13 38</Link>
              <p className="working-hours">Каждый день с 11:00 до 00:00</p>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item active">
                {!userInfo && ( 
                  <button
                    className="btn nav-link"
                    onClick={() => dispatch(showAuth())}
                  >
                    <svg
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_201_3248)">
                        <rect
                          x="25.4561"
                          y="0.707107"
                          width="35"
                          height="35"
                          transform="rotate(45 25.4561 0.707107)"
                          stroke="#3B1E1C"
                        />
                        <rect
                          x="25.4561"
                          y="50"
                          width="36"
                          height="36"
                          transform="rotate(45 25.4561 50)"
                          fill="#3B1E1C"
                        />
                        <path
                          d="M25 25C27.0711 25 28.75 23.3211 28.75 21.25C28.75 19.1789 27.0711 17.5 25 17.5C22.9289 17.5 21.25 19.1789 21.25 21.25C21.25 23.3211 22.9289 25 25 25Z"
                          stroke="#3B1E1C"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M31.4426 32.5C31.4426 29.5975 28.5551 27.25 25.0001 27.25C21.4451 27.25 18.5576 29.5975 18.5576 32.5"
                          stroke="#3B1E1C"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_201_3248">
                          <rect
                            width="36"
                            height="36"
                            fill="white"
                            transform="translate(25.4561) rotate(45)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button> 
                )}
              </li>
              <li className="nav-item active">
                {!!userInfo && ( 
                  <button
                    className="btn nav-link"
                    href="/profile"
                  >
                    <svg
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_201_3248)">
                        <rect
                          x="25.4561"
                          y="0.707107"
                          width="35"
                          height="35"
                          transform="rotate(45 25.4561 0.707107)"
                          stroke="#3B1E1C"
                        />
                        <rect
                          x="25.4561"
                          y="50"
                          width="36"
                          height="36"
                          transform="rotate(45 25.4561 50)"
                          fill="#3B1E1C"
                        />
                        <path
                          d="M25 25C27.0711 25 28.75 23.3211 28.75 21.25C28.75 19.1789 27.0711 17.5 25 17.5C22.9289 17.5 21.25 19.1789 21.25 21.25C21.25 23.3211 22.9289 25 25 25Z"
                          stroke="#3B1E1C"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M31.4426 32.5C31.4426 29.5975 28.5551 27.25 25.0001 27.25C21.4451 27.25 18.5576 29.5975 18.5576 32.5"
                          stroke="#3B1E1C"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_201_3248">
                          <rect
                            width="36"
                            height="36"
                            fill="white"
                            transform="translate(25.4561) rotate(45)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button> 
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/favourite">
                <svg
                  width="52"
                  height="51"
                  viewBox="0 0 52 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_201_3257)">
                    <rect
                      x="26.3677"
                      y="0.707107"
                      width="35"
                      height="35"
                      transform="rotate(45 26.3677 0.707107)"
                      stroke="#3B1E1C"
                    />
                    <rect
                      x="26.3677"
                      y="50"
                      width="36"
                      height="36"
                      transform="rotate(45 26.3677 50)"
                      fill="#3B1E1C"
                    />
                    <path
                      d="M26.3766 31.6075C26.1216 31.6975 25.7016 31.6975 25.4466 31.6075C23.2716 30.865 18.4116 27.7675 18.4116 22.5175C18.4116 20.2 20.2791 18.325 22.5816 18.325C23.9466 18.325 25.1541 18.985 25.9116 20.005C26.6691 18.985 27.8841 18.325 29.2416 18.325C31.5441 18.325 33.4116 20.2 33.4116 22.5175C33.4116 27.7675 28.5516 30.865 26.3766 31.6075Z"
                      stroke="#3B1E1C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_201_3257">
                      <rect
                        width="36"
                        height="36"
                        fill="white"
                        transform="translate(26.3677) rotate(45)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                </Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/search">
                  <svg
                    width="52"
                    height="51"
                    viewBox="0 0 52 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_201_3265)">
                      <rect
                        x="26.2793"
                        y="0.707107"
                        width="35"
                        height="35"
                        transform="rotate(45 26.2793 0.707107)"
                        stroke="#3B1E1C"
                      />
                      <rect
                        x="26.2793"
                        y="50"
                        width="36"
                        height="36"
                        transform="rotate(45 26.2793 50)"
                        fill="#3B1E1C"
                      />
                      <path
                        d="M25.4482 31.75C29.3833 31.75 32.5732 28.56 32.5732 24.625C32.5732 20.69 29.3833 17.5 25.4482 17.5C21.5132 17.5 18.3232 20.69 18.3232 24.625C18.3232 28.56 21.5132 31.75 25.4482 31.75Z"
                        stroke="#3B1E1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33.3232 32.5L31.8232 31"
                        stroke="#3B1E1C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_201_3265">
                        <rect
                          width="36"
                          height="36"
                          fill="white"
                          transform="translate(26.2793) rotate(45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/cart">
                  <svg
                    width="52"
                    height="51"
                    viewBox="0 0 52 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_201_3274)">
                      <rect
                        x="26.1909"
                        y="0.707107"
                        width="35"
                        height="35"
                        transform="rotate(45 26.1909 0.707107)"
                        stroke="#3B1E1C"
                      />
                      <rect
                        x="26.1909"
                        y="50"
                        width="36"
                        height="36"
                        transform="rotate(45 26.1909 50)"
                        fill="#3B1E1C"
                      />
                      <path
                        d="M18.2349 17.5H19.5399C20.3499 17.5 20.9874 18.1975 20.9199 19L20.2974 26.47C20.1924 27.6925 21.1599 28.7425 22.3899 28.7425H30.3774C31.4574 28.7425 32.4024 27.8575 32.4849 26.785L32.8899 21.16C32.9799 19.915 32.0349 18.9025 30.7824 18.9025H21.0999"
                        stroke="#3B1E1C"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.9224 32.5C29.4401 32.5 29.8599 32.0803 29.8599 31.5625C29.8599 31.0447 29.4401 30.625 28.9224 30.625C28.4046 30.625 27.9849 31.0447 27.9849 31.5625C27.9849 32.0803 28.4046 32.5 28.9224 32.5Z"
                        stroke="#3B1E1C"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.9224 32.5C23.4401 32.5 23.8599 32.0803 23.8599 31.5625C23.8599 31.0447 23.4401 30.625 22.9224 30.625C22.4046 30.625 21.9849 31.0447 21.9849 31.5625C21.9849 32.0803 22.4046 32.5 22.9224 32.5Z"
                        stroke="#3B1E1C"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M23.4849 22H32.4849"
                        stroke="#3B1E1C"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_201_3274">
                        <rect
                          width="36"
                          height="36"
                          fill="white"
                          transform="translate(26.1909) rotate(45)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-wrp-sm">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.707107 19L19 0.707107L37.2929 19L19 37.2929L0.707107 19Z"
                      stroke="#3B1E1C"
                    />
                    <path
                      d="M19.413 24.8734C19.1863 24.9534 18.813 24.9534 18.5863 24.8734C16.653 24.2134 12.333 21.4601 12.333 16.7934C12.333 14.7334 13.993 13.0668 16.0397 13.0668C17.253 13.0668 18.3263 13.6534 18.9997 14.5601C19.673 13.6534 20.753 13.0668 21.9597 13.0668C24.0063 13.0668 25.6663 14.7334 25.6663 16.7934C25.6663 21.4601 21.3463 24.2134 19.413 24.8734Z"
                      stroke="#3B1E1C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.707107 19L19 0.707107L37.2929 19L19 37.2929L0.707107 19Z"
                      stroke="#3B1E1C"
                    />
                    <path
                      d="M18.6666 25C22.1644 25 24.9999 22.1645 24.9999 18.6667C24.9999 15.1689 22.1644 12.3333 18.6666 12.3333C15.1688 12.3333 12.3333 15.1689 12.3333 18.6667C12.3333 22.1645 15.1688 25 18.6666 25Z"
                      stroke="#3B1E1C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.6666 25.6667L24.3333 24.3333"
                      stroke="#3B1E1C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn nav-link"
                  href="/"
                  data-target="#menuModal"
                  data-toggle="modal"
                >
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0L38 19L19 38L0 19L19 0Z" fill="#3B1E1C" />
                    <path
                      d="M13 15.6667H25"
                      stroke="#FEF3E1"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 19H25"
                      stroke="#FEF3E1"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 22.3333H25"
                      stroke="#FEF3E1"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
