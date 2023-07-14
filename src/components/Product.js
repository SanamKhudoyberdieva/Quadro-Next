import React from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link';
import { getImage, getName, getPrice } from '@/plugins/custom';
import { addToFavorites } from '@/store/actions';

const Product = ({ key = "", product = {} }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favoritesReducer);
    console.log(favorites)
    return (
        <div className="es-product-wrapper" key={key}>
            <div className="es-carusel-item">
                <div className="es-carusel-img">
                    <Link href={`/product/${product.url}`}>
                        {!product.image ? (<Image className="lazy img-fluid" status="loading" src={require("../assets/img/product_2.jpg")} alt="product" /> ) :
                        ( <Image className="lazy img-fluid" status="loading" src={cdnUrl + "products/" + getImage(product) } alt="product" /> )}
                    </Link>
                </div>
                <button className={"btn btn-favourite" + " " + (favorites.find((i) => i == product.id) ? "active" : "")} 
                    onClick={() => dispatch(addToFavorites(product.id))}>
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_40_2865)">
                        <rect x="26" y="1.61885" width="35" height="35" transform="rotate(45 26 1.61885)" fill="white" stroke="#3B1E1C"/>
                        <rect x="26" y="50.9117" width="36" height="36" transform="rotate(45 26 50.9117)" fill="#3B1E1C"/>
                        <path d="M26.0089 32.5192C25.7539 32.6092 25.3339 32.6092 25.0789 32.5192C22.9039 31.7767 18.0439 28.6792 18.0439 23.4292C18.0439 21.1117 19.9114 19.2367 22.2139 19.2367C23.5789 19.2367 24.7864 19.8967 25.5439 20.9167C26.3014 19.8967 27.5164 19.2367 28.8739 19.2367C31.1764 19.2367 33.0439 21.1117 33.0439 23.4292C33.0439 28.6792 28.1839 31.7767 26.0089 32.5192Z" stroke="#3B1E1C" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_40_2865">
                        <rect width="36" height="36" fill="white" transform="translate(26 0.911743) rotate(45)"/>
                        </clipPath>
                        </defs>
                    </svg>                                    
                </button>
            </div>
            <div className="es-carusel-info">
                <div className="es-product-title">
                    <Link href={`/product/${product.url}`}>{getName(product)} с карт крокетами</Link>
                </div>
                <div className="es-pro-price">{getPrice(product)}</div>
                <button className="btn es-btn-cart">В корзину</button>
            </div>
        </div>
    )
}

export default Product