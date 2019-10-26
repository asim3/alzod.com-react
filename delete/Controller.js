import React from 'react';
import Model from "./Model";
import View from "./View";

const Controller = {
  fetch: function(url, type, data) {
    View.show_loading();
    var item_no = url.replace(/.*\/\/[^\/]+\//, '');
    url = isNaN(item_no) ? url : "/api/item/" + item_no + "/";
    Model.fetch(url, type, data);
  },



  handle_fetch_script: function(content) { 
      if(content.type in View.scripts) { 
          View.handle_200_ok(content); 
      }
      else { 
          View.show_error('fetch_script error. '+ content.type+' not found!');
      }
  },


  handle_JSON_response: function(status, content, form) {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
      if(status == 200 || status == 201) { // 201 Created
          if(form) {
              var post_view_id = form.querySelector("#post_view_id").value;
              View.remove(post_view_id);
          }
          View.handle_200_ok(content);
      }
      else if(status == 400) { // 400 Bad Request
          View.handle_400_bad_request(content, form);
      }
      else if(status == 401) { // 401 Unauthorized
          console.warn("401 Unauthorized");
          View.hide_loading();
      }
      else if(status == 403) { // 403 Forbidden
          console.warn("403 Forbidden");
          View.hide_loading();
      }
      else if(status == 404) { // 404 Not Found
          console.warn("404 Not Found");
          View.hide_loading();
      }
      else {
          // 202 Accepted
          // 500 Internal Server Error
          // 501 Not Implemented
          // 503 Service Unavailable
          View.show_error("Error in handle_response: status("+ status +")");
      }
  },


  push_to_history: function(content) {
      if(!content.in_history) {
          content.in_history = true;
          var page_info = {index: View.current_index++, content: content};
          var url = page_info.content.url_clean;
          url = isNaN(url) ? url : "/" + url;
          if(View.blocked(url)) {
              url = "/user/";
          }
          try { window.history.pushState(page_info, null, url); }
          catch(error) { 
              window.history.pushState(page_info, null, "/error");
              View.show_error("history.pushState: " + error); 
          }
      }
  },


  Form: function(action, array, view_id, encode_url) {
    if(action && array) {
      var form = {element:"form", action:action, method:"POST", append:[]};
      for (let i = 0; i < array.length; i++) {
          var obj = {};
          if(typeof array[i] === "object" && array[i].constructor === Object) {
              for (const key in array[i]) {
                  if (array[i].hasOwnProperty(key)) {
                      obj[key] = array[i][key];
                  }
              }
          }
          else { 
              obj = {
                  element: "input", 
                  type: "textbox", 
                  name: array[i], 
                  placeholder: array[i]
              };
              if(array[i] == "password") { obj.type = "password"; }
          }
          form.append.push(obj);
      }
      if(view_id) {
          form.append.push({ element: "input", id: "post_view_id", 
              value: view_id, type: "hidden"}); 
      }
      if(encode_url) {
          form.append.push({ element: "input", name: "encode_url", 
              value: "url", type: "hidden"}); 
      }
      form.append.push({element: "input", value: "Submit", type: "submit"});
      return form; 
    }
    else { View.show_error('Controller.Form(): action not found!'); }
  }
}

var initial_url = window.location.pathname.replace(/(?:^\/|\/$)/g, "");
if(!isNaN(initial_url) && 0 < initial_url.length) {
    Controller.fetch("/api/item/" + initial_url + "/");
}

// run after load:

Controller.fetch("/api/auth/");

View.show('view_home');


export default function(url) {
    Model(url)
      .then(obj => Templates(obj))
      .then(view => Controller.update(view))

};