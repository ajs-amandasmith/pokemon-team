import React from 'react';

function PokeDisplay({ name, number, image, height, weight, gender, type1, type2, flavorText }) {
  return(
    <div>
      <label>
        Name:
      </label>
      <p>{name}</p>
      <label>
        National Number:
      </label>
        <p>{number}</p>
      <label>
        Type 1:
      </label>
        <p>{type1}</p>
      <label>
        Type 2:
      </label>
        <p>{type2}</p>
      <label>
        Flavor Text
      </label>
        <p>{flavorText}</p>
    </div>
  )
}

export default PokeDisplay