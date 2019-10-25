import React, { useState, useEffect } from 'react';
import Model from "./Model";
import Template from "./Template";

const Controller = {
  running: ["Loading , , !"],
  update: function(obj) {
    Controller.running.push(obj);
    Controller.setRunning(Date.now());
  },
  fetch: function(url, data) {
    Model(url, data)
      .then(obj => Template(obj))
      .then(obj => Controller.update(obj))
  }
}
  

export default function() {
  const [running, setRunning] = useState("init");
  Controller.setRunning = setRunning;
  console.log(running);

  useEffect(function() {
    if(running === "init") {
      Controller.fetch("./home")
    }
  })

  return Controller.running.map(t => t)
};


export function fetch(url) {
  return function() {
    Controller.fetch(url);
  };
}


export function post(data) {
  return function() {
    Controller.fetch(data.url, data);
  };
} 