import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Home, Menu, Reservation, About, OrderPage, MealOrder } from "./pages";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/about' element={<About />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/meals' element={<MealOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
