//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import Loader from './components/Loader';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Page404 from './components/404.jsx';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';

import './App.css';

function App() {

  const [dataLoad, setDataLoad] = useState({isLoad: false});
  useEffect(() => {
    const timer = setTimeout(() => 
    setDataLoad({isLoad: true}), 
    1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {dataLoad.isLoad ?
          <div className="frontpage">
            <Navbar />
          </div>
        : <Loader /> }

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product-details/:id">
            <ProductDetails />
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
