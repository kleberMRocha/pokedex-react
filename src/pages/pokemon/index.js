import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Loading from "../../components/Loading";
import pokebola from "../../assets/img/pokemon.svg";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Footer from "../../components/footer";
import Typography from "../../components/typography";

function getPokemonUrlName() {
  let url = window.location.pathname;
  url = url.split("/");
  return url[url.length - 1];
}

function Pokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=890&offset=0";
  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((pokemons) => setPokemonName(pokemons.results));
  }, []);

  const [pokemonName, setPokemonName] = useState([]);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${getPokemonUrlName()}`;
    fetch(url)
      .then(async (res) => {
        return (
          (res.ok && (await res.json())) || setError("404 page not found!")
        );
      })
      .then(async (res) => await setPokemon(res));
  }, []);

  const [pokemon, setPokemon] = useState(0);
  const [error, setError] = useState("");

  return (
    <>
      <Nav pokemon={pokemonName} />
      {error && <Typography text={error} />}
      {(!pokemon && (
        <Container>
          <Loading image={pokebola} alt="Loading" />
        </Container>
      )) || <Card pokemon={pokemon} />}

      <Footer />
    </>
  );
}

export default Pokemon;
