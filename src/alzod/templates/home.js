import React from 'react';
import { get } from "../Controller";

export default function Home(obj) {
  return (
    <div>
      <div onClick={get("https://jsonplaceholder.typicode.com/posts/1")}>
        shwo posts 1
      </div>
      <div onClick={get("https://jsonplaceholder.typicode.com/posts/2")}>
        shwo posts 2
      </div>
      <div onClick={get("https://jsonplaceholder.typicode.com/posts/3")}>
        shwo posts 3
      </div>
    </div>
  );
};