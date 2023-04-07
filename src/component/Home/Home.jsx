import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshorts = useLoaderData() 
    const [carts, setCarts]= useState([])

    const cartHandler = (tshirt) =>{
        const addCart = [...carts, tshirt]
        setCarts(addCart)
    }

    const removeCart = id =>{
        const remove = carts.filter(ts => ts._id !== id)
        setCarts(remove)
    }
    console.log(carts)

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshorts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt = {tshirt}
                        cartHandler = {cartHandler}

                    ></Tshirt>)

                }
            </div>
            <div className="cart-container">
                {/* {
                    carts.map(cart => <Cart 
                        cart = {cart}
                        key={cart._id}
                        removeCart={removeCart}
                        ></Cart>)
                } */}
                <Cart 
                cart ={carts}
                removeCart={removeCart}
                
                ></Cart>
                
            </div>
        </div>
    );
};

export default Home;