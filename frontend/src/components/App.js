import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./homepage";
import Log from "../login/Sign";
import BattlePage from "../components/BattlePage"; 
import Profile from "../components/profile"; 
import About from "../components/about"; 

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/log" element={<Log />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/Battle-Page" element={<BattlePage />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/about" element={<About />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;