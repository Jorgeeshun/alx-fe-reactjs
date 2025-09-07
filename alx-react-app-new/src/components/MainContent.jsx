import React from "react";

function MainContent() {
  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: "#eef2f3",
        minHeight: "200px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "darkgreen" }}>Welcome to My City Guide</h2>
      <p style={{ fontSize: "16px", marginTop: "10px" }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;
