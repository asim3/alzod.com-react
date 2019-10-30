import React from 'react';
import { Div , Text } from "./alzod"
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Loading({ is_loading }) {
  if(is_loading) {
    return <LinearProgress />
  }
  else {
    return <Loading variant="determinate" value={100} />
  }
};