import React from 'react';
import {BrowserRouter as Router, Route, Link, useHistory} from "react-router-dom";
import ProductDetails from './ProductDetails';


const Products = (props) =>{
    const history = useHistory();
    const clickHandlar = (id)=>{
        history.push(`/product-details/${id}`);
    }

    return(
        <div className="col col-4">
            <div id={props.key} className="product mt40" key={props.key}>
                <div className="thumb">
                    <img src={props.productInfo.image} alt={props.productInfo.title} />
                    <span class="sale">SALE 13%</span>
                    <span class="new mt35">NEW</span>
                    <ul class="cart-action-02">
                        <li><a href="#"><i class="ti-heart"></i></a></li>
                        <li class="stone-go-top"><Link onClick={() => clickHandlar(props.productInfo.id)}><i class="ti-eye"></i></Link></li>
                    </ul>
                </div>
                <div class="content text-left">
                    <div class="content-bottom">
                        <span class="brand">CATEGORY:{props.productInfo.category}</span>
                        <ul class="justify-content-start mb10">
                            <li><a href="#"><i class="ti-star"></i></a></li>
                            <li><a href="#"><i class="ti-star"></i></a></li>
                            <li><a href="#"><i class="ti-star"></i></a></li>
                            <li><a href="#"><i class="ti-star color-gray"></i></a></li>
                            <li><a href="#"><i class="ti-star color-gray"></i></a></li>
                        </ul>
                        <h6 class="title stone-go-top">
                            <Link onClick={() => clickHandlar(props.productInfo.id)}>{props.productInfo.title}</Link>
                        </h6>
                        <div class="d-flex position-relative">
                            <div class="content-hover-cart">
                                <a class="add-to-cart" href="#">
                                    <i class="ti-bag"></i> Add to cart
                                </a>
                            </div>
                            <div class="content-cart">
                                <a href="#"><i class="ti-bag"></i></a>
                            </div>
                            <div class="content-price d-flex flex-column align-self-center">
                                <span class="old-price">$300</span><span class="new-price">${props.productInfo.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products