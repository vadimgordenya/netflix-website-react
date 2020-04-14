import React from 'react';
import './css/App.css';

import Main from './pages';

import {Route, Switch} from "react-router-dom";

const App = () => (
    <div className="App">
        <Switch>
            <Route path='/' component={Main}/>
        </Switch>
    </div>
);

export default App;
