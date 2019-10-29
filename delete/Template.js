import React, { useState, useEffect } from 'react';


export default function Template(model_obj, next_chain) {
  
  next_chain({
    index: model_obj.index,
    model: model_obj,
    App: <App model_obj={model_obj} />
  })
};