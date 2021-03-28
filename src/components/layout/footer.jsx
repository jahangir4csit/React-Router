import React from 'react';

const Footer = ()=>{
    return(
        <footer className="footer-area padding-top-70 margin-top-70">
            <div className="footer-top padding-bottom-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget_nav_menu">
                                <h4 className="widget-title">CATEGORIES</h4>
                                <ul className="stone-go-top">
                                    <li><a href="#/collection">Clothing</a></li>
                                    <li><a href="#/collection-list">Accessories</a></li>
                                    <li><a href="#/collection-full">Women</a></li>
                                    <li><a href="#/collection-list">Men</a></li>
                                    <li><a href="#/collection-full">Shoes</a></li>
                                    <li><a href="#/collection">New Arrivals</a></li>
                                    <li><a href="#/collection-list">Clearance</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="widget widget_nav_menu">
                                <h4 className="widget-title">OUR POLICY</h4>
                                <ul className="stone-go-top">
                                    <li><a href="#/collection">Brands</a></li>
                                    <li><a href="#/contact">Contact Us</a></li>
                                    <li><a href="#/about">About</a></li>
                                    <li><a href="#/blog">Blog</a></li>
                                    <li><a href="#/blog-details">Blog details</a></li>
                                    <li><a href="#/comming-soon">Comming Soon</a></li>
                                    <li><a href="#/collection-full">Shop</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="widget contact-widget">
                                <h4 className="widget-title">GET IN TOUCH</h4>
                                <ul className="contact_info_list">
                                    <li className="single-info-item">
                                        <div className="icon"><i class="icon-home-foother"></i></div>
                                        <div className="details">
                                            <span>Davis Patrick<br/>P.O. Box 147 2546 Sociosqu Rd. <br/>Bethlehem Utah 02913</span>
                                        </div>
                                    </li>
                                    <li className="single-info-item"><div class="icon"><i class="icon-email-subscribe"></i></div><div class="details">support@example.com</div></li>
                                    <li className="single-info-item"><div class="icon"><i class="icon-call-footer"></i></div><div class="details"><a href="tel:+496170961709">(939) 353-1107, (302) 259-2375</a></div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="widget widget_nav_menu">
                                <h4 className="widget-title">FOLLOW US</h4>
                                <ul>
                                    <li><a href=""><i class="icon-facebook"></i> Facebook</a></li>
                                    <li><a href=""><i class="icon-twitter"></i> Twitter</a></li>
                                    <li><a href=""><i class="icon-instagram"></i> Instagram</a></li>
                                    <li><a href=""><i class="icon-pinterest"></i> Pinterest</a></li>
                                    <li><a href=""><i class="icon-youtube"></i> Youtube</a></li>
                                    <li><a href=""><i class="icon-skype"></i> Skype</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <p>© Stoon 2020. Powered with <i class="fa fa-heart"></i> by <a href="">Codingeek</a>.</p>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li><a href=""><img src="/react/stoon/assets/img/payment/1.png" alt="payment"/></a></li>
                                <li><a href=""><img src="/react/stoon/assets/img/payment/2.png" alt="payment"/></a></li>
                                <li><a href=""><img src="/react/stoon/assets/img/payment/3.png" alt="payment"/></a></li>
                                <li><a href=""><img src="/react/stoon/assets/img/payment/4.png" alt="payment"/></a></li>
                                <li><a href=""><img src="/react/stoon/assets/img/payment/5.png" alt="payment"/></a></li>
                                <li><a href=""><img src="/react/stoon/assets/img/payment/6.png" alt="payment"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;