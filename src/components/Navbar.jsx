import React from 'react';
import {Link} from "react-router-dom";

const Navabar = ()=>{
    return(
        <div className="container">
        <div className="navbar">
          <ul>
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    )
}

export default Navabar;