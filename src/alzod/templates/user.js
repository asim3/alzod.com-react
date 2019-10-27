import React from 'react';
import { get, remove_func } from "../Controller";

export default function User(obj) {
  return (
    <div>
      <div>{obj.title}</div>
      <div>{obj.body}</div>
    </div>
  );
};