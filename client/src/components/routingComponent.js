import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Calendar from './calendar/Calendar';
import Login from './login/login';
import Home from './Home'

const routingComponent = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/calendar' component={Calendar} />
        </Switch>
    </main>
)

export default routingComponent;