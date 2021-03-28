import {createStore, combineReducers, compose} from 'redux';
import CartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';

const mainReducer = combineReducers({
    cartStore: CartReducer,
    productStore: productReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const store = createStore(mainReducer, composeEnhancers());
export default store;