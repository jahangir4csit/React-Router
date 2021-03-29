import React from 'react';
import { useState } from 'react';
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import logo from '../../logo.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import { Grow } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  toolbarTop: {
    backgroundColor: '#F5F5F5',
    padding: '6px 25px',
    position: 'relative',
    minHeight: 'auto',
    '& p':{
      color: '#6C6C6C',
      fontSize: '14px',
      textTransform: 'uppercase',
      marginBottom: '0',
      '& small':{
        fontWeight: '400',
        fontSize: '14px',
        textTransform: 'none',
      }
    },
  },
  contact: {
    color: '#A4A4A4',
    fontSize: '13px',
    '& span': {
      marginLeft: '5px',
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'center',
    },
  },
  socialLink: {
    '& a': {
      color: '#A4A4A4',
      fontSize: '17px',
      margin: '0 5px',
      '&:hover':{
        color: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: 'center',
    }
  },
  tabContainer: {
    background: 'transparent',
    border: 0,
    marginLeft: 'auto',
    paddingTop: '28px',
    paddingBottom: '28px',
  },
  tab: {
    color: '#000',
    opacity: 1,
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '&:focus': {
      color: theme.palette.primary.main,
    }
  },
  cartNav: {
    '& button':{
      '&:hover': {
        color: theme.palette.primary.main,
        background: 'transparent',
      },
      '&:focus': {
        color: theme.palette.primary.main,
        background: 'transparent',
      }
    },
    '& svg': {
      fontSize: '26px',
    },
  },
  badge: {
    '& span': {
      color: '#fff',
    }
  },
  mainNavContainer: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: '12px',
      paddingBottom: '12px'
    },
  },
  mainNav: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'row-reverse',
    },
  },
  navContainer: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'flex-end',
    },
  },
}));

export default function Header(){

  const cartReducer = useSelector((state)=> state);
  const cartItem = cartReducer.cartStore.cart;
  const addedItem = cartItem.map((item)=> <MenuItem>{item.name} - Price: {item.price}</MenuItem> )

  const [anchorEl, setAnchorEl] = useState(null);
  const [open,setOpen] = useState(false);
  const[value,setValue] = useState(0)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false)
  };
  const handleChange = (e, value) =>{
    setValue(value)
  }
  const openCart = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDrawer, setOpenDrawer] = useState(false);

  const tabs = (
    <React.Fragment>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabContainer}>
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab className={classes.tab} component={Link} to="/shop" label="Shop" />
        <Tab className={classes.tab} component={Link} to="/categories" label="Categories" />
        <Tab className={classes.tab} component={Link} to="/about" label="About" />
        <Tab className={classes.tab} component={Link} to="/contact" label="Contact" />
      </Tabs>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer 
      disableBackdropTransition={!iOS} 
      disableDiscovery={iOS} 
      open={openDrawer}
      onClose={()=>setOpenDrawer(false)} 
      onOpen={()=>setOpenDrawer(true)}
      classes={{paper: classes.drawerWrap}}>
        <List disablePadding>
          <h5>Menu</h5>
          <Divider />
          <ListItem 
          className={classes.drawerItem} 
          onClick={()=> {setOpenDrawer(false); setValue(0)}} 
          component={Link} to="/"
          selected={value === 0}>
            <ListItemText 
            className={value===0 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} 
            disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem 
          className={classes.drawerItem} 
          onClick={()=> {setOpenDrawer(false); setValue(1)}} 
          component={Link} to="/shop"
          selected={value === 1}>
            <ListItemText
            className={value===1 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} 
            disableTypography>Shop</ListItemText>
          </ListItem>
          <ListItem 
          className={classes.drawerItem} 
          onClick={()=> {setOpenDrawer(false); setValue(2)}}
          component={Link} to="/categories"
          selected={value === 2}>
            <ListItemText 
            className={value===2 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem}
            disableTypography>Categories</ListItemText>
          </ListItem>
          <ListItem 
          className={classes.drawerItem} 
          onClick={()=> {setOpenDrawer(false); setValue(3)}}  
          component={Link} to="/about"
          selected={value === 3}>
            <ListItemText 
            className={value===3 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} 
            disableTypography>About</ListItemText>
          </ListItem>
          <ListItem 
          className={classes.drawerItem} 
          onClick={()=> {setOpenDrawer(false); setValue(5)}} 
          component={Link} to="/contact"
          selected={value === 5}>
            <ListItemText
            className={value===5 ? [classes.drawerItem,classes.drawerItemSelected] : classes.drawerItem} 
            disableTypography>Contact</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.DrawerIconContainer} onClick={()=>setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  const trigger = useScrollTrigger();

    return(
        <AppBar position="static" className={classes.root}>
          <Toolbar component="div" className={classes.toolbarTop}>
            <Grid container direction="row" justify="center" alignItems="center">
              <Grid item  md={4} xs={12} >
                <Grid container spacing={2} className={classes.contact}>
                  <Grid item style={{ display: "flex", alignItems: "center" }}>
                    <CallOutlinedIcon />
                    <Typography variant="span">(939) 353-1107</Typography>
                  </Grid>
                  <Grid item style={{ display: "flex", alignItems: "center" }}>
                    <EmailOutlinedIcon />
                    <Typography variant="span">support@example.com</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item  md={4} xs={12}>
                <Typography paragraph align="center">FREE SHIPPING - <small>on all orders over $35*</small></Typography>
              </Grid>
              <Grid item md={4} xs={12} >
                <Typography component="div" className={classes.socialLink} align="right">
                  <Link href="#">
                    <FacebookIcon />
                  </Link>
                  <Link href="#">
                    <InstagramIcon />
                  </Link>
                  <Link href="#">
                    <PinterestIcon />
                  </Link>
                  <Link href="#">
                    <YouTubeIcon />
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
          <Toolbar component="nav" variant="dense" className={classes.mainNavContainer}>
            <Grid container direction="row" alignItems="center">
              <Grid item md={3} xs={4}>
                <div className={classes.logo}>
                  <Link to="/"><img width="130px" src={logo} alt="logo" /></Link>
                </div>
              </Grid>
              <Grid item md={9} xs={8}>
                <Grid container direction="row" alignItems="center" className={classes.mainNav}>
                  <Grid item md={8} xs={2}>
                    <Grid container className={classes.navContainer} direction="row" alignItems="center" justify="center">
                      <Grid item>
                        {matches ? drawer : tabs}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={4} xs={10}>
                    <Grid container className={classes.cartNav} direction="row" justify="flex-end" alignItems="center">
                      <Grid item>
                        <IconButton aria-label="search" color="inherit">
                          <SearchIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton aria-label="show favourite item" color="inherit">
                          <Badge badgeContent={4} color="primary" className={classes.badge}>
                            <FavoriteBorderIcon />
                          </Badge>
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton aria-label="show cart item" color="inherit"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}>
                          <Badge badgeContent={cartReducer.cartStore.total} color="primary" className={classes.badge}>
                            <LocalMallOutlinedIcon />
                          </Badge>
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={openCart}
                          onClose={handleClose}
                        >
                          {addedItem}
                          <MenuItem onClick={handleClose}>View Cart</MenuItem>
                        </Menu>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              
            </Grid>
          </Toolbar>
      
        </AppBar>
    )
}
