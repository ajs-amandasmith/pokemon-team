import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokeSearch from "./Components/PokeSearch";
import TeamDisplay from './Components/TeamDisplay';
import FavoriteDisplay from './Components/FavoriteDisplay';
import NavBar from './Components/NavBar';

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
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={
            <PokeSearch
              setId={setId}
              setName={setName}
              setNumber={setNumber}
              setImage={setImage}
              setType1={setType1}
              setType2={setType2}
              setFlavorText={setFlavorText}
              p_id={id}
              p_name={name}
              p_number={number} 
              p_image={image} 
              p_type1={type1} 
              p_type2={type2} 
              p_flavorText={flavorText} 
            />
          }>
          </Route>
          <Route path="/team" element={
            <TeamDisplay altText={altText} />
          }>
          </Route>
          <Route path="favorites" element={
            <FavoriteDisplay altText={altText} />
          }>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
