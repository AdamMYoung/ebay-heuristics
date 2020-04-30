import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Map } from './views/Map';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Map} />
            <Redirect to="/" />
        </Switch>
    );
};
