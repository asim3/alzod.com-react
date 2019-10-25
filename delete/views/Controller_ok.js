// import React, { useState, useEffect } from "react";
// // import OBJ from "./obj";
// // import Model from "./Model";
// // import View from "./View";


// const Controller = {
//   running: [],
//   add: function(obj) {
//     Controller.running.push(obj)
//   },
//   del: function(obj) {
//     Controller.running.pop()
//     Controller.show()
//   },
//   show: function(id) {
//     // Controller.running.map(obj => obj.show = false)
//     // Controller.running.find(obj => obj.id == id).show = true;
//     Controller.setRunning(
//       Controller.running.map(i => (<div>{i}</div>))
//     )
//   },
//   Running: function() {
//     const [running, setRunning] = useState("init");
//     Controller.setRunning = setRunning;
//     console.log(running)
//     useEffect(function() {
//       if(running == "init") {
//         Controller.show()
//       }
//     })

//     if(running != "init") {
//       return running
//     }
//     return <div>Loading ...</div>
//   }
// }


// export default Controller;