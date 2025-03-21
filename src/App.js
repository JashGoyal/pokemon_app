
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Battle } from "./Components/War/Battle";
import Favorites from "./Components/Favorites/Favorites";
import Aboutpokemon from "./Components/Pokemon/Aboutpokemon";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pokemon/" element={<Aboutpokemon />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/war" element={<Battle/>} />
        <Route path="/pokemon/:name" element={<Aboutpokemon />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
