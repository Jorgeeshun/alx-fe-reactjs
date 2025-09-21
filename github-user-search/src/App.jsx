import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center py-6 text-gray-800">
        GitHub Advanced User Search
      </h1>
      <Search />
    </div>
  );
}

export default App;
