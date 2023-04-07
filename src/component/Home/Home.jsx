import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const notify = () => toast("Already added");
    const tshorts = useLoaderData() 
    const [carts, setCarts]= useState([])

    const cartHandler = (tshirt) =>{
            const note = carts.find(ts => ts._id === tshirt._id)
            if(note){
                notify()
            }
            else{

                const addCart = [...carts, tshirt]
                setCarts(addCart)
            }
        
    }
    console.log(carts)

    const removeCart = id =>{
        const remove = carts.filter(ts => ts._id !== id)
        setCarts(remove)
    }

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
            <ToastContainer />
        </div>
    );
};

export default Home;