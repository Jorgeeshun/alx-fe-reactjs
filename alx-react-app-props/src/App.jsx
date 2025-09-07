import React from "react";
import ProfilePage from "./components/ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = { 
    name: "George Prince Eshun", 
    email: "georgeprinceakeshun23@gmail.com"
  };

  return (
  <UserContext.Provider value={userData}>
    <ProfilePage/>
    </UserContext.Provider>
  );
}

export default App;
