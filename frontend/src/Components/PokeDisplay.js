import React from 'react';

function PokeDisplay({ name, number, image, type1, type2, flavorText }) {
  console.log('f', flavorText)
  return(
    <div>
      <img src={image} />
      <br></br>
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