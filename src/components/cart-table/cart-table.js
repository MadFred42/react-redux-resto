import React from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { deleteFromCart, increaseItem, decreaseItem, orderMade } from '../../actions';

import './cart-table.scss';

const CartTable  = ({ items, deleteFromCart, increaseItem, decreaseItem, RestoService, orderMade }) => {
    
    if (items.length === 0) {
        return   <div className="cart__title">Ваша корзина пуста:</div>
    }

    if (!items) {
        return   <div className="cart__title">Спасибо за ваш заказ, мы немедленно начнем его готовить</div>
    }

    function btnOrder(id) {
        deleteFromCart(id);
        orderMade();
    }
    
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const { title, price, url, id, count } = item;
                        console.log(price);
                        console.log(count);
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price * count}$</div>
                                <div onClick={() => increaseItem(id)} className='cart__increase'>&#9650;</div>
                                <div onClick={() => decreaseItem(id)} className='cart__decrease'>&#9660;</div>
                                <div className='cart__item-counter'>{count}</div>
                                <div onClick={() => btnOrder(id)} className="cart__close">&times;</div>
                            </div>
                            
                        )
                    })
                }
                
            </div>
            <button onClick={() => {RestoService.setOrder(makeOrder(items))}} className='order'>Оформить заказ</button>
        </>
    );
};

const makeOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            name: item.title,
            qtty: item.count
        }
    })
    return newOrder
};

const mapStateToProps = ({ items }) => {
    return {
        items
    }
};

const mapDispatchToProps = {
    deleteFromCart,
    increaseItem,
    decreaseItem,
    orderMade
}    

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));