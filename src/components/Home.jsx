import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import productData from '../data';
import Loader from './Loader';
import Products from './Products';
import ProductDetails from './ProductDetails';

const Home = (props) => {
    const [pageInfo, setPageInfo] = useState('All Products');
    const [dataLoad, setDataLoad] = useState({isLoad: false});
    const [productDetails, setProductDetails] = useState({selectedProduct: null });
    const [product, setProduct] = useState({ productItem: productData });

    useEffect(() => {
      const timer = setTimeout(() => 
      setDataLoad({isLoad: true}), 
      1000);
      return () => clearTimeout(timer);
    }, []);

    const onProductSelect = productInfo =>{
      setProductDetails({selectedProduct: productInfo})
      setPageInfo('Product Details');
    }

    const productsList = product.productItem.map((item,index)=>{
      
        return(
          <Products
            key={index}
            productInfo={item}
            id={index} />
        )
      })

    return(
        <div className="container products_list">
          {dataLoad.isLoad ?
            <div className="home">
              <h2>{pageInfo}</h2>
              <div className="product_display">
                {productsList}
              </div>
            </div>
            : <Loader /> 
          }

      <Router>
        <Switch>
          <Route exact path="/product-details/:id">
            <ProductDetails data={productsList} />
          </Route>  
        </Switch>
      </Router>

      </div>
    )
}
export default Home;