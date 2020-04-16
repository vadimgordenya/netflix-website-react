import React from 'react';
import './css/App.css';

import Main from './pages';
import Login from './pages/Login';

import {Route, Switch} from "react-router-dom";

const App = () => (
    <div className="App">
        <Switch>
            <Route path='/' component={Main} exact/>
            <Route path='/login' component={Login} />
        </Switch>
    </div>
);

export default App;
