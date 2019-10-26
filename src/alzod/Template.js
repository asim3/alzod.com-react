import React, { useState, useEffect } from 'react';
import home from "./templates/home";
import user from "./templates/user";
import error from "./templates/error";
import AlzodLogo from "./components/AlzodLogo.svg";

// return {
//     "id": obj_id,
//     "index": index,
//     "type": content.type,
//     "url": content.url,
//     "content": content,
//     "hide": function() {
//         var div = document.getElementById(obj_id);
//         if(div) { div.setAttribute("class", "none"); }
//         else { View.show_error(obj_id + " not found!"); }
//     },
//     "show": function() {
//         for (var key in View.running) {
//             if(View.running.hasOwnProperty(key)) {
//                 View.running[key].hide(); 
//             }
//         }
//         var div = document.getElementById(obj_id);
//         div.setAttribute("class", "view_root");
//         View.hide_loading();
//     },
//     "remove": function() {
//         document.getElementById(obj_id).remove();
//         delete View.running[obj_id];
//         View.show_last_view();
//     }
// };


export default function Template(model_obj, next_chain) {
  let view = {type: "error", text: "init error!"}
  if(model_obj.type === "./home") { view = home(model_obj) }
  else if(model_obj.type === "./user") { view = user(model_obj) }
  else if(model_obj.type === "error") { view = error(model_obj); }
  else { view = error(view); }
  
  next_chain(view)
};