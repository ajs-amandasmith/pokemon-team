import React from 'react';
import AddToTeam from './AddToTeam';
import AddToFavorites from './AddToFavorites';

function PokeDisplay({ name, number, image, type1, type2, flavorText, altText, id }) {
 
  return(
    <div>
      <img src={image} alt={altText} height={300} width={300}/>
      <br></br>
       <p><strong>Name:</strong> {name}</p>
      <p><strong>National Number:</strong> {number}</p>
      <p><strong>Type 1:</strong> {type1}</p>
      <p><strong>Type 2:</strong> {type2}</p>
      <p><strong>Flavor Text:</strong> {flavorText}</p>
      <div>
        <AddToTeam 
          p_name={name}
          p_number={number}
          p_image={image}
          p_type1={type1}
          p_type2={type2}
          p_flavorText={flavorText}
        />
        <AddToFavorites 
          p_name={name}
          p_number={number}
          p_image={image}
          p_type1={type1}
          p_type2={type2}
          p_flavorText={flavorText}
        />
      </div>
    </div>
  )
}

export default PokeDisplay