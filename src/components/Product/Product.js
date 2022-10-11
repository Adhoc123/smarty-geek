import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {name, logo, total, id} = product;
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/quiz/${id}`);
    }
    return (
        <div className='product'>
            
            <img src={logo} alt=''></img>
            <div className='name-button'>
                <h2>{name}</h2>
                <h2>Quries: <small>{total}</small></h2>
                <button onClick={handleNavigate}>Start Mastering</button>
            </div>
            
        </div>
    );
};

export default Product;