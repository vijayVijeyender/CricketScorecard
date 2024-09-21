import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'

import React from "react";
import {AddBrand} from "./AddBrand"
import { Home } from './Pages/Home.page';
import { Login } from './Pages/Login.page';
import { Product } from './Pages/Product.page';
import { Result } from './Pages/Result.page';
import { Scorecard } from './Pages/Scorecard.page';
import { Players } from './Pages/Players.page';
import { New_Entry } from './Pages/New_Entry';
import { Schedule } from './Pages/Schedule';
import { PlayersList } from './Pages/PlayersList';

function App() {
  return (



  <Routes>
     <Route path="/" element={<Home />} />
  <Route path="/CreateBrand" element={<AddBrand />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/Product" element={<Product />} />
  <Route path="/Result" element={<Result />} />
  <Route path="/Scorecard" element={<Scorecard />} />
  <Route path="/Players" element={<Players />} />
  <Route path="/New_Entry" element={<New_Entry />} />
  <Route path="/schedule" element={<Schedule />} />
  <Route path="/playersList" element={<PlayersList />} />

  </Routes>
 
 

  )
}


export default App
