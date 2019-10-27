import React from 'react';
import { get, remove_func } from "../Controller";
import { Div , Text, H3 } from "../components/alzod"

export default function User(obj) {
  return (
    <Div>
      <H3>{obj.id}</H3>
      <Div>{obj.body}</Div>
    </Div>
  );
};