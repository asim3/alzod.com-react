import React from 'react';
import { fetch } from "../Controller";

export default function(obj) {
  return (
    <div onClick={fetch("./user")}>
      My Home
    </div>
  );
};