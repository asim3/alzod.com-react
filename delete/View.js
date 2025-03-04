import React from 'react';
import Controller from "./Controller";

const ViewBase = function(content, view_name) {
  var index = View.auto_id++;
  var obj_id = view_name || "view_" + index;
  return {
      "id": obj_id,
      "index": index,
      "type": content.type,
      "url": content.url,
      "content": content,
      "hide": function() {
          var div = document.getElementById(obj_id);
          if(div) { div.setAttribute("class", "none"); }
          else { View.show_error(obj_id + " not found!"); }
      },
      "show": function() {
          for (var key in View.running) {
              if(View.running.hasOwnProperty(key)) {
                  View.running[key].hide(); 
              }
          }
          var div = document.getElementById(obj_id);
          div.setAttribute("class", "view_root");
          View.hide_loading();
      },
      "remove": function() {
          document.getElementById(obj_id).remove();
          delete View.running[obj_id];
          View.show_last_view();
      }
  };
};


const View = {
  show_loading: function() {
    var loading_div = document.getElementById('loading_div');
    loading_div.setAttribute("class", "loading_root");
  },




current_index: 1,

scripts: {},

auto_id: 100,

running: { view_home: ViewBase({}, "view_home") },

// running.view_home.index: 1,


// View methods:


add: function(content) {
  if(content.type in View.scripts) {
      var view = ViewBase(content);
      try {
          document.getElementById('all_views').append_by_obj({
              id: view.id, className: "none", append: [
                  View.scripts.head(view),
                  View.scripts[view.type](view)
              ]
          });
      }
      catch(error) {
          View.show_error("scripts[" + view.type + "]: " + error);
      }
      View.running[view.id] = view;
      View.show(view.id);
      Controller.push_to_history(content);
  }
  else {
      View.show_error('View.scripts['+ obj.type +'] not found!');
  }
},


show: function(view) { View.running[view].show(); },


remove: function(view) { View.running[view].remove(); },


hide_loading: function() {
  var loading_div = document.getElementById('loading_div');
  loading_div.setAttribute("class", "none");
},


show_error: function(html) {
  var error_div = document.getElementById('error_div');
  error_div.innerHTML = "<div class='error_text'>"+ html +"</div>";
  error_div.setAttribute("class", "error_root");
  console.error(html);
},


hide_error: function() {
  var error_div = document.getElementById('error_div');
  error_div.innerHTML = "hide";
  error_div.setAttribute("class", "none");
  View.hide_loading();
},


show_last_view: function() {
  var last = "view_home";
  var index = 0;
  for (var key in View.running) { 
      if(index < View.running[key].index) { 
          last = key; 
      }
  }
  View.show(last);
},


remove_last_view: function() {
  var last = null;
  var index = 90;
  for (var key in View.running) { 
      if(index < View.running[key].index) { 
          last = key; 
      }
  }
  if(last) {
      View.remove(last);
  }
  View.show_last_view();
},


handle_200_ok: function(content) {
  if(content.type in View.scripts) {
      if(View.blocked(content.url_clean)) {
          View.handle_blocked(content);
      }
      else { View.add(content); }
  }
  else { Model.fetch_script(content); }
},


handle_400_bad_request: function(obj, form) {
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          var element = form.querySelector("[name="+key+"]");
          if(element){ element.style = "border: 2px solid red;"; }
      }
  }
  View.hide_loading();
},


blocked: function(url) {
  var allowed_url = ["user"];
  if(!isNaN(url)) { return false; }
  else {
      if(allowed_url.indexOf(url) !== -1) { return false; }
  }
  return true;
},


handle_blocked: function(obj) {

  if(obj.type === "user") {
      if(obj.url_clean === "login") {
          // handle POST request
          View.add(obj);
      }
      else {
          if(obj.auth) {
              if(obj.url_clean === "api/auth") {
                  console.log("change home page from index to user page.");
              }
          }
          else {
              if(obj.url_clean === "logout") {
                  View.show_error("::::: you have been logout. :::::");
              }
          }
          View.hide_loading();
      }
  }
  else { View.hide_loading(); }
}





  // ==========================================
};

export default View;