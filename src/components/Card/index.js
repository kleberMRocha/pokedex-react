import React from 'react';
import './style.css';
import PropTypes from 'prop-types';


function Card({pokemon}){

    console.log(pokemon)
    return(
        <main className="containerPokemon">
            <div className="card">
            
                <div className="card-text">

                    <div className="portada"
                    style={{backgroundImage: `url(https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png)` }} 
                    ></div>

                    <div className="title-total">   
                    <div className="title">{pokemon.types[0].type.name}</div>

                    <h2>{pokemon.name}</h2>
                
                <div className="desc">
                Pokemon
                
                </div>
                    <div className="actions">
                        <button><i className="far fa-heart">Fav</i></button>
                        <button><i className="far fa-envelope">Send</i></button>
                        <button><i className="fas fa-user-friends">Next</i></button>
                    </div></div>
                </div>
            
            </div>

        </main>

    )
}

Card.propTypes = {
    pokemon : PropTypes.object.isRequired,
}
export default Card;