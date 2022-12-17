import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [dark, setDark] = useState(false);
  return (
    <BrowserRouter>
      <div
        className="w-screen"
        data-theme={dark === true ? "forest" : "garden"}>
        <Header setDark={setDark} dark={dark} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
