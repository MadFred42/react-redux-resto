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
            const newItemIdex = state.items.findIndex(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                count: 1
            };

            if (elem) {
                const newItem = {
                    title: elem.title,
                    price: elem.price,
                    url: elem.url,
                    id: elem.id,
                    count: elem.count + 1
                }
                
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, newItemIdex),
                        newItem,
                        ...state.items.slice(newItemIdex + 1),
                    ],
                    totalPrice: state.totalPrice + item.price
                };
            }   
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + item.price
            };
        case 'ITEM_DELETE_FROM_CART':
            const indx = action.payload;   
            const itemDel = state.items.find(item => item.id === indx)
            const itemIndex = state.items.findIndex(item => item.id === indx);

            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                totalPrice: state.totalPrice - itemDel.price
            };
        case 'INCREASE_ITEM':
            const itemId = action.payload;
            const itemIdIncr = state.items.find(item => item.id === itemId);
            const newItemIncIndx = state.items.findIndex(item => item.id === itemId);
            const itemIncr = {
                title: itemIdIncr.title,
                price: itemIdIncr.price,
                url: itemIdIncr.url,
                id: itemIdIncr.id,
                count: itemIdIncr.count + 1
            }
            return {
                ...state,
                items: [
                    ...state.items.slice(0, newItemIncIndx),
                    itemIncr,
                    ...state.items.slice(newItemIncIndx + 1),
                ],
                totalPrice: state.totalPrice + itemIncr.price
            };
        case 'DECREASE_ITEM':
            const itemDecId = action.payload;
            const itemIdDec = state.items.find(item => item.id === itemDecId);
            const newItemDecIndx = state.items.findIndex(item => item.id === itemDecId);
            const itemDec = {
                title: itemIdDec.title,
                price: itemIdDec.price,
                url: itemIdDec.url,
                id: itemIdDec.id,
                count: itemIdDec.count - 1
            }
            
            if (itemDec.count === 0) {
                
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, newItemDecIndx),
                        ...state.items.slice(newItemDecIndx + 1),
                    ],
                    totalPrice: state.totalPrice - itemDec.price
                }
            } 
                       
            return {
                ...state,
                items: [
                    ...state.items.slice(0, newItemDecIndx),
                    itemDec,
                    ...state.items.slice(newItemDecIndx + 1),
                ],
                totalPrice: state.totalPrice - itemDec.price
            };
        case 'ORDER_MADE':
            return {
                ...state,
                items: []
            };                
            
        default:
            return state;
    } 
}

export default reducer;