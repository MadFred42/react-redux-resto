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

const menuError = (err) => {
    return {
        type: 'MENU_ERROR',
        payload: err
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError
}