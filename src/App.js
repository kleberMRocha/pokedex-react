import React, { useEffect, useState } from 'react';
import SelectPokemon from './components/SelectPokemon';
import Typography from './components/typography';
import Nav from './components/Nav';
import SearchPokemon from './components/Search';
import Figure from './components/Figure';

import Pokebola from '../src/assets/img/pokemon.svg';
import Container from './components/Container';

console.log(Pokebola);

function App() {

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
  useEffect(()=>{
    fetch(url)
    .then(result =>result.json())
    .then(pokemons => setPokemon(pokemons.results))
  },[])
   
  const [pokemon,setPokemon] = useState([]);

  return (

    <div className="App">
      <Nav>
        <Figure image={Pokebola} alt="Pokebola" />
         <Typography text="Pokedex ReactJs"/>
         <SearchPokemon />
      </Nav>
      <Container>
        <form>
        <SelectPokemon pokemon={pokemon}/>
        </form>
      </Container>

    </div>
  );
}

export default App;
