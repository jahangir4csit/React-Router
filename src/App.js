//import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import Home from './container/Home';
import About from './container/About.jsx';
import Contact from './container/Contact.jsx';
import Page404 from './container/404.jsx';
import Header from './components/layout/Header';
import Footer from './components/layout/footer';
import MainSlide from './components/layout/MainSlide';
import Breadcrumb from './components/layout/Breadcrumb';
import ProductDetails from './container/ProductDetails';
import Cart from './container/Cart';

import CreateProduct from './components/axios/CreateProduct';
import EditProduct from './components/axios/EditProduct';

import './App.css';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <div className="frontpage">
            <Header />
          </div>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <MainSlide />
              <Home />
            </Route>
            <Route exact path="/product-details/:id">
              <Breadcrumb title="SHOP" subtitle="Details" />
              <ProductDetails />
            </Route>
            <Route exact path="/cart">
              <Breadcrumb title="SHOPPING CART" subtitle="Shoping Cart" />
              <Cart />
            </Route>
            <Route exact path="/create">
              <Breadcrumb title="Product Create" subtitle="Creat" />
              <CreateProduct />
            </Route>
            <Route exact path="/product-edit/:id">
              <Breadcrumb title="Product Edit" />
              <EditProduct />
            </Route>
            <Route path='*'>
              <Page404 />
            </Route>
            
          </Switch>
        
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
