import { Route, Switch } from "react-router" ;

import { Home } from "../home/Home" ;
import { History } from "../history/History" ;
import { Chronicle } from "../chronicle/Chronicle" ;
import { Game } from "../game/Game" ;
import { Irl } from "../irl/Irl" ;

export const routes = [
    { label: 'Home', path: '/' },
    { label: 'History', path: '/history' },
    { label: 'Chronicle', path: '/chronicle' },
    { label: 'Game', path: '/game'},
    { label: 'IRL', path: '/irl' }
  ] ;

export function RouterComponent() {
    return (
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
    ) ;
}