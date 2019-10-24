import React from 'react';
import Controller from "./Controller";

const Model = {
  fetch: function(url, type, data) {
    type = (type || "GET").toUpperCase();
    if(type !== "GET") {
      if("post" in Model) { 
        Model.post(url, type, data); }}
    else { Model.get(url); }
  },


  get: function(url) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(this.readyState == 4) {
            if("handle_response" in Controller) {
                Controller.handle_response(
                    this.status, url, request);
            }
            else {
                Controller.initial_item = [
                    this.status, url, request];
            }
        }
    };
    request.open("GET", url, true);
    request.send();
  },



post: function(url, type, data) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if(this.readyState === 4) {
          Controller.handle_response(
              this.status, url, request, data);
      }
  };
  request.open(type, url, true);
  if(data === undefined) { request.send(); }
  else {
      var Content_type = 'application/x-www-form-urlencoded';
      var post_data = data.serialize();
      if(typeof post_data === "object" && post_data.constructor === Object) {
          Content_type = 'application/json; charset=utf-8';
          post_data = JSON.stringify(post_data);
      }
      if("get_cookie" in Model) {
          request.setRequestHeader(
              'X-CSRFToken', Model.get_cookie("csrftoken"));
      }
      request.setRequestHeader('Content-type', Content_type);
      request.send(post_data);
  }
},


fetch_script: function(content) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.id = "js_script_" + content.type;
  script.type = 'text/javascript';
  script.onload = function() {
      Controller.handle_fetch_script(content);
  };
  script.onerror = function() {
      var error_text = 'adding script to head error!';
      window.onerror(error_text, "js/model.js")
  };
  head.appendChild(script);
  script.src = "/static/js/"+ content.type +".js";
},


get_cookie: function(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(
                  cookie.substring(name.length + 1)
              );
              break;
          }
      }
  }
  return cookieValue;
}

};

export default Model;