import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home";
import AddProduct from "./Components/AddProduct";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App(){
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addProduct" element={<AddProduct/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  )
}
export default App;