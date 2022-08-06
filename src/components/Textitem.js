import React, { useContext } from "react";
import TextContext from "../context/TextContext";
const Textitem = (props) => {
  const { deleteText } = useContext(TextContext);
  const { text } = props;
  const eraseText = () => {
    deleteText(text._id);
  };
  return (
    <>
      <div className="card mx-2 my-2">
        <div className="card-body">
          <p>{text.description}</p>
          <i className="fa-solid fa-trash-can m-1" onClick={eraseText}></i>
        </div>
      </div>
    </>
  );
};

export default Textitem;
