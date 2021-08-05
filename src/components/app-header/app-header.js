import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addedToCart } from '../../actions';

import './app-header.scss';

const AppHeader = ({ totalPrice }) => {

    return (
        <header className="header">
            <span style={{color: 'white', transform: 'translateX(-900px)', fontSize: '25px'}}>Fedor Lyust's italian hruchevo</span>
            <Link to='/' className="header__link">
                Menu
            </Link>
            <Link to='/cart' className="header__link" >
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {totalPrice}$
            </Link>
        </header>
    )
};

const mapStateToProps = ({totalPrice}) => {
    return {
        totalPrice
    }
};

const mapDispatchToProps = {
    addedToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);