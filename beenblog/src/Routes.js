import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./pages/login/Login";
import MainPage from "./pages/main/Main";

function Routes() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/beenblog">main</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/beenblog" component={MainPage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default Routes;
