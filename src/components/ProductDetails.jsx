import React from 'react'
import { useEffect, useState } from 'react';
import productData from '../data';
import {useParams} from "react-router-dom";
import Loader from './Loader';


const ProductDetails = () =>{
    const [dataLoad, setDataLoad] = useState({isLoad: false});
    const [product, setProduct] = useState({ productItem: productData });

    const productsList = product.productItem.map(item =>{
        return item
    })

    const params = useParams();
    const details = productsList[params.id]

    useEffect(() => {
        const timer = setTimeout(() => 
        setDataLoad({isLoad: true}), 
        1000);
        return () => clearTimeout(timer);
        }, []);
        
    return(
        <div className="product_details">
            
            <p>Product details</p>
            {dataLoad.isLoad ?
            <div className="product_details_info">
                <h3>{details.name}</h3>
                <p>Price: {details.price}</p>
                <p>Description: {details.description}</p>
                <p>Category: {details.category}</p>
            </div>
            : <Loader /> }
        </div>
    )
}
export default ProductDetails;