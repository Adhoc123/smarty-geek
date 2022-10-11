import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Smarty Geek</h1>
            <div className='links'>
                <Link to='/'>Content</Link>
                <Link to='/report'>Report</Link>
                <Link to='/demography'>Demography</Link>
            </div> 
        </div>
    );
};

export default Header;