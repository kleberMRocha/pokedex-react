import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { Link } from 'react-router-dom';

function DisplayFav({pokemons,pokemonId}){

  let initialValue = (localStorage.getItem(JSON.stringify(pokemons.name)));
  const [favStatus,setFavStatus] = useState(initialValue);

  useEffect(()=>{

    localStorage.setItem(
     JSON.stringify(pokemons.name),(favStatus)

    );
   
  },[favStatus,pokemons.name])


  function HandleClick(e){
    setFavStatus(JSON.parse(!favStatus))
    e.currentTarget.classList.toggle("favBtnOff");
    
  }

    return(
  
        <div  className="displayFav" key={pokemons.name} >
            <Link  className="displayLink" to={`/pokemon/${pokemons.name}`}>
            
              <img 
                className="pokemonImg" 
                src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`} 
                alt={pokemons.name} 
              />
            {pokemons.name}
              </Link> 
              <button onClick={HandleClick} className="favBtn"><i className="fab fa-gratipay" aria-hidden="true"></i></button>
      </div>
     

      
      
        
        

   )

 
 

}

DisplayFav.propTypes = {
  pokemons: PropTypes.object.isRequired,
  pokemonId: PropTypes.string.isRequired
}

export default DisplayFav;