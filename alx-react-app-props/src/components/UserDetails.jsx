import React from "react";
import React, { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const userData = useContext(UserContext);

  if (!userData) {
    return <>User data not available.</>
  }

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
