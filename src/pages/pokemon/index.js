import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';

function getPokemonUrlName(){
    
    let url = window.location.pathname;
    url = url.split('/')
    return (url[url.length -1]);
 
}

function Pokemon (){

    useEffect(()=>{
      
        const url = `https://pokeapi.co/api/v2/pokemon/${getPokemonUrlName()}`;
        
        fetch(url)
        .then(async res => await res.json())
        .then(async res => await setPokemon(res));

    },[])

    const [pokemon,setPokemon] = useState(0);


    return(
        <>
            <Nav/> 

            {(!pokemon && 'carregando ... ') || 
            pokemon.species.name}
        </>
        )


}


export default Pokemon;