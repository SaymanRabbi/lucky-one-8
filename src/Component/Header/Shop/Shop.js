import React, { useEffect, useState } from 'react';
import Cart from '../../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res=>res.json()).then(data=>setProducts(data))
    }, [])
    const randomProduct = () => {
        const newcart = cart[Math.floor(Math.random() * cart.length)];
        // console.log(newcart);
        const random = [newcart]
        setCart(random) ;
    }
    const clickHandelar = (cartProducts) => {
        // console.log(setProducuts);
        const isavilabel = cart.find(product => product.id === cartProducts.id);
        if (!isavilabel) {
            if (cart.length < 4) {
                const newCart = [...cart, cartProducts];
                setCart(newCart)
            }
            else {
                alert("maximam adeded")
            }
        }
        else {
            alert("Alredy Adeded")
        }
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
            {
                products.map(product=><Product product={product} key={product.id} clickHandelar={clickHandelar}></Product>)
           } 
            </div>
            <div className='cart'>
                
                    <Cart cart={cart} randomProduct={randomProduct} ></Cart>
                
            </div>
        </div>
    );
};

export default Shop;