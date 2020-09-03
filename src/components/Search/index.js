import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


function SearchPokemon({searchValue}){
    return(
        <form>
            <div className="formGroup">
                <input  className="searchInput" type="text" value={searchValue} placeholder="Search Pokemon!"/>
    <button className="searchBtn" type="submit">{'<'}</button>
            </div>
        </form>
    )
}

SearchPokemon.propTypes ={
    searchValue: PropTypes.string
}

export default SearchPokemon;