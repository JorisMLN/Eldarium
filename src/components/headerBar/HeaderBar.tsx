import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom" ;

import { Home } from "../routes/home/Home" ;
import { History } from "../routes/history/History" ;
import { Chronicle } from "../routes/chronicle/Chronicle" ;
import { Game } from "../routes/game/Game" ;
import { Irl } from "../routes/irl/Irl" ;

import styles from './HeaderBar.module.css' ;

import { Grid, Tab, Tabs } from '@mui/material' ;

export function HeaderBar() {
  const routes = [
    { label: 'Home', path: '/' },
    { label: 'History', path: '/history' },
    { label: 'Chronicle', path: '/chronicle' },
    { label: 'Game', path: '/game' },
    { label: 'IRL', path: '/irl' }
  ] ;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const path = window.location.pathname ;
    setValue(routes.map(route => route.path).indexOf(path)) ;
  }, []);
  // }, [value,]); if we need to use it more than once

  return (
    <Router>
      <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <img className={styles.logo} src="/images/logo3.png" alt="eldariumLogo" loading="lazy"/>
        </Grid>
        <Grid item xs={10}>
          <Tabs value={value} onChange={handleChange} aria-label="nav tabs" TabIndicatorProps={{style: {background:'#000e44', color: 'white'}}}>
            {routes.map((item, index) => {
              return <Tab key={index} label={item.label} to={item.path} component={Link}></Tab>
            })}
          </Tabs>
        </Grid>
      </Grid>
        <Switch>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/chronicle">
            <Chronicle />
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
