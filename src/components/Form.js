import React, { useState } from "react";
import "../css/form.css";

export default function Form() {
  const [text, setText] = useState("Enter text here");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const changeToUppercase = () => {
    setText(text.toUpperCase());
  };
  const changeToLowercase = () => {
    setText(text.toLowerCase());
  };
  return (
    <>
      <div className="column_flex container">
        <h2>
          <label htmlFor="form" className="form-label">
            Enter text to analyse
          </label>
        </h2>
        <textarea
          id="form"
          cols="30"
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="flex container btnarea">
        <button className="btn btn-blue" onClick={changeToUppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-blue" onClick={changeToLowercase}>
          Convert to Lowercase
        </button>
      </div>
    </>
  );
}
