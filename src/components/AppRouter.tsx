//Import
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import Menu from "../pages/MenuPage";
import Contact from "../pages/ContactPage";
//Component
const AppRouter: React.FC = () => {
  //router component
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
