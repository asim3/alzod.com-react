import React from 'react';
import home from "../app/home";
import user from "../app/user";
import error from "../app/error";
import AlzodLogo from "./AlzodLogo.svg";
import AppHead from "./AppHead"
import { Div , Text } from "./alzod"


function git_app_content(model_obj) {
  if(model_obj.type === "./home") { return home(model_obj) }
  else if(model_obj.type === "./user") { return user(model_obj) }
  else if(model_obj.type === "error") { return error(model_obj); }
  else { return error({type: "error", text: "init error!"}); }
}


export default function App({ model_obj }) {
  return (
    <Div>
      <AppHead model_obj={model_obj} />
      {git_app_content(model_obj)}
    </Div>
  );
};