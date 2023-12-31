import React from "react";
import { Route, Routes } from "react-router-dom";
import StreamerRecord from "./pages/StreamerRecord.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<StreamerRecord />} />
      </Routes>
    </>
  );
};

export default App;
