import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Favorites(){
    return(
        <div className="favoriteWrapper">
            <Link to="/pokemon/" >
                <h3 className="favoriteBtn">
                        <i className="fab fa-gratipay"></i> Your Favorites !
                </h3> 
            </Link>
        </div>
    )
}

export default Favorites;