import React, { useState, useContext } from "react";
import TextContext from "../context/TextContext";
import "../css/form.css";

export default function Form() {
  const { addText } = useContext(TextContext);
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const changeToUppercase = () => {
    let modifiedText = text.toUpperCase();
    setText(modifiedText);
    if (localStorage.getItem("token")) {
      addText(modifiedText);
    }
  };
  const changeToLowercase = () => {
    let modifiedText = text.toLowerCase();
    setText(modifiedText);
    if (localStorage.getItem("token")) {
      addText(modifiedText);
    }
  };
  const clearText = () => {
    setText("");
  };
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    let modifiedText = newText.join(" ");
    setText(modifiedText);
    if (localStorage.getItem("token")) {
      addText(modifiedText);
    }
  };
  const textReverse = () => {
    let modifiedText = text.split(" ").reverse().join(" ");
    setText(modifiedText);
    if (localStorage.getItem("token")) {
      addText(modifiedText);
    }
  };
  const textMirror = () => {
    let modifiedText = text.split("").reverse().join("");
    setText(modifiedText);
    if (localStorage.getItem("token")) {
      addText(modifiedText);
    }
  };
  const copyText = () => {
    let newText = document.getElementById("form");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
  };
  return (
    <>
      <div className="column-flex container">
        <h2>
          <label htmlFor="description" className="form-label">
            Enter text to analyse
          </label>
        </h2>
        <textarea
          id="description"
          cols="30"
          rows="10"
          placeholder="Enter text here"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="flex container btnarea">
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={changeToUppercase}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={changeToLowercase}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={copyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={removeExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={textReverse}
        >
          Reverse Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={textMirror}
        >
          Mirror Text
        </button>
      </div>
      <div className="column-flex container summary">
        <h2>Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
