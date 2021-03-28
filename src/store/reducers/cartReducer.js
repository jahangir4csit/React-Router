
const initial = {
    products: [],
    cart: [],
    total: 0,
};

const CartReducer = (state=initial, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                 cart: action.payload,
                 total: state.total + 1,
            };

        default: 
            return state;
    }
}
export default CartReducer;