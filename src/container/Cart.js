import React from 'react'
import {useSelector} from 'react-redux';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {},
    table: {
      width: '100%',
    },
    cartTable: {
        boxShadow: 'none',
        marginBottom: '3rem',
    },
    button: {
        borderRadius: '0px',
        fontSize: '16px',
        letterSpacing: '0px',
        lineHeight: '1.5',
        color: '#fff',
        padding: '17px 24px',
        background: '#141414',
        textTransform: 'capitalize',
        fontWeight: '500',
        boxShadow: 'none',
        '&:hover':{
            background: '#141414',
        }
    },
    btn_outline:{
        background: 'transparent',
        border: '1px solid #CFCFCF',
        color: '#000',
        boxShadow: 'none',
        '&:hover':{
            background: 'transparent',
        }
    },
    cuponInput:{
        marginTop: theme.spacing(2),
        '& input':{
            backgroundColor: '#fff',
        }
    },
    mb3: {
        marginBottom: theme.spacing(3),
    },
    my3: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
  }));

export default function Cart(){
    const classes = useStyles();

    const cartReducer = useSelector((state)=> state);
    const cartItem = cartReducer.cartStore.cart;
    const rows = cartItem.map((item)=> createRow(item.name,'1',item.price))

    const SHIPPING_CHARGE = 50.00;

    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
      }
      
      function priceRow(qty, unit) {
        return qty * unit;
      }
      
      function createRow(desc, qty, unit) {
        const price = priceRow(qty, unit);
        return { desc, qty, unit, price };
      }
      
      function subtotal(items) {
        return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
      }

    const invoiceSubtotal = subtotal(rows);
    const invoiceShipping = SHIPPING_CHARGE;
    const invoiceTotal = invoiceShipping + invoiceSubtotal;
        
    return(
        <div className="product_details my60">
            <Container className={classes.root} maxWidth="lg">
                <Grid container direction="row" spacing={4}>
                    <Grid item xs={12} md={9}>
                        <Grid container direction="column">
                            <Grid item xs={12}>
                                <TableContainer component={Paper} className={classes.cartTable}>
                                    <Table className={classes.table} aria-label="spanning table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Item</TableCell>
                                                <TableCell align="right">Price</TableCell>
                                                <TableCell align="right">Qty</TableCell>
                                                <TableCell align="right">Total</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.desc}>
                                                <TableCell>{row.desc}</TableCell>
                                                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                                                <TableCell align="right">{row.qty}</TableCell>
                                                <TableCell align="right">{row.unit}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                            <Grid item xs={12}>
                            <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            >
                                <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}>
                                    Continue Shopping
                                </Button>
                                <Button
                                variant="outlined"
                                color="primary"
                                className={`${classes.button} ${classes.btn_outline}`}>
                                    Clear Shopping Cart
                                </Button>
                    
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className="summary margin-top-20">
                            <h6 className="title">Summary</h6>
                            <h6 className="subtitle">Estimate Shipping and Tax</h6>
                            <p className="destination">Enter your destination to get a shipping estimate.</p>
                            <div className={classes.mb3}>
                                <Box display="flex" justifyContent="space-between" className="total">
                                    <Box m={0} component="p">Subtotal</Box>
                                    <Box m={0} component="p">
                                        $
                                        <Typography component="span" className="total-cart">
                                            {ccyFormat(invoiceSubtotal)}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" justifyContent="space-between" className="total">
                                    <Box m={0} component="p">Shipping</Box>
                                    <Box m={0} component="p">
                                        $
                                        <Typography component="span" className="total-cart">
                                            {ccyFormat(SHIPPING_CHARGE)}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" justifyContent="space-between" className="total">
                                    <Box m={0} component="p">Order Total</Box>
                                    <Box m={0} component="p">
                                        $
                                        <Typography component="span" className="total-cart">
                                            {ccyFormat(invoiceTotal)}
                                        </Typography>
                                    </Box>
                                </Box>
                            </div>

                            <form noValidate autoComplete="off">
                                <Typography variant="h4" component="h4">Apply Discount Code</Typography>
                                <TextField
                                className={classes.cuponInput} 
                                id="discountInput" 
                                label="Enter discount code" 
                                variant="filled" 
                                fullWidth />
                            </form>
                            <div className="btn-wrapper">
                                <Button
                                variant="contained"
                                color="primary"
                                className={`${classes.button} ${classes.my3}`} 
                                fullWidth>
                                    Proceed To Checkout
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}