import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Callback } from './Callback';
import { Home } from './Home';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route exact path="/callback" component={Callback} />
            <Redirect to="/" />
        </Switch>
    );
};
