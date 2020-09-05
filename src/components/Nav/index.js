
import React from 'react';
import PropTypes from 'prop-types';
import SearchPokemon from '../Search';
import Typography from '../typography';
import Figure from '../Figure';
import Pokebola from '../../assets/img/pokemon.svg';

import './style.css';
import { Link } from 'react-router-dom';

function Nav(){
   
    return(
        <header>
            <nav className="menu">
                <h2><Link to="/" className="toBack">{'<'}</Link></h2>
                <Figure image={Pokebola} alt="Pokebola" />
                <Typography text="Pokedex ReactJs"/>
                <SearchPokemon />
            </nav>
        </header>
    )
}

Nav.propTypes = {
    children:PropTypes.array,
}



export default Nav;