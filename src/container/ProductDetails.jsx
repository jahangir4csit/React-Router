import React from 'react'
import { useEffect, useState } from 'react';
import {useParams, useHistory} from "react-router-dom";
import {storeSelectedProduct} from '../store/actions/productAction';
import {addToCart} from '../store/actions/cartAction';
import {useSelector, useDispatch} from 'react-redux';
import ProductError from './ProductError';
import Loader from '../components/ui/Loader';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Ratings from '../components/ui/Ratings';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cartButton: {
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover':{
            textDecoration: 'none',
        }
    },
    thumb: {
        maxHeight: '450px',
    }
  }));

const ProductDetails = (props) =>{

    const classes = useStyles();
    const theme = useTheme();

    const [error, setError] = useState(1);
    const [dataLoad, setDataLoad] = useState(false);
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch();
    const {selectedProduct} = useSelector((state)=> state.productStore);
    const {cartStore} = useSelector((state)=> state.cartStore);

    const history = useHistory();
    const clickHandlar = (id)=>{
        history.push(`/product-edit/${id}`);
    }
    
    const params = useParams();

    useEffect(()=>{
        axios.get(`http://54.162.199.74/products/${params.id}`)
        .then((res) =>{
          if(res.data==null){
            setError(2)
          }else{
            setProduct(res.data)
            dispatch(storeSelectedProduct(res.data));
            setDataLoad(true)
            setError(0)
          }
        })
        .catch((err) =>{
            setError(1)
        })
      },[])

      const addCartItem = (id,name,price,img) =>{
        // dispatch({
        //     type: 'ADD_TO_CART',
        //     payload: cartStore.cart ? cartStore.cart + 1 : 1,
        // }); 
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: id,
                name: name,
                price: price,
                img: img,
            }
        });
      }
        
    return(
        <div className="product_details my60">
            {dataLoad === true && error ===0?
            <Container className={classes.productDetails} maxWidth="lg">
                <Grid container direction="row">
                    <Grid item xs={12} sm={9}>
                        <Grid container direction="row">
                            <Grid item xs={12} sm={5}>
                                <div className="product_details_thumb">
                                    <img className={classes.thumb} src={selectedProduct.image} alt={selectedProduct.title} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <div class="content-part margin-top-20">
                                    <span onClick={() => clickHandlar(params.id)} className="right edit"><i style={{color:'#FF8E78'}} className="ti-pencil-alt"></i> Edit</span>
                                    <h3 class="product-title">{selectedProduct.title} </h3>
                                    <p class="price">${selectedProduct.price}</p>
                                    <Ratings />
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
                                    <p class="specifications">CATEGORY: <b>{selectedProduct.category}</b></p>
                                    <div class="btn-wrapper d-flex">
                                        <div class="input-group">
                                            <div class="input-group-prepend align-self-center">
                                                <a class="btn btn-sm" id="minus-btn"><RemoveSharpIcon /></a>
                                            </div>
                                            <input type="number" id="qty_input" class="form-control text-right form-control-sm" min="1" value="1" disabled="true" />
                                            <div class="input-group-prepend align-self-center">
                                                <a class="btn btn-sm" id="plus-btn"><AddSharpIcon /></a>
                                            </div>
                                        </div>
                                        <div class="add-to-cart-style">
                                            <Link className={classes.cartButton} 
                                            onClick={(data)=>addCartItem(selectedProduct.id,selectedProduct.title,selectedProduct.price,selectedProduct.image)}>
                                                <LocalMallOutlinedIcon /> Add to cart</Link>
                                        </div>
                                        </div>
                                        <div class="btn-wrapper">
                                        <Link href="#" className="btn btn-buy">Buy it now</Link>
                                        </div>
                                    </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={3}></Grid>
                </Grid>
            </Container>
            : error===2 ? <ProductError /> : <Loader /> }
        </div>
    )
}
export default ProductDetails;