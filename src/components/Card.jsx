import React from "react";
import ReactDOM from "react-dom";

// function

function Card(props) {
  return (
    <a href={props.link} className="info-box">
      {props.details}
    </a>
  );
}

export default Card;
