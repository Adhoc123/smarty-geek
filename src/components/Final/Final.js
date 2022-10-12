import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Final.css';

const Final = ({ok}) => {
    const {name,id} = ok;
    console.log(id)
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/quiz/${id}`);
    }
    return (
        <div className='quizes'>
            <button onClick={handleNavigate}>Explore {name} Quizes</button>
        </div>
    );
};

export default Final;