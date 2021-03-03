import React from 'react'

const MyComponent = (props) =>{
    return(
        <div>
            <h1>Welcome to {props.data.nav}</h1>
            <p>{props.data.content}</p>
        </div>
    )
}

export default MyComponent