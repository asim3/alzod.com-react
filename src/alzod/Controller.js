import React, { useState, useEffect } from 'react';
import Model from "./Model";
import Template from "./Template";
import Loading from "./components/Loading";



const running = [];
let auto_index = 100;
let set_run_index = function() {
  console.log("set_run_index");
};
function fetch(url, action, data) {
  set_run_index("loading");
  const kwargs = { url: url, action: action, data: data };
  Model(kwargs, function(model_obj) {
    model_obj.index = auto_index++;
    Template(model_obj, function(view) {
      add(view);
    });
  });
}

function add(view) {
  running.push(view);
  
  setTimeout(x => {
    set_run_index(view.index)
  },500);
}

function remove(index) {
  console.error("removing : ",index)
  const arr_index = running.find(function(obj) {
    return obj.index === index;
  }).index
  running.splice(arr_index, 1)
  set_run_index(100)
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

  const run = running.find(function(obj) {
    console.error("run_index: ",run_index)
    return obj.index === run_index;
  })

  console.log("re rendering", running);

  if(run && run.view) { return run.view }
  else if(run_index === "init") { return <div>init</div> }
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