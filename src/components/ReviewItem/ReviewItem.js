import {faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product}) => {
    const {name, img, price, quantity } = product;
    console.log(product);
    return (
        <div className='single-products2'>
            <div className="product-img2">
                <img cla src={img} alt={name} />
            </div>
            <div className="product-details">
                <div className="product-info">
                    <h2>{name}</h2>
                    <h3 >{price}</h3>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="dlt-btn">
                    <button><FontAwesomeIcon className='trash-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;