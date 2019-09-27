import React from 'react';

const Card = (props) => {

const stye = {
    background:'lightgrey'
}

    return (
        <div style={stye}>
        {props.children}
        </div>
    )
}

export default Card;