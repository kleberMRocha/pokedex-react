import React, { useEffect, useState } from "react";
import "./style.css";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";

function Card({ pokemon }) {

 
  let history = useHistory(); 
  
  
  function HandleNext(e){
    history.push(`/pokemon/${e.currentTarget.dataset.current}`);
    history.go(0)
  }


  let initialValue = (localStorage.getItem(JSON.stringify(pokemon.name)));

  const [favStatus,setFavStatus] = useState(JSON.parse(initialValue));
  

  useEffect(()=>{
  
    localStorage.setItem(
      JSON.stringify(pokemon.name),JSON.stringify(favStatus)

      );

    },[favStatus,pokemon.name,pokemon.id])

  function HandleClick(e){
    
    setFavStatus(JSON.parse(!favStatus))
    e.currentTarget.classList.toggle("favorited");
    
  }



  const pId = [`#00${pokemon.id}`, `#0${pokemon.id}`, `#${pokemon.id}`];

  const background = [
    { tipo: "normal", color: "#e0ece4" },
    { tipo: "fighting", color: "#ff8e6e" },
    { tipo: "flying", color: "#a2d5f2" },
    { tipo: "poison", color: "#aa96da" },
    { tipo: "ground", color: "#f8bd7f" },
    { tipo: "rock", color: "#edcfa9" },
    { tipo: "bug", color: "#81b214" },
    { tipo: "ghost", color: "#16213e" },
    { tipo: "steel", color: "#d8d3cd" },
    { tipo: "fire", color: "#ea5455" },
    { tipo: "water", color: "#40a8c4" },
    { tipo: "grass", color: "#8fc0a9" },
    { tipo: "electric", color: "#ffcb8e" },
    { tipo: "psychic", color: "#ffa5b0" },
    { tipo: "ice", color: "#00bcd4" },
    { tipo: "dragon", color: "#cedebd" },
    { tipo: "dark", color: "#1b262c" },
    { tipo: "fairy", color: "#efbbcf" },
    { tipo: "unknown", color: "#f7f2e7" },
  ];

  let currentBackgroundColor = "";

  background.forEach((value) => {
    if (value.tipo === pokemon.types[0].type.name) {
      return (currentBackgroundColor = value.color);
    }
  });

  return (
     <>
    <main
      className="containerPokemon"
      style={{ backgroundColor: `${currentBackgroundColor}`,       
     }}
    >
         
      <div className="card">
        <div className="card-text">
          <div className="portada">
      
            <img
              className="portadaImg"
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
              alt={pokemon.name } 
            />
          </div>

          <div className="title-total">
            <div className="title">
              {pokemon.types[0].type.name}
              {pokemon.types[1] && ` | ${pokemon.types[1].type.name}`}
            </div>

            <h2>{pokemon.name}</h2>

            <div className="desc">{pId[pId[0].length - 4]}</div>
            <div className="actions">
              <button onClick={HandleClick} className={favStatus ? "favorited" : ""}>
                <i className="far fa-heart"></i>
              </button>
              <button onClick={HandleNext} data-current={pokemon.id-1}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <button onClick={HandleNext} data-current={pokemon.id+1}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div  className="containerPokemon">
     
    {Object.values(pokemon.sprites).splice(0,8).map((sprite,index) => {
      return(sprite !== null && <img key={`${pokemon.name}_${index}`} src={sprite} alt={pokemon.name} />)
    })}
    
    

    </div>
     </>

   
  );
}

Card.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
export default Card;
