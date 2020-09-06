import React, { useEffect, useState } from 'react';

import SelectPokemon from '../../components/SelectPokemon';
import Nav from '../../components/Nav';
import Container from '../../components/Container';
import Display from '../../components/display';
import Button from '../../components/Button';
import Favorites from '../../components/favorites';


function App() {

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=890&offset=0';
  useEffect(()=>{
    fetch(url)
    .then(result =>result.json())
    .then(pokemons => setPokemon(pokemons.results))
  },[])
   
  const [pokemon,setPokemon] = useState([]);
  const [selectedPokemon,SetSelectedPokemon] = useState('Choose a Pokemon!');
  const [pokemonCount,setPokemonCount] = useState(30);

  function handleShowMore(){
    setPokemonCount(pokemonCount+15);
  }

  return (

    <div className="App">
      <Nav />
 
        <form>
          <SelectPokemon 
          selectedPokemon={selectedPokemon}
          SetSelectedPokemon={SetSelectedPokemon}
          pokemon={pokemon}/>
        </form>
        <Favorites />
      <Container>
        
      <Display pokemons={pokemon} pokemonCount={pokemonCount}/>
      </Container>

      <Button variante="big" text="show More" handleclick={handleShowMore}/>

    </div>
  );
}

export default App;
