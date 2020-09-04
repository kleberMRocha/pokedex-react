import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

function Figure({image,alt}){

    return(<img className="pokebola" src={image} alt={alt} />);

}

Figure.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}


export default Figure;