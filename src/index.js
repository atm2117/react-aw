import React from "react";
import ReactDOM from "react-dom";

let fname = "Arnold";
let lname = "MT";
let num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}</h1>
    <p>Your luck number is {num}</p>
  </div>,
  document.getElementById("root")
);
