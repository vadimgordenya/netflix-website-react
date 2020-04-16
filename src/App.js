import React from 'react';
import {Route, Switch} from "react-router-dom";
import './css/App.css';

import Main from './pages';
import Login from './pages/Login';
import ChoosePlan from "./pages/ChoosePlan";

const App = () => (
    <div className="App">
        <Switch>
            <Route path='/' component={Main} exact/>
            <Route path='/login' component={Login} />
            <Route path='/choose-plan' component={ChoosePlan} />
        </Switch>
    </div>
);

export default App;
