import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import TextContext from "../context/TextContext";
import Textitem from "./Textitem";

const History = () => {
  const { texts, getTexts } = useContext(TextContext);
  let history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getTexts();
    }
    else {
      history("/login");
    }
  });
  return (
    <>
      <div className="container my-3">
        <h3>Your History</h3>
        <div className="flex">
          <p>{texts.length === 0 && "No History to display."}</p>
          {texts.map((text) => {
            return <Textitem key={text._id} text={text} />;
          })}
        </div>
      </div>
    </>
  );
};

export default History;
