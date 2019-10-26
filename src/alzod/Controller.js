import React, { useState, useEffect } from 'react';
import Model from "./Model";
import Template from "./Template";
import Loading from "./components/Loading";



const running = [];
let auto_index = 100;
const oooo = { set_run_index: function() {
  console.log("set_run_index");
}};
function fetch(url, action, data) {
  oooo.set_run_index("loading");
  const kwargs = { url: url, action: action, data: data };
  Model(kwargs, function(model_obj) {
    Template(model_obj, function(view) {
      add(view);
      console.log("fetching", running);
    });
  });
}

function add(view) {
  const index = auto_index++;
  running.push({index: index, view: view});
  
  setTimeout(x => {
    oooo.set_run_index("index")
  },500);
}

setTimeout(() => {
      console.log("loaddddd", oooo.set_run_index);
      oooo.set_run_index("loadddd")
},3000);

// =====================================================


export default function Controller() {
  const [run_index, setIndex] = useState("init");

  // useEffect(function() {
  //   if(run_index === "init") {
  //     setTimeout(x =>
  //       fetch("./home")
  //     ,500);
  //   }
  // });

  oooo.set_run_index = setIndex

  const run = running.find(function(obj) {
    console.log("obj")
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