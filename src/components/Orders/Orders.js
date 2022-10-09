import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Orders.css'

const Orders = ()=> {
    const {products, initialCart} =  useLoaderData();
    console.log(initialCart);
  
    const [cart, setCart] = useState(initialCart);
    console.log(cart);
    return (
        <div className='shopping-container'>
            <div className="order-container">
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Orders;