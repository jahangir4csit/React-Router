import React from 'react';
import {useHistory} from "react-router-dom";

const Products = (props) =>{
    const history = useHistory();

    const clickHandlar = (id)=>{
        history.push(`/product-details/${id}`);
    }
    return(
        <div id={props.key} className="card product" key={props.key}>
            <h3>{props.productInfo.name}</h3>
            <p>{props.productInfo.desc}</p>
            <p>{props.productInfo.price}</p>
            <p>{props.productInfo.category}</p>
            <button onClick={() => clickHandlar(props.id)} className="button button-outline">Details</button>
        </div>
    )
}

export default Products