import React, { useState, useEffect } from "react";
import OBJ from "./obj";
import Model from "./Model";
// import View from "./View";

let value = "index"
let func = null
function add(new_value) {
  value = new_value
  func(value)
}

function Teest() {
  const [running, setRunning] = useState(value);
  func = setRunning

  return <a onClick={ _ => add(Date.now()) }>{running}</a>
}



function RootView() {
  

  useEffect(function() {
    console.log(Date.now())
  })

  return <Teest />
}

export default RootView;
