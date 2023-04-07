import React from 'react';
import './Thsirt.css'

const Tshirt = ({cartHandler, tshirt}) => {
    const {name, price, picture, _id} = tshirt
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price : {price}</p>
            <button onClick={() => cartHandler(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;