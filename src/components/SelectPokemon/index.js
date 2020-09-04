import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function SelectPokemon({pokemon,SetSelectedPokemon,selectedPokemon}){

    
    function handlechangePokemon(e){
        SetSelectedPokemon(e.target.selectedOptions[0].dataset.url);
    }

    return(
       <div className="SelectContainer"> 
        <select value={selectedPokemon} onChange={handlechangePokemon} className="selectPokemon">
             <option disabled hidden>Choose a Pokemon!</option>
            {pokemon.map((res, index) => {
                return(
                <option  data-url={res.url} key={`${res}_${index}`} 
                        value={res.name}>
                        #{index+1} {res.name}
                </option>)
            } )}
        </select>

     </div> 
    );
}

SelectPokemon.propTypes ={
    pokemon:PropTypes.array.isRequired,
    SetSelectedPokemon:PropTypes.func.isRequired,
    selectedPokemon:PropTypes.string.isRequired

}

export default SelectPokemon;