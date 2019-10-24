import React from "react";
import OBJ from "./obj";
import Model from "./Model";
// import View from "./View";


const Controller = {
  running: [],
  Show_root: function() {
    return Controller.running.find(obj => obj.show).name;
  },
  add_to_running: function(obj) {
    Controller.running.push(obj)
  },
  test: function(id) {
    Controller.running.map(obj => obj.show = false)
    Controller.running.find(obj => obj.id == id).show = true;
  }
}

export default Controller;
