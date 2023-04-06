import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshorts = useLoaderData() 
    return (
        <div>
            <h2>Home page {tshorts.length}</h2>
        </div>
    );
};

export default Home;