import React from 'react';
import { Div , Text } from "../components/alzod"

export default function Home(model_obj, func_obj) {
  return (
    <Div>
      <Div onClick={func_obj.get("https://jsonplaceholder.typicode.com/posts/1")}>
        shwo posts 1
      </Div>
      <Div onClick={func_obj.get("https://jsonplaceholder.typicode.com/posts/2")}>
        shwo posts 2
      </Div>
      <Div onClick={func_obj.get("https://jsonplaceholder.typicode.com/posts/3")}>
        shwo posts 3
      </Div>
    </Div>
  );
};