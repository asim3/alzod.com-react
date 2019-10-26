import React from 'react';
import { get } from "../Controller";

export default function Error(obj) {
  return (
    <div>
      <div>{obj.type}</div>
      <div>{obj.text}</div>
    </div>
  );
};