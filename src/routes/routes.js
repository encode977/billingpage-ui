import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Apps from "../pages/Apps";
import Billings from "../pages/Billings";
import Home from "../pages/Home";
import Invitations from "../pages/Invitations";
import Password from "../pages/Password";
import Sidebar from "../pages/Sidebar";

function routes() {
  return (
    <Router>
      <div className="grid grid-cols-12 gap-8">
        <Sidebar className="" />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/password">
            <Password />
          </Route>
          <Route path="/billings">
            <Billings />
          </Route>
          <Route path="/invitations">
            <Invitations />
          </Route>
          <Route path="/apps">
            <Apps />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default routes;
