import React from 'react';
import {Link} from "react-router-dom";
import logo from '../logo.svg';

const Navabar = ()=>{
    return(
      <header className="header">
        <div className="header-top">
          <div className="container-fluid">
          <div class="row">
            <div class="column">
              <div className="contact">
                <Link to="/"><i class="ti-mobile"></i> (939) 353-1107</Link >
                <Link to="/"><i class="ti-email"></i> support@example.com</Link >
              </div>
            </div>
            <div class="column">
              <div className="shipping text-center">
                <p>FREE SHIPPING - on all orders over $35*</p>
              </div>
            </div>
            <div class="column">
              <div className="social">
                <ul class="nav-social justify-content-end">
                  <li><Link to="/"><i class="ti-facebook"></i></Link ></li>
                  <li><Link to="/"><i class="ti-instagram"></i></Link ></li>
                  <li><Link to="/"><i class="ti-pinterest"></i></Link ></li>
                  <li><Link to="/"><i class="ti-youtube"></i></Link ></li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="main-nav">
          <nav class="navbar navbar-area navbar-expand-lg nav-style-01">
            <div class="container-fluid nav-container">
              <div class="row">
                <div class="column order-1 align-self-center">
                  <div class="logo">
                    <Link to="/"><img width="130px" src={logo} alt="logo" /></Link>
                  </div>
                </div>
                <div class="column column-50 text-center">
                  <div class="collapse navbar-collapse" id="shop-menu">
                    <ul class="navbar-nav menu-open">
                      <li class="menu-item-has-children">
                        <Link to="/">Home</Link>
                      </li>
                      <li class="menu-item-has-children">
                        <Link to="/">Shop <i class="ti-angle-down"></i></Link>
                        <ul class="sub-menu">
                          <li><Link to="/">Shop Grid</Link></li>
                          <li><Link to="/">Shop List</Link></li>
                          <li><Link to="/">Shop Full</Link></li>
                        </ul>
                      </li>
                      <li class="menu-item-has-children">
                      <Link to="/">Categories <i class="ti-angle-down"></i></Link>
                        <ul class="sub-menu">
                          <li><Link to="/">Blog</Link></li>
                          <li><Link to="/">Blog Details</Link></li>
                          <li><Link to="/">Single Product</Link></li>
                          <li><Link to="/">Shoping Cart</Link></li>
                          <li><Link to="/">FAQ</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                  </div>
                </div>
                <div class="column justify-content-end d-flex">
                  <div class="nav-right-part">
                    <ul>
                      <li><Link to="/" id="search"><i class="ti-search"></i></Link></li>
                      <li><Link to="/"><i class="ti-heart"></i><span class="badge">2</span></Link></li>
                      <li class="has-dropdown"><Link to="/"><i class="ti-bag"></i>
                        <span class="badge  total-count">0</span></Link>
                        <ul>
                          <span class="show-cart"></span>
                          <li>
                            <h6><span>Total price: $</span><span class="total-cart">0</span></h6>
                            <div class="btn-wrapper"> <Link to="/" class="btn btn-cart">Go to cart</Link></div>
                          </li>
                        </ul>
                      </li>
                      <li class="d-none d-lg-block"><Link to="/" id="navigation-button"><i class="ti-align-right"></i></Link></li>
                    </ul>
                  </div>
                  <div class="responsive-mobile-menu">
                    <div class="menu toggle-btn d-block d-lg-none" data-toggle="collapse" data-target="#shop-menu" aria-expanded="false" role="button">
                      <div class="icon-left"></div>
                      <div class="icon-right"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
}

export default Navabar;