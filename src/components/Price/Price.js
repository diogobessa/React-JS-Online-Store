import React from 'react';
import './price.css';

const Price = (props) => {
    
    const { className, price } = props;
    console.log('price props', props);
    return(
        <p className={`priceTag ${className}`}> { price } </p>
    )

}

export default Price;