import React from 'react';
const Breadcrumb = (props)=>{
    return(
        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col col-12">
                        <div class="breadcrumb-inner d-flex flex-column flex-md-row justify-content-md-between justify-content-center">
                            <h2 class="page-title">Shop</h2>
                            <ul class="page-list">
                                <li><a href="#/">Home</a></li>
                                <li><a href="#/collection">Shop</a></li>
                                <li><span>{props ? props.title : 'Details'}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Breadcrumb;