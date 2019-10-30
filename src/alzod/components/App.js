import React, { useState, Fragment } from 'react';
import home from "../app/home";
import user from "../app/user";
import error from "../app/error";
import AppHead from "./AppHead";
import { request, remove_func } from "../Controller";


function git_app_content(model_obj, func_obj) {
  switch(model_obj.type) {
    case "./home": return home(model_obj, func_obj); break;
    case "./user": return user(model_obj, func_obj); break;
    case "error": return error(model_obj, func_obj); break;
    default: return error({type: "error", text: "init error!"});
  }
}


export default function App({ model_obj }) {
  const [loading, setLoading] = useState(false);
  const is_index = model_obj.index !== 100;
  const func_obj = {
    is_loading: loading,
    set_loading: (value) => setLoading(value),
    remove_func: () => remove_func(model_obj.index),
    get: function(url, next_func) {
      return function() {
        setLoading(true);
        request(url, next_func);
      };
    },
    request: function(kwargs, next_func) {
      return function() {
        setLoading(true);
        request(kwargs, next_func);
      }
    }
  };

  
  return (
    <Fragment>
      {is_index && <AppHead model_obj={model_obj} func_obj={func_obj} />}
      {git_app_content(model_obj, func_obj)}
    </Fragment>
  );
};