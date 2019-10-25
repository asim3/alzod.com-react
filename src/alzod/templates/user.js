import React from 'react';
import { fetch } from "../Controller";

export default function(obj) {
  return (
    <div onClick={fetch("./home")}>
      My user
    </div>
  );
};