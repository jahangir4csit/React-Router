export const storeAllProducts = (data)=>{
    return{
        type: 'STORE_ALL_PRODUCTS',
        payload: data, 
    }
}

export const storeSelectedProduct = (data)=>{
    return{
        type: 'STORE_SELECTED_PRODUCT',
        payload: data, 
    }
}