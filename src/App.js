import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AnimalCategories from "./components/AnimalCategories"


import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animalcategories" element={<AnimalCategories />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
