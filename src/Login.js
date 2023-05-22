import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const { loginWithRedirect } = useAuth0();
  const onLogin = async () => {
    loginWithRedirect();
    history.push("/loggedin");
  };

  return (
    <div className="login-page">
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
