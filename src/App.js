import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AnimalCategories from "./components/AnimalCategories";
import ErrorPage from "./components/ErrorPage";
import SingleCard from "./components/SingleCard";
import Cart from "./components/Cart";

import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animalcategories" element={<AnimalCategories />} />
        <Route path="/singlecard" element={<SingleCard />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
