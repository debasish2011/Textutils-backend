import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <h2>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter text to analyse
          </label>
        </h2>
      </div>
    </>
  );
}

export default App;
