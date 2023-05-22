import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./Login";
import ProfilePage from "./Profile";
import LoggedInPage from "./LoggedIn";
import FormPage from "./Form";

export default function SwitchProvider() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/form" component={FormPage} />
        <Route path="/loggedin" component={LoggedInPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" component={LoginPage} />
        <Redirect to="/" from="/**" />
      </Switch>
    </BrowserRouter>
  );
}
