import { useAuth0 } from "@auth0/auth0-react";
import { Link, useHistory } from "react-router-dom";
import React from "react";

export default function Profile() {
  const history = useHistory();
  const { isLoading, isAuthenticated, logout } = useAuth0();

  const onLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  if (isLoading) {
    return <div> Loding..... </div>;
  } else {
    if (isAuthenticated) {
      return (
        <>
          <p className="login-page--text">You have logged in successfully</p>
          <Link to="profile">Go To Profile Page</Link>
          <button onClick={onLogout}>Logout</button>
        </>
      );
    } else {
      history("/login");
      return null;
    }
  }
}
