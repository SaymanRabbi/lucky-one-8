import React, { useEffect, useState } from 'react';
import Cart from '../../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css';
import Swal from 'sweetalert2'


const Shop = () => {
    // ----state for producut
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json').then(res=>res.json()).then(data=>setProducts(data))
    }, [])
    // -----random pick a product---
    const randomProduct = () => {
        if (cart.length>0) {
            const newcart = cart[Math.floor(Math.random() * cart.length)];
            setCart([newcart]) ;
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Donot Have Any Product'
              })
        }
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
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Maximum Added Producut'
                  })
            }
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Already Added!'
              })
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