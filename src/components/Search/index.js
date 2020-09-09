import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes  from 'prop-types';
import './style.css';



function SearchPokemon({pokemon}){

    let history = useHistory();
    const [searchVallue,setSearchvalue] = useState('');


    function searchPokemon(e){
        
        if(searchVallue === ''){
            e.preventDefault();
            return;
        }
        history.push(`/pokemon/${searchVallue.toLowerCase()}`);
    }

    function handleSearchValue(e){
        setSearchvalue(e.target.value)
    }

    return(
        <form onSubmit={searchPokemon}>
            <div className="formGroup">
        

                <input list="browsers" 
                className="searchInput" 
                name="browser" id="browser" onChange={handleSearchValue} placeholder="Search Pokemon!" />

                <datalist id="browsers">
                    {pokemon.map(value => {
                        return <option key={value.name} value={value.name} />
                    } )}
               
                </datalist>

                <button className="searchBtn" type="submit">{'<'}</button>
                
            </div>
        </form>
    )
}

SearchPokemon.propTypes ={
    pokemon: PropTypes.array
}

export default SearchPokemon;