import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShop,faTrashCan} from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart,randomProduct,chosseAgain,clearSpecific }) => {
      
    return (
        <div className='cart-container'>
            <h2 className='text-center text-danger'>Cart<FontAwesomeIcon className='text-danger fs-4 ms-1' icon={faShop} /></h2>
            {
                cart.map(Product=><CartData data={Product} key={Product.id}clearSpecific={clearSpecific}></CartData>)
            }
            <div className='button-container'>
            <button className='cart-button' onClick={() => { randomProduct() }}>Choose One</button>
            <button className='cart-button2' onClick={()=>{chosseAgain()}}>Chose Again</button>
           </div>
        </div>
    );
};
const CartData = ({ data,clearSpecific }) => {
    const {picture,name}=data
    return (
        <div>
            <div className='cart-info'>
            <img src={picture} className="img-fluid" alt="" />
                <h6 >{name}</h6>
                <FontAwesomeIcon className='text-black fs-4 ms-1 custom-icon' onClick={()=>{clearSpecific(data)}} icon={faTrashCan} />
            </div>
        </div>
        
    )
}

export default Cart;