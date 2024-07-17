import './App.css';
import React, { useState } from 'react';
import PokeSearch from "./Components/PokeSearch";
import PokeDisplay from './Components/PokeDisplay';
import AddToTeam from './Components/AddToTeam';
import AddToFavorites from './Components/AddToFavorites';

function App() {
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
        setName={setName} 
        setNumber={setNumber} 
        setImage={setImage} 
        setType1={setType1} 
        setType2={setType2} 
        setFlavorText={setFlavorText} 
      />
      <PokeDisplay 
        name={name} 
        number={number} 
        image={image} 
        type1={type1} 
        type2={type2} 
        flavorText={flavorText}
        altText={altText}
      />
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
  );
}

export default App;
