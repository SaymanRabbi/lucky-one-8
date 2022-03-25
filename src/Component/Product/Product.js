import React from 'react';
import './Product.css'

const Product = ({product}) => {
       const {picture,name,balance} =product
    return (
        <div className='product-info'>
            <img className='img-fluid' src={picture} alt="" />
            <div className='px-2'>
                <h5>Bike Name: {name}</h5>
                <p>Price: {balance}</p>
            </div>
            <button className='button'>Add To Cart</button>
        </div>
    );
};

export default Product;