import React from 'react';
import { Button } from 'react-bootstrap';
import './Product.css';

const Product = ({product}) => {
    const {name, logo, total} = product;
    return (
        <div className='product'>
            
            <img src={logo} alt=''></img>
            <div className='name-button'>
                <h2>{name}</h2>
                <h2>Quries: <small>{total}</small></h2>
                <button>Start Mastering</button>
            </div>
            
        </div>
    );
};

export default Product;