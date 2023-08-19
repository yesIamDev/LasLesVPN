import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="products" element={<Products/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
