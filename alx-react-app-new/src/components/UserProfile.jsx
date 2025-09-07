import React from "react";

function UserProfile(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "15px",
        margin: "15px auto",
        maxWidth: "300px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "blue", marginBottom: "10px" }}>{props.name}</h2>
      <p style={{ margin: "5px 0" }}>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p style={{ margin: "5px 0" }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;