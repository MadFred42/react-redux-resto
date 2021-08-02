const initialState = {
    menu: [],
    loading: true
}

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUSETED':
            return {
                menu: state.menu,
                loading: true
            };
        case 'MENU_ERROR':
            return {
                menu: [state.menu],
                loading: true
            };    
        default:
            return state;
    } 
}

export default reducer;