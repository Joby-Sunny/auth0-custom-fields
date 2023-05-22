import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import config from "./auth_config.json";
import Router from "./Router";
import "./index.css";

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  authorizationParams: {
    redirect_uri: `${window.location.origin}/loggedin`,
  },
};

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <Router />
  </Auth0Provider>,
  document.getElementById("root")
);
