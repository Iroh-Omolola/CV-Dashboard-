import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Auth/Login';

const AuthRoute = () => {
    return (
       <Router>
        <Switch>
       <Route exact path="/logo" component={Login}/>
        </Switch>
        </Router>
    )
}

export default AuthRoute
