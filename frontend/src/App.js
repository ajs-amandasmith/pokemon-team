import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokeSearch from "./Components/PokeSearch";
import TeamDisplay from './Components/TeamDisplay';
import FavoriteDisplay from './Components/FavoriteDisplay';
import NavBar from './Components/NavBar';

function App() {
  const [id, setId] = useState(null)

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<PokeSearch id={id} setId={setId} />}>
          </Route>
          <Route path="/team" element={<TeamDisplay id={id} setId={setId} />}>
          </Route>
          <Route path="favorites" element={<FavoriteDisplay id={id} setId={setId} />}>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
