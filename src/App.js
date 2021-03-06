//import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Page404 from './components/404.jsx';
import Navbar from './components/Navbar';
import MainSlide from './components/MainSlide';
import Breadcrumb from './components/Breadcrumb';
import ProductDetails from './components/ProductDetails';

import CreateProduct from './components/axios/CreateProduct';
import EditProduct from './components/axios/EditProduct';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="frontpage">
          <Navbar />
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
            <Breadcrumb title="Product Details" />
            <ProductDetails />
          </Route>
          <Route exact path="/create">
            <Breadcrumb title="Product Create" />
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
  );
}

export default App;
