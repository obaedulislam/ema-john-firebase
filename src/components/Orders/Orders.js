import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products =  useLoaderData();
    console.log(products)
    return (
        <div>
            <h1>This is Order Page: {products.length}</h1>
        </div>
    );
};

export default Orders;