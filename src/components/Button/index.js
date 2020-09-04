import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Button({handleclick,text,variante}){
return(<button className={variante} onClick={handleclick}>{text}</button>);
}

Button.propTypes ={
    handleclick: PropTypes.func.isRequired,
    text:PropTypes.string.isRequired,
    variante: PropTypes.string.isRequired

}


export default Button;