import React, { useState, useEffect } from 'react';
import home from "./templates/home";
import user from "./templates/user";
import error from "./templates/error";
import { get, remove_func } from "./Controller";
import AlzodLogo from "./components/AlzodLogo.svg";


function git_content(model_obj) {
  if(model_obj.type === "./home") { return home(model_obj) }
  else if(model_obj.type === "./user") { return user(model_obj) }
  else if(model_obj.type === "error") { return error(model_obj); }
  else { return error({type: "error", text: "init error!"}); }
}


function BaseView({ model_obj }) {
  return (
    <div>
      <div onClick={remove_func(model_obj.index)}>
        remove i: { model_obj.index }
      </div>
      <hr />
      {git_content(model_obj)}
    </div>
  );
}

export default function Template(model_obj, next_chain) {
  
  next_chain({
    index: model_obj.index,
    model: model_obj,
    view: <BaseView model_obj={model_obj} />
  })
};