import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import UserProfile from "./UserProfile";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="George" age="25" bio="Frontend developer who loves React and design." />
      <UserProfile name="Ama" age="30" bio="Traveler, foodie, and culture enthusiast." />
      <Footer />
    </div>
  );
}

export default App;
