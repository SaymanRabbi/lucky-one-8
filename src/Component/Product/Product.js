import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Product = ({product,clickHandelar}) => {
       const {picture,name,balance} =product
    return (
        <div className='product-info shadow-lg'>
            <img className='img-fluid' src={picture} alt="" />
            <div className='px-2'>
                <h5>Bike Name: {name}</h5>
                <p>Price: {balance}</p>
            </div>
            <button className='button'onClick={()=>{clickHandelar(product)}} >Add To Cart <FontAwesomeIcon className='text-black fs-5' icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;