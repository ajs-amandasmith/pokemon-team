import React, { useState } from "react";

function PokeSearch({ setName, setNumber, setImage, setType1, setType2, setFlavorText }) {
  const [pokemon, setPokemon] = useState('');

  function handlePokeSearch(e) {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => {
        if (res.ok) {
          res.json().then(res => { 
            console.log('res', res)
            setName(res.name[0].toUpperCase() + res.name.slice(1))
            setNumber(res.id)
            setImage(res.sprites.other['official-artwork'].front_default)
            getTypes(res.types)
          })
        }
      })
  }

  function getTypes(arr) {
    console.log(arr)
    const type = arr.map(type => type.type.name[0].toUpperCase() + type.type.name.slice(1));
    if (type.length === 1) {
      setType1(type[0])
      setType2('None')
    } else {
      setType1(type[0])
      setType2(type[1])
    }
    console.log('type', type)
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