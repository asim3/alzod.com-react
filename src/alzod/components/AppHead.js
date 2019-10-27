import React from 'react';
import { get, remove_func } from "../Controller";
import { Div , Text } from "./alzod"
import AlzodLogo from "./AlzodLogo.svg";


export default function AppHead({ model_obj }) {
  const i = Math.floor(Math.random()*100)
  return (
    <Div>
      <Div onClick={get("https://jsonplaceholder.typicode.com/posts/"+i)}>
        show i: { i }
      </Div>
      <Div onClick={remove_func(model_obj.index)}>
        remove: { model_obj.index }
      </Div>
    </Div>
  );
};