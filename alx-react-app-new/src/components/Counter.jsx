import React, { useState } from "react";

function Counter() {
  // Initialize state with count = 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Counter App</h2>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Current Count: {count}
      </p>
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{ margin: "5px", padding: "10px 15px" }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ margin: "5px", padding: "10px 15px" }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ margin: "5px", padding: "10px 15px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
