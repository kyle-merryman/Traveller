import React from "react";
import "./style.css";

function Button(props) {
  //console.log("PROPS TEST: \n",props);
  return (
  <p onClick={(e) => props.handleClick(props.id, e, props.keywords)}> CLICK ME</p> 
  );
}

export default Button;
