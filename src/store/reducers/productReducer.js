const initial = {
    selectedProduct: {},
    productList: [],
};
const productReducer = (state=initial, action)=>{
    switch(action.type){
        case 'STORE_SELECTED_PRODUCT':
            return {...state, selectedProduct: action.payload};
        case 'STORE_ALL_PRODUCTS':
            return {...state, productList: action.payload}; 
        default: 
            return state;
    }
}
export default productReducer;