import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, menuError, addedToCart, totalPrice } from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {
    
    componentDidMount() {
        this.props.menuRequested();

        const { RestoService } = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(error => this.props.menuError());
    }

    onAddToCart(id) {
        this.props.addedToCart(id);
        this.props.totalPrice();
    }

    render() {
        const { menuItems, loading, error, addedToCart } = this.props;
        console.log(this.props);
        if (error) {
            return <Error />
        }

        if (loading) {
            return <Spinner />
        }

        const content = menuItems.map(menuItem => {
                return <MenuListItem 
                            key={menuItem.id} 
                            menuList={menuItem}
                            onAddToCart={() => addedToCart(menuItem.id)} />
            })
        return (
           <View item={content} />
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    };
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    totalPrice
}    

const View = ({item}) => {
    return (
        <ul className="menu__list">
            {item}
        </ul>
    )
} 

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));