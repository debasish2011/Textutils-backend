import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Navbar />
      <div className="column_flex container">
        <h2>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter text to analyse
          </label>
        </h2>
          <Form/>
      </div>
      <div className="flex container btnarea">
        
      </div>
    </>
  );
}

export default App;
