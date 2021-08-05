const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUSETED'
    }
};

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    }
};

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_DELETE_FROM_CART',
        payload: id
    }
};

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}

const totalPrice = () => {
    return {
        type: 'TOTAL_PRICE'
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart,
    totalPrice
}