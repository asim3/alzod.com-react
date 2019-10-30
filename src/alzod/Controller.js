import React, { useState, useEffect } from 'react';
import Model from "./Model";
import App from "./components/App";
import Snackbar from "./components/Snackbar";

import Slide from '@material-ui/core/Slide';


let running = [];
let auto_index = 100;

let set_run_index = function() {
  console.log("set_run_index");
};

function AppRoot() {
  const [run_index, setIndex] = useState("init");
  useEffect(function() {
    if(run_index === "init") { request("./home"); }
  });
  set_run_index = setIndex

  // console.log(`%crun_index === ${run_index}`,"color: red;")
  const run = running.find(obj => run_index === obj.index);
  if(run && run.App) { 
    // return running.map(a=>a.App)
    return run.App 
  }
  else if(run_index === "init") { return <div>init</div> }
  else if(!isNaN(run_index)) { return <div>ERRRRRRROR!!!!!!!!</div> }
  return <div>NULL</div>
}

//  const kwargs = { url: url, action: action, data: data };
export function request(kwargs, next_func) {
  if(typeof kwargs === "string") {
    kwargs = { url: kwargs }
  }
  Model(kwargs, function(model_obj) {
    if(typeof next_func === "function") {
      next_func(model_obj);
    }
    else {
      add(model_obj);
    }
  });
}

function add(model_obj) {
  model_obj.index = auto_index++;
  running.push({
    index: model_obj.index,
    model: model_obj,
    App: <App key={model_obj.index} model_obj={model_obj} />
  });
  
  setTimeout(x => {
  set_run_index(model_obj.index);
  },500);
}

function remove(index) {
  if(100 < index) {
    running = running.filter(obj => obj.index !== index)
    const last_index = running[running.length - 1].index
    console.log("you are at ",last_index)
    set_run_index(last_index)
  }
  else { console.log("you are at home!"); }
}

// =====================================================


export default function Controller() {
  
  return (
    <React.Fragment>
      <AppRoot />
      <Snackbar />
    </React.Fragment>
  );
};


export function remove_func(index) {
  return function() {
    remove(index);
  };
};