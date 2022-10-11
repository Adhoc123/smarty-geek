import React from 'react';
import geek from '../../images/geek.png';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='about'>
                <img src={geek}></img>
                <h5>Smart geek is a place where you can learn through online. We have experts from
                     different domain. Here we are trying to bridge the gap between industry and consumers. 
                     By providing world class module we are step ahead in this sector all around the world. 
                     You are welcomed to check our different sections and learn from experts.
                </h5>
            </div>
        </div>
    );
};

export default Home;