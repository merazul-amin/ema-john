import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        // console.log(product);
        total += product.price;
        shipping += product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected items: {cart.length} </p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax} </p>
            <h3>Grand Total: ${grandTotal.toFixed(2)} </h3>
        </div>
    );
};

export default Cart;