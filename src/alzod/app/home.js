import React from 'react';
import { get } from "../Controller";
import { Div , Text } from "../components/alzod"

export default function Home(obj) {
  return (
    <Div>
      <Div onClick={get("https://jsonplaceholder.typicode.com/posts/1")}>
        shwo posts 1
      </Div>
      <Div onClick={get("https://jsonplaceholder.typicode.com/posts/2")}>
        shwo posts 2
      </Div>
      <Div onClick={get("https://jsonplaceholder.typicode.com/posts/3")}>
        shwo posts 3
      </Div>
    </Div>
  );
};