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
        <div className="flex space-between card-body">
          <div>
            <p>{text.description}</p>
          </div>
          <div className="flex align-baseline center-content">
            <i className="fa-solid fa-trash-can my-1 mx-3" onClick={eraseText}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Textitem;
