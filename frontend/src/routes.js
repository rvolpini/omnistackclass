import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './Pages/Feed';
import New from './Pages/New';

function Routes() {
    return (
    <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/new" component={New} />
    </Switch>
    );
}

export default Routes;