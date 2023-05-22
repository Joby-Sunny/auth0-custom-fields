import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export default function Profile() {
  const { user } = useAuth0();
  return (
    <div className="profile-page">
      <img src={user.picture} alt={user.name} />
      <h5> Hi, I am {user.name} </h5>
    </div>
  );
}
