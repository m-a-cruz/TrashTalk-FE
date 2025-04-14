import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NotFoundPage.css';
import catFound from '../assets/images/catfound.gif';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>404</h1>
            <div className="not-found-image">
                <img src={catFound} alt='cst inside the trash can' style={{height: '500px'}} />   
            </div>
            <p>We can't find it. It's probably been taken out with the trash.</p>
            <Link to="/">Go Back Home</Link>
        </div>
    );
};

export default NotFound;