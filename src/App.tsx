import React from "react";
import { Routes, Route } from "react-router-dom";
import Add from "./screens/Add/Add";
import Home from "./screens/Home/Home";
import Navbar from "./screens/Navabr/Navbar";
import Profile from "./screens/Profile/Profile";
function App() {
  return (
    <div className="container mx-auto  md:px-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
