function post(kwargs, next_func) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(this.readyState === 4) {
      kwargs.request = request;
      next_func(kwargs);
    }
  };
  request.open(kwargs.action, kwargs.url, true);
  if(kwargs.data === undefined) { request.send(); }
  // else {
  //     var Content_type = 'application/x-www-form-urlencoded';
  //     var post_data = data.serialize();
  //     if(typeof post_data === "object" && post_data.constructor === Object) {
  //         Content_type = 'application/json; charset=utf-8';
  //         post_data = JSON.stringify(post_data);
  //     }
  //     if("get_cookie" in Model) {
  //         request.setRequestHeader(
  //             'X-CSRFToken', Model.get_cookie("csrftoken"));
  //     }
  //     request.setRequestHeader('Content-type', Content_type);
  //     request.send(post_data);
  // }
};



function handle_response(kwargs) {
  if(1 < kwargs.request.status) {
    try {
      const json_obj = JSON.parse(kwargs.request.responseText);
      json_obj.type = json_obj.type || "./user";
      json_obj.url = kwargs.url;
      json_obj.url_path = kwargs.url.replace(/.*\/\/[^\/]+/, '')
      json_obj.url_clean = json_obj.url_path
          .replace(/(?:^\/|\/$)/g, "")
          .replace("api/item/", "");
      return json_obj;
    }
    catch(error) { return show_error('response is not JSON!'); }
    // Controller.handle_JSON_response(status, content, form);
  }
  else { return show_error('Internet connection is offline!'); }
};


function show_error(text) {
  return {type: "error", text: text}
}

// function get_cookie(name) {
//   // delete this
//   var cookieValue = null;
//   if (document.cookie && document.cookie !== '') {
//       var cookies = document.cookie.split(';');
//       for (var i = 0; i < cookies.length; i++) {
//           var cookie = cookies[i].trim();
//           // Does this cookie string begin with the name we want?
//           if (cookie.substring(0, name.length + 1) === (name + '=')) {
//               cookieValue = decodeURIComponent(
//                   cookie.substring(name.length + 1)
//               );
//               break;
//           }
//       }
//   }
//   return cookieValue;
// }




export default function Model(kwargs, next_func) {
  kwargs.action = (kwargs.action || "GET").toUpperCase();
  console.log(`${kwargs.action}: ${kwargs.url}`);


  if(kwargs.url === "./home") {
    next_func({type: kwargs.url})
  }
  else {
    post(kwargs, function (kwargs) {
      next_func(handle_response(kwargs))
    })
  }
};