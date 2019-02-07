import React from "react";

const ImageContact = props => (
  <div className="images">
    <img src={require("./01 small.png")} />
    <h3> {props.title}</h3>
    <p> {props.artistName}</p>
    <p> {props.price}</p>
  </div>
);

export default ImageContact;
