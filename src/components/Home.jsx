import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import Loader from './Loader';
import Products from './Products';
import ProductDetails from './ProductDetails';
import axios from 'axios';

const Home = (props) => {
    const [dataLoad, setDataLoad] = useState(false);
    const [product, setProduct] = useState([]);

    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')
      .then((res) =>{
        setProduct(res.data)
        setDataLoad(true)
      })
      .catch((err) =>{
        console.log(err.message)
      })
    },[])

    const productsList = product.map((item,index)=>{
      
        return(
          <Products
            key={index}
            productInfo={item} />
        )
      })

    return(
        <div className="container products_list">
          {dataLoad === true ?
            <div className="home py-1">
              <div className="section-title text-center">
                <h3>NEW ARRIVALS</h3>
              </div>
              <div className="product_display">
                {productsList}
              </div>
            </div>
            : <Loader /> 
          }

      </div>
    )
}
export default Home;