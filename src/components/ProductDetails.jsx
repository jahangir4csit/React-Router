import React from 'react'
import { useEffect, useState } from 'react';
import {useParams, useHistory} from "react-router-dom";

import Loader from './Loader';
import axios from 'axios';

const ProductDetails = (props) =>{
    const [dataLoad, setDataLoad] = useState(false);
    const [product, setProduct] = useState([]);

    const history = useHistory();
    const clickHandlar = (id)=>{
        history.push(`/product-edit/${id}`);
    }

    const params = useParams();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res) =>{
          setProduct(res.data)
          setDataLoad(true)
        })
        .catch((err) =>{
          console.log(err)
        })
      },[])
        
    return(
        <div className="product_details my60">
            {dataLoad === true ?
            <div className="container">
                <div className="row">
                    <div className="col col-9">
                        <div className="row">
                            <div className="col col-5">
                                <div className="product_details_thumb">
                                    <img src={product.image} alt={product.title} />
                                </div>
                            </div>
                            <div className="col col-7">
                                <div class="content-part margin-top-20">
                                    <span onClick={() => clickHandlar(params.id)} className="right edit"><i style={{color:'#FF8E78'}} className="ti-pencil-alt"></i> Edit</span>
                                    <h3 class="product-title">{product.title} </h3>
                                    <p class="price">${product.price}</p>
                                    <span class="rating ml-0">
                                        <i class="ti-star"></i>
                                        <i class="ti-star"></i>
                                        <i class="ti-star"></i>
                                        <i class="ti-star color-gray"></i>
                                        <i class="ti-star color-gray"></i>
                                    </span>
                                    <span class="review-text">3 reviews</span>
                                    <p class="specifications">SKU: <b>0014</b></p>
                                    <p class="specifications">AVAILABILITY: <b class="color-green">In Stock</b></p>
                                    <div class="d-flex">
                                        <span class="specifications">SIZE: </span>
                                        <ul class="size-list align-self-center pl-3">
                                            <li><a href="#">S</a></li>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">X</a></li>
                                            <li><a href="#">XL</a></li>
                                            <li><a href="#">XS</a></li>
                                        </ul>
                                    </div>
                                    <div class="d-flex">
                                        <span class="specifications">COLOR: </span>
                                        <ul class="color-list align-self-center">
                                            <li><a href="#"></a></li>
                                            <li><a href="#"></a></li>
                                            <li><a href="#"></a></li>
                                        </ul>
                                    </div>
                                    <p class="specifications">CATEGORY: <b>{product.category}</b></p>
                                    <div class="btn-wrapper d-flex">
                                        <div class="input-group">
                                            <div class="input-group-prepend align-self-center">
                                                <a class="btn btn-sm" id="minus-btn"><i class="ti-minus"></i></a>
                                            </div>
                                            <input type="number" id="qty_input" class="form-control text-right form-control-sm" min="1" value="1" disabled="true" />
                                            <div class="input-group-prepend align-self-center">
                                                <a class="btn btn-sm" id="plus-btn"><i class="ti-plus"></i></a>
                                            </div>
                                        </div>
                                        <div class="add-to-cart-style">
                                            <a href="#"><i class="ti-bag"></i> Add to cart</a>
                                        </div>
                                        </div>
                                        <div class="btn-wrapper">
                                            <a href="#" class="btn btn-buy">Buy it now</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-3"></div>
                </div>
            </div>
            : <Loader /> }
        </div>
    )
}
export default ProductDetails;