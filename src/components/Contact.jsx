import React from 'react'
import { useEffect, useState } from 'react';
import Loader from './Loader';

const Contact = ()=>{
    const [dataLoad, setDataLoad] = useState({isLoad: false});

    useEffect(() => {
        const timer = setTimeout(() => 
        setDataLoad({isLoad: true}), 
        1000);
        return () => clearTimeout(timer);
      }, []);

    return(
        <div className="container">
            {dataLoad.isLoad ?
            <div className="contact">
                <h2>Contact Us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            : <Loader /> 
            }
        </div>
    )
}

export default Contact;