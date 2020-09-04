import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Display({pokemons,pokemonCount}){
  return pokemons.map((pokem,index)=>{

  return (index  < pokemonCount) && 
  (<div className="display" key={pokem.name} >
   <a href={pokem.url}>{pokem.name}</a> 
   <img className="pokemonImg" src={`https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`} alt={pokem.name} />
  
    </div>)

  });
 

}

Display.propTypes = {
  pokemons: PropTypes.array.isRequired,
  pokemonCount: PropTypes.number.isRequired
}

export default Display;