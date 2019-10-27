import React from 'react';


export function Div(props) {
  return <div {...props}>{props.children}</div>
};

export function Text(props) {
  return <span {...props}>{props.children}</span>
};

export function H3(props) {
  return <h3 {...props}>{props.children}</h3>
};