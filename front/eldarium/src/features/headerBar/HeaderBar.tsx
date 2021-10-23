import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom" ;

import { Home } from "../home/Home" ;
import { History } from "../history/History" ;
import { Story } from "../story/Story" ;
import { Game } from "../game/Game" ;
import { Irl } from "../irl/Irl" ;

import styles from './HeaderBar.module.css' ;

import { Grid, Tab, Tabs } from '@mui/material' ;

export function HeaderBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Router>
      <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <img className={styles.logo} src="/images/logo3.png" alt="eldariumLogo" loading="lazy"/>
        </Grid>
        <Grid item xs={10}>
          <Tabs value={value} onChange={handleChange} aria-label="nav tabs" TabIndicatorProps={{style: {background:'#000e44', color: 'white'}}}>
            <Tab label="Home" to="/" component={Link}></Tab>
            <Tab label="History" to="/history" component={Link}></Tab>
            <Tab label="Story" to="/story" component={Link}></Tab>
            <Tab label="Game" to="/game" component={Link}></Tab>
            <Tab label="IRL" to="/irl" component={Link}></Tab>
          </Tabs>
        </Grid>
      </Grid>
        <Switch>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/irl">
            <Irl />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
