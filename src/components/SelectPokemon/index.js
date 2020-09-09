import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {useHistory} from 'react-router-dom';

function SelectPokemon({pokemon}){

    let history = useHistory();

    
    function handlechangePokemon(e){

        history.push(`/pokemon/${e.target.value.toLowerCase()}`);
    }

    return(
       <div className="SelectContainer"> 
        <select defaultValue='' onChange={handlechangePokemon} className="selectPokemon">
             <option  hidden>Choose a Pokemon!</option>
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

}

export default SelectPokemon;