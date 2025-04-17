import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NotFoundPage.css';
import catFound from '../assets/images/catfound.gif';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <div className="not-found-image">
                    <img src={catFound} alt='Cat inside the trash can' autoPlay loop muted />   
                </div>
                <p>Oops! The page you're looking for seems to have been thrown away.</p>
                <Link to="/" className="home-button">
                    <span>Return to Homepage</span>
                </Link>
            </div>
        </div> 
    );
};

export default NotFound;