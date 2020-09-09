import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { Link } from 'react-router-dom';

function Display({pokemons,pokemonCount,fav}){
  return pokemons.map((pokem,index)=>{

  return (index  < pokemonCount) && 
  (<div  className="display" key={pokem.name} >
   <Link  className="displayLink" to={`/pokemon/${pokem.name}`}>
   
    <img 
      className="pokemonImg" 
      src={`https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`} 
      alt={pokem.name} 
    />
   {pokem.name}
    </Link> 
   
  
    </div>)

  });
 

}

Display.propTypes = {
  pokemons: PropTypes.array.isRequired,
  pokemonCount: PropTypes.number.isRequired
}

export default Display;