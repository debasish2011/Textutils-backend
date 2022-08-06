import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Login from "./components/Login";
import Signup from "./components/Signup";
import History from "./components/History";
import TextState from "./context/TextState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <TextState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Form />} />
            {/* <Route exact path="/Textutils" element={<Form />} /> */}
            <Route exact path="/history" element={<History />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </TextState>
    </>
  );
}

export default App;
