import React from 'react';
import './Cart.css'

const Cart = ({ cart,randomProduct }) => {
      
    return (
        <div className='cart-container'>
            {
                cart.map(Product=><CartData data={Product} key={Product.id}></CartData>)
            }
            <div className='button-container'>
            <button className='cart-button' onClick={() => { randomProduct() }}>Choose One</button>
            <button className='cart-button2'>Chose Again</button>
           </div>
        </div>
    );
};
const CartData = ({ data }) => {
    const {picture,name}=data
    return (
        <div >
            <div className='cart-info'>
            <img src={picture} className="img-fluid" alt="" />
            <h5>{name}</h5>
            </div>
        </div>
        
    )
}

export default Cart;