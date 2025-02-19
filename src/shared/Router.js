import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Allwebsites from "../pages/allwebsites";
import Facilities from "../pages/facilities";
import Navbar from "../components/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="allwebsites" element={<Allwebsites />} />
        <Route path="facilities" element={<Facilities />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;