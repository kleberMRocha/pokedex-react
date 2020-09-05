import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Loading from '../../components/Loading';
import pokebola from '../../assets/img/pokemon.svg';
import Container from '../../components/Container';
import Card from '../../components/Card';

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
            <Container>
            {
            (!pokemon && <Loading image={pokebola} alt="Loading" />) || 
            
            <Card pokemon={pokemon}/> 
     
                
            }
               
            </Container>
        </>
        )


}


export default Pokemon;