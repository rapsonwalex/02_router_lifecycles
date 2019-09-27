import React from 'react';

const Conditional = () => {

    const value = false;

    const returnValue = () => {
        return true
    }

const showIT = () => {
    return ( returnValue() ?
        <div>
        Hello, it's true
        </div>:
        <div>
        Hello, it's false
        </div>
    )
}

    return (
        <div>
           { showIT()}
        </div>
    )
}

export default Conditional;