import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { get, remove_func } from "../Controller";
import { Div , Text } from "./alzod"
import AlzodLogo from "./AlzodLogo.svg";



export default function AppHead({ model_obj }) {
  const not_index = model_obj.index !== 100;
  /* delete */const i = Math.floor(Math.random()*100);
  

  function GoBack() {
    return (
      <IconButton edge="start" color="inherit"
        onClick={not_index ? remove_func(model_obj.index) : null}
      >
        {not_index ? <ArrowBackIosIcon /> : <MenuIcon /> }
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
      <IconButton color="inherit">
        <Badge badgeContent={model_obj.id} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
    );
  };
  

  function User() {
    return (
      <IconButton edge="end" color="inherit"
        onClick={get("https://jsonplaceholder.typicode.com/posts/"+i)}
      >
        <Badge badgeContent={model_obj.id} color="secondary">
          <AccountCircle />
        </Badge>
      </IconButton>
    );
  };


  return (
    <AppBar position="fixed">
      <Toolbar>
        <GoBack />
        <Typography variant="h6" noWrap>
          {not_index ? model_obj.id : "Alzod"}
        </Typography>
        <Div style={{ flexGrow: 1 }} />
        <Search />
        <Mail />
        <User />
      </Toolbar>
    </AppBar>
  );
}