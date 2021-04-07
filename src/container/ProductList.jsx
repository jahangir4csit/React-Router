import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {storeAllProducts} from '../store/actions/productAction';
import Loader from '../components/ui/Loader';
import Products from './Products';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  productGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Home = (props) => {

  const classes = useStyles();
  const theme = useTheme();

  const [dataLoad, setDataLoad] = useState(false);
  const dispatch = useDispatch();
  const {productList} = useSelector((state)=> state.productStore);

    useEffect(()=>{
      axios.get('http://54.162.199.74/products')
      .then((res) =>{
        setDataLoad(true)
        dispatch(storeAllProducts(res.data));
      })
      .catch((err) =>{
        console.log(err.message)
      })
    },[])

    const productsList = productList.map((item)=>{
        return(
          <Products
            key={Math.random()}
            productInfo={item} />
        )
      })

    return(

        <Container className={classes.productGrid} maxWidth="lg">
          {dataLoad === true ?
          <Grid container spacing={4} className="home">
            <Grid item xs={12} className="section-title text-center">
              <Typography variant="h3" component="h3">
                NEW ARRIVALS
              </Typography>
            </Grid>
            <Grid container spacing={4} className="home">
              {productsList}
            </Grid>
          </Grid>
          : <Loader />
          }
        </Container>

    )
}
export default Home;