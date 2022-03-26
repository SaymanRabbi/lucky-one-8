import React, { useEffect, useState } from 'react';
import Cart from '../../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
    // ----state for producut
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res=>res.json()).then(data=>setProducts(data))
    }, [])
    // -----random pick a product---
    const randomProduct = () => {
        const newcart = cart.length>0 ? cart[Math.floor(Math.random() * cart.length)] : [];
        setCart([newcart]) ;
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
                alert("Maximam Adeded Product!!")
            }
        }
        else {
            alert("Alredy Adeded This!!")
        }
    }
    // -----clear product-----
    const chosseAgain = () => {
        setCart([]);
    }
    // clear specific product-------
    const clearSpecific = (pd) => {
        const clearThis = cart.filter(product => product.id !== pd.id);
        setCart(clearThis)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
            {
                products.map(product=><Product product={product} key={product.id} clickHandelar={clickHandelar}></Product>)
           } 
            </div>
            <div className='cart'>
                
                    <Cart cart={cart} randomProduct={randomProduct} chosseAgain={chosseAgain} clearSpecific={clearSpecific}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;