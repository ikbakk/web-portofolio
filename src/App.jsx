import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/skills" element={<Home />} />
        <Route path="/about" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
