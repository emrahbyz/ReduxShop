import React from "react";
import { Routes, Route } from "react-router-dom";
import Items from "./components/items";
import Basket from "./components/basket";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
