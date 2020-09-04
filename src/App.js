import React, { useEffect, useState } from 'react';

import SelectPokemon from './components/SelectPokemon';
import Typography from './components/typography';
import Nav from './components/Nav';
import SearchPokemon from './components/Search';
import Figure from './components/Figure';
import Pokebola from '../src/assets/img/pokemon.svg';
import Container from './components/Container';
import Display from './components/display';
import Button from './components/Button';



function App() {

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
  useEffect(()=>{
    fetch(url)
    .then(result =>result.json())
    .then(pokemons => setPokemon(pokemons.results))
  },[])
   
  const [pokemon,setPokemon] = useState([]);
  const [selectedPokemon,SetSelectedPokemon] = useState('Choose a Pokemon!');
  const [pokemonCount,setPokemonCount] = useState(9);

  function handleShowMore(){
    setPokemonCount(pokemonCount+3);
  }

  return (

    <div className="App">
      <Nav>
        <Figure image={Pokebola} alt="Pokebola" />
         <Typography text="Pokedex ReactJs"/>
         <SearchPokemon />
      </Nav>
        <form>
          <SelectPokemon 
          selectedPokemon={selectedPokemon}
          SetSelectedPokemon={SetSelectedPokemon}
          pokemon={pokemon}/>
        </form>
      <Container>

        <Display pokemons={pokemon} pokemonCount={pokemonCount}/>

        <Button variante="big" text="show More" handleclick={handleShowMore}/>

      </Container>

    </div>
  );
}

export default App;
