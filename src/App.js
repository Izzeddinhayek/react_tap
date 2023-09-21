import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/react_tap" element={<Home />} />
          <Route path="/react_tap/details/1" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
