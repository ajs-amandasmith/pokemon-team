import './App.css';
import React, { useState } from 'react';
import PokeSearch from "./Components/PokeSearch";
import PokeDisplay from './Components/PokeDisplay';
import AddToTeam from './Components/AddToTeam';
import AddToFavorites from './Components/AddToFavorites';
import DeleteTeamMember from './Components/DeleteTeamMember';
import DeleteFavorite from './Components/DeleteFavorite';
import TeamDisplay from './Components/TeamDisplay';
import FavoriteDisplay from './Components/FavoriteDisplay';

function App() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [image, setImage] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [flavorText, setFlavorText] = useState("");
  const altText = `Image of the Pokémon ${name}.`

  return (
    <div className="App">
      <PokeSearch 
        setId={setId}
        setName={setName} 
        setNumber={setNumber} 
        setImage={setImage} 
        setType1={setType1} 
        setType2={setType2} 
        setFlavorText={setFlavorText} 
      />
      <PokeDisplay 
        id={id}
        name={name} 
        number={number} 
        image={image} 
        type1={type1} 
        type2={type2} 
        flavorText={flavorText}
        altText={altText}
      />
      <AddToTeam 
        p_id={id}
        p_name={name}
        p_number={number} 
        p_image={image} 
        p_type1={type1} 
        p_type2={type2} 
        p_flavorText={flavorText} 
      />
      <TeamDisplay altText={altText} />
      <DeleteTeamMember id={id} />
      <AddToFavorites 
        p_id={id}
        p_name={name}
        p_number={number} 
        p_image={image} 
        p_type1={type1} 
        p_type2={type2}          
        p_flavorText={flavorText} 
      />
      <FavoriteDisplay altText={altText} />
      <DeleteFavorite id={id} />
    </div>
  );
}

export default App;
