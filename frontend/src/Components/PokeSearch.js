import React, { useState } from "react";

function PokeSearch({ setName, setNumber, setImage, setType1, setType2, setFlavorText }) {
  const [pokemon, setPokemon] = useState('');

  function handlePokeSearch(e) {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => {
        if (res.ok) {
          res.json().then(res => { 
            setName(res.name[0].toUpperCase() + res.name.slice(1))
            setNumber(res.id)
            setImage(res.sprites.other['official-artwork'].front_default)
            getTypes(res.types)
            getSpecies(res.id)
          })
        }
      })
  }

  // Sets Pokemon types; "None" for Type2 if the Pokemon only has one type
  function getTypes(arr) {
    const type = arr.map(type => type.type.name[0].toUpperCase() + type.type.name.slice(1));
    if (type.length === 1) {
      setType1(type[0])
      setType2('None')
    } else {
      setType1(type[0])
      setType2(type[1])
    }
  }

  function getSpecies(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then(res => {
        if (res.ok) {
          res.json().then(res => {
            setFlavorText(res.flavor_text_entries[0].flavor_text)
          })
        }
      })
  }

  return (
    <div>
      <form onSubmit={handlePokeSearch}>
        <label htmlFor="poke-search">Search for a Pokémon</label>
        <br></br>
        <input
          type="text"
          placeholder="Pokemon"
          id="poke-search"
          value={pokemon}
          onChange={e => setPokemon(e.target.value)}
        />
        <br></br>
        <button type="submit" className="btn-search">Search</button>
      </form>
    </div>
  )
};

export default PokeSearch;