import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

function Loading({image,alt}){

    return(<img className="pokebola" src={image} alt={alt} />);

}

Loading.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}


export default Loading;