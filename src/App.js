import "./App.css";

import React from 'react'
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="Textutils"/>
      <div className="container my-3">
        <h2><label htmlFor="exampleFormControlTextarea1" className="form-label">Enter text to analyse</label></h2>
        <Form/>
      </div>
    </>
  );
}

export default App;
