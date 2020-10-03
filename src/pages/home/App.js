import React, { Suspense, useEffect, useState } from 'react';
import SelectPokemon from '../../components/SelectPokemon';
import Nav from '../../components/Nav';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Favorites from '../../components/favorites';
import Footer from '../../components/footer';

const Display = React.lazy(()=> import('../../components/display'));

function App() {

  useEffect(()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=890&offset=0';
    fetch(url)
    .then(result =>result.json())
    .then(pokemons => setPokemon(pokemons.results))
  },[])


   
  const [pokemon,setPokemon] = useState([]);

  const [pokemonCount,setPokemonCount] = useState(30);

  function handleShowMore(){
    setPokemonCount(pokemonCount+15);
  }

  return (

    <div className="App">
      <Nav pokemon={pokemon}/>
 
        <form>
          <SelectPokemon 
          pokemon={pokemon}/>
        </form>
        <Favorites />
      <Container>
        <Suspense fallback={<p> Loading ... </p>}>
          <Display pokemons={pokemon} pokemonCount={pokemonCount}/>
        </Suspense>
            
      </Container>

      <Button variante="big" text="show More" handleclick={handleShowMore}/>

      <Footer/>
    </div>
  );
}

export default App;
