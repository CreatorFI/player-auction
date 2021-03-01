import React, { useState } from 'react';
 

const BidCart = (props) => {
    const total =props.cart;
    // console.log(props);
    
    let totalPrice = 0;
        for (let i = 0; i < total.length; i++) {
            const product = total[i];
            totalPrice =parseFloat(totalPrice) +parseFloat(product.wage);    
        }
        
    return (
        <div>
            <h5>Total Budget Amount: {totalPrice}</h5>
        </div>
    );
};

export default BidCart;