
import React from 'react';
import PropTypes from 'prop-types';
import SearchPokemon from '../Search';
import Typography from '../typography';
import './style.css';
import {Link} from 'react-router-dom';

function Nav({pokemon}){

   
    return(
        <header>
            <nav className="menu">
                <h2><Link to='/' className="toBack">{'<'}</Link></h2>
                <Typography text="Pokedex ReactJs"/>
                <SearchPokemon pokemon={pokemon}/>
            </nav>
        </header>
    )
}

Nav.propTypes = {
    children:PropTypes.array,
    pokemon:PropTypes.array
}



export default Nav;