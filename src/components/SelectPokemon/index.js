import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function SelectPokemon({pokemon}){
    return(
        <select className="selectPokemon">
            {pokemon.map((res, index) => {
                return(
                <option data-url={res.url} key={`${res}_${index}`} 
                        value={res.name}>
                        #{index+1} {res.name}
                </option>)
            } )}
        </select>
    );
}

SelectPokemon.propTypes ={
    pokemon:PropTypes.array.isRequired,
}

export default SelectPokemon;