import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export default function Route(path) {
    return (
        <Router>
            <Switch>
                <Route path={'/' + path}>
                    {/* page */}
                </Route>
            </Switch>
        </Router>
    );
}