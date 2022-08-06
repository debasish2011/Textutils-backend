import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./components/History";

function App() {
  const [mode, setmode] = useState("Night");
  const toggleMode = () => {
    if (mode === "Light") {
      setmode("Night");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("form").style.backgroundColor = "white";
      document.getElementById("form").style.color = "black";
    } else {
      setmode("Light");
      document.body.style.backgroundColor = "#24094d";
      document.body.style.color = "white";
      document.getElementById("form").style.backgroundColor = "#24094d";
      document.getElementById("form").style.color = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar modeChangeFunction={toggleMode} backgroundMode={mode} />
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
