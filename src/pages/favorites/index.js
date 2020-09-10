import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/footer';
import Container from '../../components/Container';
import Typography from '../../components/typography';
import DisplayFav from '../../components/FavoriteCards';


function Favorites() {

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=890&offset=0';
  
  useEffect(()=>{
    fetch(url)
    .then(async result => await result.json())
    .then(async pokemons => await setPokemon(pokemons.results))
   },[])
   
const [pokemon,setPokemon] = useState([]);

let pokemonFav = Object.entries(localStorage);

const clean = pokemonFav.map((isFavorited) =>{ 
  return (isFavorited[1] === 'true' ? 
           isFavorited[0] = isFavorited[0].replace(/["]/g,''):null);
})

let pokemonFavList = clean.filter((values) => values != null);
let card = pokemon.filter(pokemon => {
    return pokemonFavList.includes(pokemon.name) && pokemon
});



  return (
    
    <div className="App">
      <Nav pokemon={pokemon}/>
      <Typography text="favorites" />
        <Container>
            <div style={{
            height:"auto",
            display:"flex", 
            justifyContent:"center",
            alignItems:"center",
            flexWrap:"wrap"
            
            }}>

            {card.map((fav) =>{

                let id = fav.url.split('/');
                id = id[id.length - 2]

                return <DisplayFav key={fav.name} pokemonId={id} pokemons={fav}/>
                
            })}

            </div>
    
        </Container>
        <div style={{height:"100vh"}}></div>
      <Footer/>
    </div>
  );
}

export default Favorites;
