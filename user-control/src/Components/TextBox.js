import "./TextBox.css";
import { useState } from "react";

function TextBox(props) {
  const textChangeHandler = (event) => {
    props.onTextChangeHandler(props.role, event.target.value);
  };

  return (
    <div className="TextBox">
      <label className="TextBox__Label">{props.label}</label>
      <input
        className="TextBox__Input"
        type="text"
        role={props.role}
        value={props.text}
        onChange={textChangeHandler}
      ></input>
      <br />
      <br />
    </div>
  );
}

export default TextBox;
