
import React from 'react';
import './style.css';
import PropTypes from 'prop-types';


function Nav({children}){
   

    return(
        <nav className="menu">
            {children}
        </nav>
    )
}

Nav.propTypes = {
    children:PropTypes.array.isRequired,
}



export default Nav;