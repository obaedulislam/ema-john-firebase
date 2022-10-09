import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = ()=> {
    const {products, initialCart} =  useLoaderData();
    const [cart, setCart] = useState(initialCart);

    return (
        <div className='shopping-container shop-container'>
            <div className="order-container">
                {
                    cart.map((product) => <ReviewItem
                        key={product.id}
                        product = {product}
                    ></ReviewItem> )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Orders;