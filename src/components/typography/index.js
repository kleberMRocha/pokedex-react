import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

function Typography({text}){
return(<h2>{text}</h2>);
}

Typography.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Typography; 