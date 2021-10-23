import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom" ;

import { Home } from "../home/Home" ;
import { History } from "../history/History" ;
import { Story } from "../story/Story" ;
import { Game } from "../game/Game" ;
import { Irl } from "../irl/Irl" ;

import styles from './HeaderBar.module.css' ;
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button' ;

export function HeaderBar() {
  return (
    <Router>
      <div>
        {/* <Stack spacing={2} direction="row">
            <div className={styles.tab}>
                <Button>Primary</Button>
                <Link to="/" className={styles.link}>Home</Link>
            </div>
            <div className={styles.tab}>
                <Link to="/history" className={styles.link}>History</Link>
            </div>
            <div className={styles.tab}>
                <Link to="/story" className={styles.link}>Stories</Link>
            </div>
            <div className={styles.tab}>
                <Link to="/game" className={styles.link}>Mini Game</Link>
            </div>
            <div className={styles.tab}>
                <Link to="/irl" className={styles.link}>IRL</Link>
            </div>
        </Stack> */}
          <div className={styles.row}>
            <div className={styles.tab}>
                <Link to="/" className={styles.link}>Home</Link>
            </div>
            <div className={styles.tab}>
                <Link to="/history" className={styles.link}>Our Story</Link>
            </div>
            <div className={styles.tab}>
                <Link to="/story" className={styles.link}>Eldar Chronicles</Link>
            </div>
            <div className={styles.tab}>
                <Link to="/game" className={styles.link}>Vingilot Studio</Link>
            </div>
            <div className={styles.tab}>
                <Link to="/irl" className={styles.link}>IRL</Link>
            </div>
          </div>
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
