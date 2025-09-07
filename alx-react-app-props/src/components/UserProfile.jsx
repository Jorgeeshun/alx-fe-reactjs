import React, { useContext } from "react";
import UserContext from "./UserContext";  // go up one level to find UserContext

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ padding: "20px", border: "1px solid gray", margin: "10px" }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserProfile;
