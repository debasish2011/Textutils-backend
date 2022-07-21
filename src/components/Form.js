import React from "react";
import "../css/form.css";

export default function Form() {
  return (
    <>
      <div className="column_flex container">
        <h2>
          <label htmlFor="form" className="form-label">
            Enter text to analyse
          </label>
        </h2>
        <textarea id="form" cols="30" rows="10"></textarea>
      </div>
      <div className="flex container btnarea">
        
      </div>
    </>
  );
}
