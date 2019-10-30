import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Loading from "./Loading";
import { Div , Text } from "./alzod"
import AlzodLogo from "./AlzodLogo.svg";


export default function AppHead({ model_obj, func_obj }) {
  /* delete */const i = Math.floor(Math.random()*100);
  

  function GoBack() {
    return (
      <IconButton edge="start" color="inherit"
        onClick={func_obj.remove_func()}
      >
        <ArrowBackIosIcon />
      </IconButton>
    );
  };
  

  function Search() {
    return (
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
    );
  };
  

  function Mail() {
    return (
      <IconButton color="inherit"
        onClick={func_obj.get("https://jsonplaceholder.typicode.com/posts/"+i, 
          function(model) {
            func_obj.set_loading(false);
          }
        )}
      >
        <Badge badgeContent={model_obj.id} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
    );
  };
  

  function User() {
    return (
      <IconButton edge="end" color="inherit"
        onClick={func_obj.get("https://jsonplaceholder.typicode.com/posts/"+i)}
      >
        <Badge badgeContent={model_obj.id} color="secondary">
          <AccountCircle />
        </Badge>
      </IconButton>
    );
  };
  

  return (
    <AppBar position="sticky">
      <Toolbar>
        <GoBack />
        <Typography variant="h6" noWrap>
          {model_obj.id}
        </Typography>
        <Div style={{ flexGrow: 1 }} />
        <Search />
        <Mail />
        <User />
      </Toolbar>
      <Loading is_loading={func_obj.is_loading} />
    </AppBar>
  );
}