const initialState = {
    menu: [],
    loading: true,
    error: false,
    items:[],
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUSETED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            };
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            };    
        case 'ITEM_ADD_TO_CART':
            const id = action.payload; 
            const item = state.menu.find(item => item.id === id);
            const elem = state.items.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                count: 1
            };

            if (elem) {
                Object.assign( {}, elem, { count: elem.count++ } );
                return {
                    ...state
                };
            }    

            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            };
        case 'ITEM_DELETE_FROM_CART':
            const indx = action.payload;   
            const itemIndex = state.items.findIndex(item => item.id === indx);

            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]
            }
        case 'TOTAL_PRICE':
            const price = state.items.map(item => item.price * item.count);
            const totalPrice = price.reduce((accumulator, currentValue) => accumulator + currentValue);
            
            return{
                ...state,
                totalPrice
            }
        default:
            return state;
    } 
}

export default reducer;