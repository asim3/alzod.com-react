import React from 'react';
import { get } from "../Controller";

export default function User(obj) {
  return (
    <div>
      <hr />
      <div>{obj.title}</div>
      <div>{obj.body}</div>
    </div>
  );
};