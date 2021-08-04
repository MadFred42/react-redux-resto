import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({ menuList, onAddToCart }) => {
    const {title, url, category, price} = menuList;

    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt="food" />
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
            <span className={`menu__category_Img ${category}`} />
        </li>
    )
}

export default MenuListItem;