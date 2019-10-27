import React, { useState, useEffect } from 'react';
import Model from "./Model";
import App from "./components/App"
import Loading from "./components/Loading";



let running = [];
let auto_index = 100;

let set_run_index = function() {
  console.log("set_run_index");
};

function fetch(url, action, data) {
  set_run_index("loading");
  const kwargs = { url: url, action: action, data: data };
  Model(kwargs, function(model_obj) {
    add(model_obj);
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
  set_run_index(model_obj.index)
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
  const [run_index, setIndex] = useState("init");

  useEffect(function() {
    if(run_index === "init") {
      setTimeout(x =>
        fetch("./home")
      , 500);
    }
  });

  set_run_index = setIndex

  const run = running.find(obj => obj.index === run_index)

  console.log(`%crun_index === ${run_index}`,"color: red;")
  

  if(run_index === "init") { return <div>init</div> }
  else if(run && run.App) { return run.App }
  else if(!isNaN(run_index)) { return <div>not found!</div> }
  return <Loading />
};


export function get(url) {
  return function() {
    fetch(url);
  };
};


export function post(data) {
  return function() {
    fetch(data.url, "post", data);
  };
};


export function remove_func(index) {
  return function() {
    remove(index);
  };
};