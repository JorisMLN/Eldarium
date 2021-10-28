import React, { useEffect } from "react" ;
import { BrowserRouter as Router, Link } from "react-router-dom" ;
import { Grid, Tab, Tabs } from '@mui/material' ;

import { RouterComponent, routes } from "../routes/router/RouterComponent" ;

import styles from './HeaderBar.module.css' ;

export function HeaderBar() {

  const [value, setValue] = React.useState(0) ;

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue) ;
  };

  useEffect(() => {
    const path = window.location.pathname ;
    setValue(routes.map(route => route.path).indexOf(path)) ;
  }, []);

  return (
    <Router>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img className={styles.logo} src="/images/logo3.png" alt="eldariumLogo" loading="lazy"/>
          </Grid>
          <Grid item xs={10}>
            {/* To change Tabs Indicator css :  TabIndicatorProps={{style: {background:'#000e44'}}} */}
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
              {routes.map((item, index) => {
                return <Tab key={index} label={item.label} to={item.path} component={Link}></Tab>
              })}
            </Tabs>
          </Grid>
        </Grid>
        <RouterComponent />
      </div>
    </Router>
  ) ;
}
