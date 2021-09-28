import React from 'react';
import {Login} from './screens';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

export function App(){
    return(
        <Router>
            <Switch>
                <Route path="/" component={Login} />
            </Switch>
        </Router>
    )
}