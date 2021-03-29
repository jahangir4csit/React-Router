
const initial = {
    products: [],
    cart: [],
    total: 0,
};

const CartReducer = (state=initial, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            let cart = action.payload;
            return {
                ...state,
                 cart: state.cart.concat(cart),
                 total: state.total + 1,
            };

        default: 
            return state;
    }
}
export default CartReducer;