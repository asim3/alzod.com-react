import React from 'react';
import { Div , Text } from "../components/alzod"

const errors = {
  E001: "No Internet Connenctin!",
  E002: "Cannot handele response!",
  E003: "Cannot handele JSON request!",
  E004: "Error!",
  E404: "Not found!",
  E503: "Service time out!",
  E999: "Error [id] not found!"
}


export default function Error(model_obj, func_obj) {
  return (
    <Div>
      <Div>{errors[model_obj.error_id || "E999"]}</Div>
    </Div>
  );
};