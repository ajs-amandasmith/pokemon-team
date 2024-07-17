import './App.css';
import React, { useState } from 'react';
import PokeSearch from "./Components/PokeSearch";
import PokeDisplay from './Components/PokeDisplay';

function App() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [number, setNumber] = useState(0);
  const [image, setImage] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [flavorText, setFlavorText] = useState("");
  
  return (
    <div className="App">
      <PokeSearch 
        setName={setName} 
        setNickname={setNickname} 
        setNumber={setNumber} 
        setImage={setImage} 
        setHeight={setHeight} 
        setWeight={setWeight} 
        setGender={setGender} 
        setType1={setType1} 
        setType2={setType2} 
        setFlavorText={setFlavorText} 
      />
      <PokeDisplay 
        name={name} 
        nickname={nickname} 
        number={number} 
        image={image} 
        height={height} 
        weight={weight} 
        gender={gender} 
        type1={type1} 
        type2={type2} 
        flavorText={flavorText} 
      />
    </div>
  );
}

export default App;
