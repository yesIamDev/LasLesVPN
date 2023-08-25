import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Clients from "./components/Clients";
import Depots from "./components/Depots";
import Retraits from "./components/Retraits";
import Layout from "./components/shared/Layout";

import "./index.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="/clients" element={<Clients/>}/>
            <Route path="/depots" element={<Depots/>}/>
            <Route path="/retraits" element={<Retraits/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
