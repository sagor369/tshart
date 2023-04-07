import React, { useContext } from 'react';
import './Cart.css'
import { ringContext } from '../Layout/Main';


const Cart = ({cart , removeCart}) => {
    const ring = useContext(ringContext)
    return (
        <div>
            <p className=''>{cart.length === 0 ? 'plese added items' : ''}</p>
            <p>{ring}</p>

            {
                cart.map(ts => <div>
                    <h3>
                        {ts.name}
                        <button onClick={()=> removeCart (ts._id)}>X</button>
                    </h3>
                </div>
                )
            }
            <p className={cart.length === 2 ? 'purple' : 'red'}> added item</p>
            
        </div>
    );
};

export default Cart;