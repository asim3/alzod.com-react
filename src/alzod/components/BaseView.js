import React from 'react';


export default function BaseView(model_obj) {
  return {
    id: model_obj.id,
    type: "error",
    text: `type: ${model_obj.type}\ntext: ${model_obj.text}`
  }
};