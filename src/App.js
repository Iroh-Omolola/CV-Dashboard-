import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./component/Auth/Login";
import ResetPassword from "./component/Auth/ResetPassword";
import ResetSuccess from "./component/Auth/SuccessfulReset";
import Main from "./component/Main";
import MainContainer from "./component/MainContainer";

function App() {
 
  return (
    <Fragment>
       <Router>
       <Switch>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/reset/password" component={ResetPassword}/>
       <Route exact path="/resetSuccess" component={ResetSuccess}/>
       <Route  component={MainContainer}/>
       
      </Switch>
       </Router>
       </Fragment>

  );
}

export default App;
