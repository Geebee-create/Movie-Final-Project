// App.js

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "../components/homepage";


import Log from "../login/Sign";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/log" element={<Log />}></Route>

          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;
