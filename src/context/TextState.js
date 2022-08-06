import React, { useState } from "react";
import TextContext from "./TextContext";

const TextState = (props) => {
  const [texts, setTexts] = useState([]);
  const host = "http://localhost:5000";

  const getTexts = async () => {
    const response = await fetch(`${host}/api/text/fetchalltexts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setTexts(json);
  };

  const addText = async (description) => {
    const response = await fetch(`${host}/api/text/addtext`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ description }),
    });
    let json = await response.json();
    let text = json;
    setTexts(texts.concat(text));
  };

  const deleteText = async (id) => {
    const response = await fetch(`${host}/api/text/deletetext/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    let json = await response.json();
    console.log(json);
    const newTexts = texts.filter((text) => {
      return text._id !== id;
    });
    setTexts(newTexts);
  };

  return (
    <TextContext.Provider value={{ texts, addText, deleteText, getTexts }}>
      {props.children}
    </TextContext.Provider>
  );
};

export default TextState;
