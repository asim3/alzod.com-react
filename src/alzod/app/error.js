import React from 'react';
import { get } from "../Controller";
import { Div , Text } from "../components/alzod"

export default function Error(obj) {
  return (
    <Div>
      <Div>{obj.type}</Div>
      <Div>{obj.text}</Div>
    </Div>
  );
};