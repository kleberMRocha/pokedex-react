import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { Link } from 'react-router-dom';

function DisplayFav({pokemons,pokemonId}){

    return(<div  className="displayFav" key={pokemons.name} >
   <Link  className="displayLink" to={`/pokemon/${pokemons.name}`}>
   
    <img 
      className="pokemonImg" 
      src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`} 
      alt={pokemons.name} 
    />
   {pokemons.name}
    </Link> 
    <button className="favBtn"><i className="fab fa-gratipay" aria-hidden="true"></i></button>
   
  
    </div>)

 
 

}

DisplayFav.propTypes = {
  pokemons: PropTypes.object.isRequired,
  pokemonId: PropTypes.string.isRequired
}

export default DisplayFav;